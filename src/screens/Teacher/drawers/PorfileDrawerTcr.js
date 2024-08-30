import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import PorfileCustomDrawer from '../../../components/TeacherDrawer/ProfileCustomDrawer/PorfileCustomDrawer';
import CustomHeader from '../../../components/CustomHeader';
import { GHOST_WHITE } from '../../../strings/Colors';
import { useSelector } from 'react-redux';
import Profile from '../Profile/Profile';

const Drawer = createDrawerNavigator();


const options = {
  headerShown: true,
  headerTintColor: GHOST_WHITE,
  headerTitleStyle: {
    fontWeight: 'semibold',
  },
  headerTitleAlign: 'center',
};


const PorfileDrawerTcr = () => {
  const theme = useSelector(state => state.themeTeacher);

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


export default PorfileDrawerTcr;
