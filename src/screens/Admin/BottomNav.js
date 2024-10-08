import React, {useEffect} from 'react';
import AdminMain from './AdminMain';
import Profile from './Porfile/Profile';
import {GHOST_WHITE, THEME_COLOR, WHITE_BG} from '../../strings/Colors';
import CustomHeader from '../../components/CustomHeader';
import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StudentsAdmin from './StudentsAdmin/StudentsAdmin';
import LottieView from 'lottie-react-native';
import PorfileDrawer from './drawers/ProfileDrawer';
import StudentDrawerAdmin from './drawers/StudentDrawerAdmin';
import AttendanceDrawerAdn from './drawers/AttendanceDrawerAdn';

const Bottom = createBottomTabNavigator();

const options = {
  headerShown: true,
  headerTintColor: GHOST_WHITE,
  headerTitleStyle: {
    fontWeight: 'semibold',
  },
  headerTitleAlign: 'center',
};

const BottomNav = () => {
  const theme = useSelector(state => state.themeAdmin);

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
        component={AdminMain}
      />
      <Bottom.Screen
        name="Students"
        options={{headerShown: false}}
        component={StudentDrawerAdmin}
      />
       <Bottom.Screen
        name="Attendances"
        options={{headerShown: false}}
        component={AttendanceDrawerAdn}
      />
      <Bottom.Screen
        name="Classes"
        options={{headerShown: false}}
        component={StudentDrawerAdmin}
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
