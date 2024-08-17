import React, {useEffect} from 'react';
import Profile from '../Teacher/Profile/Profile';
import {GHOST_WHITE, THEME_COLOR} from '../../strings/Colors';
import CustomHeader from '../../components/CustomHeader';
import TeacherMain from '../Teacher/TeacherMain';
import TeacherDrawer from '../../components/TeacherDrawer/TeacherDrawer';
import { useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StudentMain from '../Student/StudentMain';
import StudentsTeacher from './StudentsTeacher/StudentsTeacher';

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
  const theme = useSelector(state => state.themeTeacher);
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Dashboard"
        options={{headerShown: false}}
        component={TeacherMain}
      />
      <Bottom.Screen
        name="Students"
        options={{headerShown: true}}
        component={StudentsTeacher}
      />
      <Bottom.Screen
        name="Attendance"
        options={{headerShown: false}}
        component={StudentMain}
      />
      <Bottom.Screen
        name="Classes"
        options={{headerShown: false}}
        component={StudentMain}
      />
      <Bottom.Screen
        name="Profile"
        options={{headerShown: false}}
        component={StudentMain}
      />
    </Bottom.Navigator>
  );
};


export default BottomNav