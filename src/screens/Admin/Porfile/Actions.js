import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UpdatePassword from './UpdatePassword';
import EditProfile from './EditProfile';
import { GHOST_WHITE, THEME_COLOR } from '../../../strings/Colors';

const Stack = createStackNavigator();

const options = {
  headerShown: true,
  headerStyle: {
    backgroundColor: THEME_COLOR,
  },
  headerTintColor: GHOST_WHITE,
  headerTitleStyle: {
    fontWeight: 'semibold',
  },
  headerTitleAlign: 'center',
};

const Actions = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EditPasswordAdmin"
        options={{headerTitle: 'Update Password', ...options}}
        component={UpdatePassword}
      />
      <Stack.Screen
        name="EditProfileAdmin"
        options={{headerTitle: 'Update Profile', ...options}}
        component={EditProfile}
      />
    </Stack.Navigator>
  );
};

export default Actions;
