import React, { useEffect } from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AdminMain from '../Admin/AdminMain';
import AdminDrawer from '../../components/AdminDrawer/AdminDrawer';
import Profile from '../Admin/Porfile/Profile';
import {GHOST_WHITE, THEME_COLOR} from '../../strings/Colors';
import CustomHeaderLeft from '../../components/CustomHeaderLeft';
import { useSelector } from 'react-redux';

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
  const theme = useSelector((state)=> state.themeAdmin)

  return (
    <Drawer.Navigator drawerContent={props => <AdminDrawer {...props} />}>
      <Drawer.Screen
        name="Dash-board"
        options={{headerShown: false}}
        component={AdminMain}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={({navigation}) => ({
          ...options,
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerTitle: 'My Profile',
          headerLeft: () => <CustomHeaderLeft navigation={navigation}/>, // Custom header left component
        })}
      />
    </Drawer.Navigator>
  );
};

export default AdminHome;
