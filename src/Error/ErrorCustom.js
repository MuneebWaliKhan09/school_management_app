import {View, Text, Image} from 'react-native';
import React from 'react';
import { responsiveFontSize, responsiveScreenFontSize } from 'react-native-responsive-dimensions';

const ErrorCustom = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap:20
      }}>
      <Image
        source={require('../images/icons/warning.png')}
        style={{width: 80, height: 80}}
      />
      <Text
        style={{
          fontSize: responsiveScreenFontSize(2.3),
          fontWeight: '900',
          textAlign: 'center',
          lineHeight: 23,
          padding:10,
          color: '#EE5253',
        }}>
        You'r not yet Class Teacher of any class please contact admin !
      </Text>
    </View>
  );
};

export default ErrorCustom;
