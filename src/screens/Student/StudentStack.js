import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ThemeChangerStudent from './Theme/ThemeChangeStudent';
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

const StudentStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerTitle: 'Theme Changer', ...options}}
        name="ThemeChangerStudent"
        component={ThemeChangerStudent}
      />
    </Stack.Navigator>
  );
};

export default StudentStack;
