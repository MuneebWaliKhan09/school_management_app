import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNav from '../Admin/BottomNav';
import AdminDrawer from '../../components/AdminDrawer/AdminDrawer';
import {GHOST_WHITE, THEME_COLOR} from '../../strings/Colors';
import {useSelector} from 'react-redux';
import Profile from '../Admin/Porfile/Profile.js';

const Drawer = createDrawerNavigator();

const options = {
  headerShown: true,
  headerTintColor: GHOST_WHITE,
  headerTitleStyle: {
    fontWeight: 'semibold',
  },
  headerTitleAlign: 'center',
};

const AdminHome = () => {
  const theme = useSelector(state => state.themeAdmin);

  return (
    <Drawer.Navigator
      drawerContent={props => <AdminDrawer {...props} />}>
      <Drawer.Screen
        name="Dash-board"
        options={{
          headerShown: false,
        }}
        component={BottomNav}
      />
      <Drawer.Screen
        name="Profile"
        options={{
          headerShown: false,
        }}
        component={Profile}
      />
    </Drawer.Navigator>
  );
};

export default AdminHome;
