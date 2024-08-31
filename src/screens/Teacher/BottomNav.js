import React, {useEffect} from 'react';
import {GHOST_WHITE, THEME_COLOR, WHITE_BG} from '../../strings/Colors';
import TeacherMain from '../Teacher/TeacherMain';
import { useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StudentMain from '../Student/StudentMain';
import PorfileDrawerTcr from './drawers/PorfileDrawerTcr';
import StudentsDrawerTcr from './drawers/StudentsDrawerTcr';
import CustomHeader from '../../components/CustomHeader';
import LottieView from 'lottie-react-native';
import AttendanceDrawerTcr from './drawers/AttendanceDrawerTcr';

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
        options={({navigation}) => ({
          headerShown: true,
          headerTitle: 'S.M.S Dashboard',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            color: WHITE_BG
          },
          headerStyle: {backgroundColor: theme.background},
          headerLeft: () => <CustomHeader navigation={navigation} />,
          headerRight: () => (
            <LottieView
              style={{width: 72, height: 72}}
              source={require('../../animations/3Raoy0aoi8.json')}
              autoPlay
              loop
            />
          ),
        })}
        component={TeacherMain}
      />
      <Bottom.Screen
        name="Students"
        options={{headerShown: false}}
        component={StudentsDrawerTcr}
      />
      <Bottom.Screen
        name="Attendance"
        options={{headerShown: false}}
        component={AttendanceDrawerTcr}
      />
      <Bottom.Screen
        name="Classes"
        options={{headerShown: false}}
        component={StudentsDrawerTcr}
      />
      <Bottom.Screen
        name="Profile"
        options={{headerShown: false}}
        component={PorfileDrawerTcr}
      />
    </Bottom.Navigator>
  );
};


export default BottomNav