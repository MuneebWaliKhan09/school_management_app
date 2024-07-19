import {View, Text, StatusBar, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {SPLASH_COLOR, THEME_COLOR} from '../../strings/Colors';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {loadTheme as adminLoadTheme} from '../../store/Theme/ThemeAdmin';
import {loadTheme as studentLoadTheme} from '../../store/Theme/ThemeStudent';
import {loadTheme as teacherLoadTheme} from '../../store/Theme/ThemeTeacher';

const Splash = () => {
  const screenFocused = useIsFocused();
  const dispatch = useDispatch();
  const nav = useNavigation();

  useEffect(() => {
    verifyUserLogedIn();
    dispatch(adminLoadTheme());
    dispatch(studentLoadTheme());
    dispatch(teacherLoadTheme());
  }, [screenFocused]);

  const verifyUserLogedIn = async () => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    const userData = await AsyncStorage.getItem('userData');

    if (accessToken) {
      switch (JSON.parse(userData)?.role) {
        case 'admin':
          nav.navigate('AdminHome');
          break;
        case 'teacher':
          nav.navigate('TeacherHome');
          break;
        case 'student':
          nav.navigate('StudentHome');
          break;
        default:
          console.error('Unknown role:', "no role");
      }
    } else {
      nav.navigate('Welcome');
    }
  };

  return (
    <View style={styles.container}>
      {/* status bar is top layer where time,network,battery shows */}
      <StatusBar barStyle={'light-content'} backgroundColor={THEME_COLOR} />
      {/* <Image  style={styles.logo} source={require("../../images/splash.png")}/> */}
      <View style={styles.welcome}>
        <LottieView
          style={{flex: 1}}
          source={require('../../animations/9fw3seYPAO.json')}
          autoPlay
          loop
        />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: SPLASH_COLOR,
  },
  logo: {
    width: responsiveScreenWidth(85),
    height: '50%',
    resizeMode: 'contain',
  },
  welcome: {
    height: responsiveScreenWidth(70),
    aspectRatio: 1,
  },
});
