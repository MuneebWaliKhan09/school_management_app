import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Half_WHITE } from '../strings/Colors';

const CustomDivider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: Half_WHITE, // Change this to your desired color
    opacity:0.5,
    marginVertical: 8,
  },
});

export default CustomDivider;
