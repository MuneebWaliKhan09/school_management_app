import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../Profile/Profile';
import PorfileCustomDrawer from '../../../components/StudentDrawer/ProfileCustomDrawer/PorfileCustomDrawer';
import CustomHeader from '../../../components/CustomHeader';
import { GHOST_WHITE } from '../../../strings/Colors';
import { useSelector } from 'react-redux';

const Drawer = createDrawerNavigator();


const options = {
  headerShown: true,
  headerTintColor: GHOST_WHITE,
  headerTitleStyle: {
    fontWeight: 'semibold',
  },
  headerTitleAlign: 'center',
};


const PorfileDrawer = () => {
  const theme = useSelector(state => state.themeStudent);

  return (
    <Drawer.Navigator
      drawerContent={props => <PorfileCustomDrawer {...props} />}>
      <Drawer.Screen name="My Profile" 
      options={({navigation}) => ({
        ...options,
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerLeft: () => <CustomHeader navigation={navigation} />, // Custom header left component
      })}
      component={Profile} />
    </Drawer.Navigator>
  );
};


export default PorfileDrawer;
