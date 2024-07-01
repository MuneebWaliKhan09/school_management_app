import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ThemeChangerTeacher from './Theme/ThemeChangeTeacher';
import {GHOST_WHITE} from '../../strings/Colors';
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

const TeacherStack = () => {
  const theme = useSelector(state => state.themeTeacher);
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: 'Theme Changer',
          ...options,
          headerStyle: {
            backgroundColor: theme.background,
          },
        }}
        name="ThemeChangerTeacher"
        component={ThemeChangerTeacher}
      />
    </Stack.Navigator>
  );
};

export default TeacherStack;
