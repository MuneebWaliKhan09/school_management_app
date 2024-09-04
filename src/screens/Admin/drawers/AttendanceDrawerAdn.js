import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AttendanceCustomDrawer from '../../../components/AdminDrawer/AttendanceCustomDrawer/AttendanceCustomDrawer';
import CustomHeader from '../../../components/CustomHeader.js';
import {GHOST_WHITE} from '../../../strings/Colors.js';
import {useSelector} from 'react-redux';
import Attendances from '../Attendances/Attendances.js';

const Drawer = createDrawerNavigator();

const options = {
  headerShown: true,
  headerTintColor: GHOST_WHITE,
  headerTitleStyle: {
    fontWeight: 'semibold',
  },
  headerTitleAlign: 'center',
};

const AttendanceDrawerAdn = () => {
  const theme = useSelector(state => state.themeAdmin);
  return (
    <Drawer.Navigator
      drawerContent={props => <AttendanceCustomDrawer {...props} />}>
      <Drawer.Screen
        name="All Attendances"
        options={({navigation}) => ({
          ...options,
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerLeft: () => null,
        })}
        component={Attendances}
      />
    </Drawer.Navigator>
  );
};

export default AttendanceDrawerAdn;
