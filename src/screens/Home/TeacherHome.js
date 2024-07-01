import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../Teacher/Profile/Profile';
import {GHOST_WHITE, THEME_COLOR} from '../../strings/Colors';
import CustomHeaderLeft from '../../components/CustomHeaderLeft';
import TeacherMain from '../Teacher/TeacherMain';
import TeacherDrawer from '../../components/TeacherDrawer/TeacherDrawer';
import { useSelector } from 'react-redux';

const Drawer = createDrawerNavigator();

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

const TeacherHome = () => {
  const theme = useSelector(state => state.themeTeacher);
  return (
    <Drawer.Navigator drawerContent={props => <TeacherDrawer {...props} />}>
      <Drawer.Screen
        name="Dash-board"
        options={{headerShown: false}}
        component={TeacherMain}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={({navigation}) => ({
          ...options,
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerLeft: () => <CustomHeaderLeft navigation={navigation} />, // Custom header left component
        })}
      />
    </Drawer.Navigator>
  );
};

export default TeacherHome;
