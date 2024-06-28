import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Half_WHITE} from '../strings/Colors';

const CustomDivider = ({bgColor, marginTopBtm}) => {
  return (
    <View
      style={[
        styles.divider,
        {
          backgroundColor: bgColor ? bgColor : Half_WHITE,
          marginVertical: marginTopBtm ? marginTopBtm : 8,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    opacity: 0.5,
  },
});

export default CustomDivider;
