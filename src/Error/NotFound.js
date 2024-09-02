import {View, Text, Image} from 'react-native';
import React from 'react';
import { responsiveFontSize, responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import { THEME_COLOR } from '../strings/Colors';

const NotFound = ({message}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap:20
      }}>
      <Text
        style={{
          fontSize: responsiveScreenFontSize(2),
          fontWeight: '900',
          textAlign: 'center',
          lineHeight: 23,
          padding:10,
          color: THEME_COLOR,
        }}>
        {message}
      </Text>
    </View>
  );
};



export default NotFound