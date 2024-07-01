import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ThemeChangerStudent from './Theme/ThemeChangeStudent';
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

const StudentStack = () => {
  const theme = useSelector(state => state.themeStudent);
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
        name="ThemeChangerStudent"
        component={ThemeChangerStudent}
      />
    </Stack.Navigator>
  );
};

export default StudentStack;
