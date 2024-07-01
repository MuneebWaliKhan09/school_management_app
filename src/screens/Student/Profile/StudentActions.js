import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UpdatePassword from './UpdatePassword';
import EditProfile from './EditProfile';
import {GHOST_WHITE, THEME_COLOR} from '../../../strings/Colors';
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

const StudentActions = () => {
  const theme = useSelector(state => state.themeStudent);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EditPasswordStudent"
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
        name="EditProfileStudent"
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

export default StudentActions;
