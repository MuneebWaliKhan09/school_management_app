// import {View, Text, StyleSheet} from 'react-native';
// import React from 'react';
// import LottieView from 'lottie-react-native';
// import {responsiveScreenWidth} from 'react-native-responsive-dimensions';
// import {SPLASH_COLOR} from '../strings/Colors';

// const Loader = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.welcome}>
//         <LottieView
//           style={{flex: 1}}
//           source={require('../animations/9fw3seYPAO.json')}
//           autoPlay
//           loop
//         />
//       </View>
//     </View>
//   );
// };

// export default Loader;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: SPLASH_COLOR,
//   },
//   welcome: {
//     width: responsiveScreenWidth(70),
//     aspectRatio: 1,
//   },
// });

import {View, StatusBar, StyleSheet} from 'react-native';
import {Animated} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import React, {useEffect, useRef, useState} from 'react';
import {THEME_COLOR} from '../strings/Colors';
import {useSelector} from 'react-redux';
import {useUserDetailsQuery} from '../store/features/userFeatures';

const Loader = () => {
  const {data: userData} = useUserDetailsQuery();
  const themeA = useSelector(state => state.themeAdmin);
  const themeT = useSelector(state => state.themeTeacher);
  const themeS = useSelector(state => state.themeStudent);
  const [role, setrole] = useState('');

  useEffect(() => {
    if (userData && userData?.role) {
      setrole(userData?.role);
    }
  }, [userData,role]);

  // Dots animation
  const opacityAnim1 = useRef(new Animated.Value(1)).current;
  const opacityAnim2 = useRef(new Animated.Value(1)).current;
  const opacityAnim3 = useRef(new Animated.Value(1)).current;
  const opacityAnim4 = useRef(new Animated.Value(1)).current;

  const createAnimation = animatedValue => {
    return Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 0.2,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    );
  };

  useEffect(() => {
    createAnimation(opacityAnim1).start();
    setTimeout(() => createAnimation(opacityAnim2).start(), 200);
    setTimeout(() => createAnimation(opacityAnim3).start(), 400);
    setTimeout(() => createAnimation(opacityAnim4).start(), 600);
  }, [opacityAnim1, opacityAnim2, opacityAnim3, opacityAnim4]);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={
          role === 'admin'
            ? themeA.background
            : role === 'teacher'
            ? themeT.background
            : themeS.background
        }
      />
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <Animated.Text
          style={[
            styles.dot,
            {
              opacity: opacityAnim1,
              backgroundColor:
                role === 'admin'
                  ? themeA.background
                  : role === 'teacher'
                  ? themeT.background
                  : themeS.background,
            },
          ]}></Animated.Text>
        <Animated.Text
          style={[
            styles.dot,
            {
              opacity: opacityAnim2,
              backgroundColor:
                role === 'admin'
                  ? themeA.background
                  : role === 'teacher'
                  ? themeT.background
                  : themeS.background,
            },
          ]}></Animated.Text>
        <Animated.Text
          style={[
            styles.dot,
            {
              opacity: opacityAnim3,
              backgroundColor:
                role === 'admin'
                  ? themeA.background
                  : role === 'teacher'
                  ? themeT.background
                  : themeS.background,
            },
          ]}></Animated.Text>
        <Animated.Text
          style={[
            styles.dot,
            {
              opacity: opacityAnim4,
              backgroundColor:
                role === 'admin'
                  ? themeA.background
                  : role === 'teacher'
                  ? themeT.background
                  : themeS.background,
            },
          ]}></Animated.Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  dot: {
    height: responsiveHeight(1),
    width: responsiveWidth(1),
    padding: 4,
    marginTop: 30,
    backgroundColor: THEME_COLOR,
    borderRadius: 50,
  },
});

export default Loader;
