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

const TeacherActions = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EditPasswordTeacher"
        options={{headerTitle: 'Update Password', ...options}}
        component={UpdatePassword}
      />
      <Stack.Screen
        name="EditProfileTeacher"
        options={{headerTitle: 'Update Profile', ...options}}
        component={EditProfile}
      />
    </Stack.Navigator>
  );
};

export default TeacherActions;
