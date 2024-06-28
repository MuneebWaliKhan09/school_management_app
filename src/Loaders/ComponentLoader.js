import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';
import {SPLASH_COLOR} from '../strings/Colors';

const ComponentLoader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <LottieView
          style={{flex: 1}}
          source={require('../animations/componentLoader.json')}
          autoPlay
          loop
        />
      </View>
    </View>
  );
};

export default ComponentLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: SPLASH_COLOR,
  },
  welcome: {
    width: responsiveScreenWidth(70),
    aspectRatio: 1,
  },
});
