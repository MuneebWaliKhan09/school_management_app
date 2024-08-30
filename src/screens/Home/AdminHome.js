import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNav from '../Admin/BottomNav';
import {GHOST_WHITE, THEME_COLOR} from '../../strings/Colors';
import {useSelector} from 'react-redux';
import AdminDrawer from '../../components/AdminDrawer/AdminDrawer';

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
    </Drawer.Navigator>
  );
};

export default AdminHome;
