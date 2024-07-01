import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ThemeChangerAdmin from './Theme/ThemeChangerAdmin';
import {GHOST_WHITE, THEME_COLOR} from '../../strings/Colors';
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

const AdminStack = () => {
  const theme = useSelector((state)=> state.themeAdmin)
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
        name="ThemeChangerAdmin"
        component={ThemeChangerAdmin}
      />
    </Stack.Navigator>
  );
};

export default AdminStack;
