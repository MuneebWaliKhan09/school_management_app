import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UpdatePassword from './UpdatePassword';
import EditProfile from './EditProfile';
import {GHOST_WHITE} from '../../../strings/Colors';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const options = {
  headerShown: true,
  headerTintColor: GHOST_WHITE,
  headerTitleStyle: {
    fontWeight: 'semibold',
  },
  headerTitleAlign: 'center',
};

const Actions = () => {
  const theme = useSelector(state => state.themeAdmin);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EditPasswordAdmin"
        options={{
          headerTitle: 'Update Password',
          ...options,
          headerStyle: {
            backgroundColor: theme.background,
          },
        }}
        component={UpdatePassword}
      />
      <Stack.Screen
        name="EditProfileAdmin"
        options={{
          headerTitle: 'Update Profile',
          ...options,
          headerStyle: {
            backgroundColor: theme.background,
          },
        }}
        component={EditProfile}
      />
    </Stack.Navigator>
  );
};

export default Actions;
