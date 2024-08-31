import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StudentMain from './StudentMain';
import {GHOST_WHITE, THEME_COLOR} from '../../strings/Colors';
import {useSelector} from 'react-redux';
import PorfileDrawer from './drawers/ProfileDrawer';

const Bottom = createBottomTabNavigator();

const options = {
  headerShown: true,
  headerTitle: 'My Profile',
  headerStyle: {
    backgroundColor: THEME_COLOR,
  },
  headerTintColor: GHOST_WHITE,
  headerTitleStyle: {
    fontWeight: 'semibold',
  },
  headerTitleAlign: 'center',
};

const BottomNav = () => {
  const theme = useSelector(state => state.themeStudent);
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="dashboard"
        component={StudentMain}
        options={{headerShown: false}}
      />

      <Bottom.Screen
        name="Profile"
        component={PorfileDrawer}
        options={{headerShown:false}}
      />
    </Bottom.Navigator>
  );
};

export default BottomNav;
