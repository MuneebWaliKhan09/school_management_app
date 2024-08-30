import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../Porfile/Profile';
import PorfileCustomDrawer from '../../../components/AdminDrawer/ProfileCustomDrawer/PorfileCustomDrawer';
import CustomHeader from '../../../components/CustomHeader';
import { GHOST_WHITE } from '../../../strings/Colors';
import { useSelector } from 'react-redux';
import StudentsCustomDrawer from '../../../components/AdminDrawer/StudentsDrawer/StudentCustomDrawer';
import StudentsAdmin from '../StudentsAdmin/StudentsAdmin';

const Drawer = createDrawerNavigator();


const options = {
  headerShown: true,
  headerTintColor: GHOST_WHITE,
  headerTitleStyle: {
    fontWeight: 'semibold',
  },
  headerTitleAlign: 'center',
};


const StudentDrawerAdmin = () => {
  const theme = useSelector(state => state.themeAdmin);

  return (
    <Drawer.Navigator
      drawerContent={props => <StudentsCustomDrawer {...props} />}>
      <Drawer.Screen name="All Students" 
      options={({navigation}) => ({
        ...options,
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerLeft: () => <CustomHeader navigation={navigation} />, // Custom header left component
      })}
      component={StudentsAdmin} />
    </Drawer.Navigator>
  );
};


export default StudentDrawerAdmin;
