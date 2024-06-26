import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import { GHOST_WHITE } from '../strings/Colors';

const CustomHeaderLeft = ({navigation}) => (
  <TouchableOpacity onPress={() => navigation.openDrawer()}>
    <Image
      source={require('../images/icons/menu.png')}
      style={styles.customIcon}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  customIcon: {
    width: 25,
    height: 25,
    marginLeft: 20,
    tintColor: GHOST_WHITE,
  },
});

export default CustomHeaderLeft;
