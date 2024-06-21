import {View, Text, StatusBar, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import { SPLASH_COLOR, THEME_COLOR } from '../../strings/Colors';
import {responsiveScreenWidth} from "react-native-responsive-dimensions"
import LottieView from 'lottie-react-native';


const Splash = () => {
  const navigate = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigate.navigate('Welcome');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {/* status bar is top layer where time,network,battery shows */}
      <StatusBar barStyle={'light-content'} backgroundColor={THEME_COLOR} />
      {/* <Image  style={styles.logo} source={require("../../images/splash.png")}/> */}
      <View style={styles.welcome}>
        <LottieView style={{flex:1}} source={require("../../animations/9fw3seYPAO.json")} autoPlay loop />
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
    resizeMode:'contain'
  },
  welcome:{
    height:responsiveScreenWidth(70),
    aspectRatio:1
  },

});
