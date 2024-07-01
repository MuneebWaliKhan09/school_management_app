import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ThemeChangerTeacher from './Theme/ThemeChangeTeacher';
import { GHOST_WHITE, THEME_COLOR } from '../../strings/Colors';

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

const TeacherStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerTitle: 'Theme Changer', ...options}}
        name="ThemeChangerTeacher"
        component={ThemeChangerTeacher}
      />
    </Stack.Navigator>
  );
};

export default TeacherStack;
