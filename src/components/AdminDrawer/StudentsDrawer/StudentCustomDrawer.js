import {View, Text, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {Avatar, Caption, Drawer, Title} from 'react-native-paper';
import {GHOST_WHITE, Half_WHITE, THEME_COLOR} from '../../../strings/Colors';
import { useSelector } from 'react-redux';
import CustomDivider from '../../CustomDivider';

const StudentsCustomDrawer = props => {
  const theme = useSelector(state => state.themeAdmin);
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <Avatar.Image
              source={require('../../../images/icons/profile.png')}
              size={80}
            />
            <Title style={styles.title}>Students Admin</Title>
            <Caption style={styles.caption}>
              StudentsAdmin@gmail.com
            </Caption>
          </View>
          <CustomDivider />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLOR,
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 7,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color: GHOST_WHITE,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: Half_WHITE,
  },
  drawerSection: {
    marginTop: 5,
  },
  preferencesTitle: {
    fontSize: 14,
    marginLeft: 19,
    fontWeight: '500',
    color: GHOST_WHITE, // Customize the color here
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 19,
  },
  bottomDrawerSection: {
    borderBottomWidth: 0.5,
    marginBottom: 0.5,
    borderBottomColor: Half_WHITE,
  },
});


export default StudentsCustomDrawer