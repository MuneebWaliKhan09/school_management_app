import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ThemeChangerAdmin from './Theme/ThemeChangerAdmin';
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

const AdminStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerTitle: 'Theme Changer', ...options}}
        name="ThemeChangerAdmin"
        component={ThemeChangerAdmin}
      />
    </Stack.Navigator>
  );
};

export default AdminStack;
