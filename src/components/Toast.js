import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated, Image, Easing } from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Toast = ({ visible, message, duration = 3000, type = 'default', onClear }) => {
  const [show, setShow] = useState(visible);
  const opacity = useState(new Animated.Value(0))[0];

  useEffect(() => {
    if (visible) {
      setShow(true);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }).start(() => {
        setTimeout(() => {
          Animated.timing(opacity, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
            easing: Easing.in(Easing.ease),
          }).start(() => {
            setShow(false);
            // Call onClear to notify parent component to clear the toast
            onClear();
          });
        }, duration);
      });
    } else {
      setShow(false);
    }
  }, [visible, duration, opacity, onClear]);

  if (!show) {
    return null;
  }

  return (
    <Animated.View style={[styles.toastContainer, styles[type], { opacity }]}>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: responsiveWidth(1), paddingHorizontal: responsiveWidth(3) }}>
        {type === 'success' ? (
          <>
            <Image
              source={require('../images/icons/check.png')}
              style={{ width: responsiveWidth(6), height: responsiveWidth(6), marginRight: responsiveWidth(2) }}
            />
            <Text style={styles.toastText}>{message}</Text>
          </>
        ) : type === 'error' ? (
          <>
            <Image
              source={require('../images/icons/error.png')}
              style={{ width: responsiveWidth(6), height: responsiveWidth(6), marginRight: responsiveWidth(2) }}
            />
            <Text style={styles.toastText}>{message}</Text>
          </>
        ) : null}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    left: responsiveWidth(8),
    right: responsiveWidth(8),
    top: responsiveHeight(6),
    borderRadius: responsiveWidth(2),
    padding: responsiveWidth(3),
    zIndex: 1000,
    elevation: 8,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  default: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  success: {
    backgroundColor: 'seagreen',
  },
  error: {
    backgroundColor: '#CC3233',
  },
  toastText: {
    color: 'white',
    fontSize: responsiveFontSize(1.9),
    flex: 1,
    flexWrap: 'wrap',
    paddingLeft: responsiveWidth(2),
  },
});

export default Toast;
