import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AttendanceCustomDrawer from '../../../components/TeacherDrawer/AttendanceCustomDrawer/AttendanceCustomDrawer';
import CustomHeader from '../../../components/CustomHeader';
import {GHOST_WHITE} from '../../../strings/Colors';
import {useSelector} from 'react-redux';
import Attendance from '../Attendance/Attendance.js';

const Drawer = createDrawerNavigator();

const options = {
  headerShown: true,
  headerTintColor: GHOST_WHITE,
  headerTitleStyle: {
    fontWeight: 'semibold',
  },
  headerTitleAlign: 'center',
};

const AttendanceDrawerTcr = () => {
  const theme = useSelector(state => state.themeTeacher);
  return (
    <Drawer.Navigator
      drawerContent={props => <AttendanceCustomDrawer {...props} />}>
      <Drawer.Screen
        name="Today Attendance"
        options={({navigation}) => ({
          ...options,
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerLeft: () => <CustomHeader navigation={navigation} />,
        })}
        component={Attendance}
      />
    </Drawer.Navigator>
  );
};

export default AttendanceDrawerTcr;
