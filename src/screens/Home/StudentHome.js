import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../Student/Profile/Profile';
import {GHOST_WHITE, THEME_COLOR} from '../../strings/Colors';
import CustomHeaderLeft from '../../components/CustomHeaderLeft';
import StudentDrawer from '../../components/StudentDrawer/StudentDrawer';
import StudentMain from '../Student/StudentMain';

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

  return (
    <Drawer.Navigator drawerContent={props => <StudentDrawer {...props} />}>
      <Drawer.Screen
        name="Dash-board"
        options={{headerShown: false}}
        component={StudentMain}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={({navigation}) => ({
          ...options,
          headerLeft: () => <CustomHeaderLeft navigation={navigation} />, // Custom header left component
        })}
      />
    </Drawer.Navigator>
  );
};

export default StudentHome