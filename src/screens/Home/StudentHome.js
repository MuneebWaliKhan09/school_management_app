import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../Student/Profile/Profile';
import {GHOST_WHITE, THEME_COLOR} from '../../strings/Colors';
import CustomHeader from '../../components/CustomHeader';
import StudentDrawer from '../../components/StudentDrawer/StudentDrawer';
import { useSelector } from 'react-redux';
import BottomNav from '../Student/BottomNav';

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

const StudentHome = () => {
 const theme = useSelector((state)=> state.themeStudent)
  return (
    <Drawer.Navigator drawerContent={props => <StudentDrawer {...props} />}>
      <Drawer.Screen
        name="Dash-board"
        options={{headerShown: false}}
        component={BottomNav}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={({navigation}) => ({
          ...options,
          headerStyle: {
           backgroundColor: theme.background,
          },
          headerLeft: () => <CustomHeader navigation={navigation} />, // Custom header left component
        })}
      />
    </Drawer.Navigator>
  );
};

export default StudentHome