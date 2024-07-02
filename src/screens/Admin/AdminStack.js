import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ThemeChangerAdmin from './Theme/ThemeChangerAdmin';
import {GHOST_WHITE} from '../../strings/Colors';
import { useSelector } from 'react-redux';
import StudentsAdmin from './StudentsAdmin/StudentsAdmin';

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
      <Stack.Screen
        options={{
          headerTitle: 'All Students',
          ...options,
          headerStyle: {
            backgroundColor: theme.background,
          },
        }}
        name="AdminStudents"
        component={StudentsAdmin}
      />
    </Stack.Navigator>
  );
};

export default AdminStack;
