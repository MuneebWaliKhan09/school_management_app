import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ThemeChangerAdmin from './Theme/ThemeChangerAdmin';
import {GHOST_WHITE} from '../../strings/Colors';
import { useSelector } from 'react-redux';
import StudentsAdmin from './StudentsAdmin/StudentsAdmin';
import StudentDetails from './StudentsAdmin/StudentDetails';
import AcademicHistory from './StudentsAdmin/AcademicHistory';
import EditStudent from './StudentsAdmin/EditStudent';
import AddStudent from './StudentsAdmin/AddStudent';
import EditAvatarStudent from './StudentsAdmin/EditAvatarStudent';

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
      <Stack.Screen
        options={{
          headerTitle: 'Student Details',
          ...options,
          headerStyle: {
            backgroundColor: theme.background,
          },
        }}
        name="StudentDetails"
        component={StudentDetails}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Academic History',
          ...options,
          headerStyle: {
            backgroundColor: theme.background,
          },
        }}
        name="AcademicHistory"
        component={AcademicHistory}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Edit Student',
          ...options,
          headerStyle: {
            backgroundColor: theme.background,
          },
        }}
        name="EditStudent"
        component={EditStudent}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Add Student',
          ...options,
          headerStyle: {
            backgroundColor: theme.background,
          },
        }}
        name="AddStudent"
        component={AddStudent}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Update Avatar',
          ...options,
          headerStyle: {
            backgroundColor: theme.background,
          },
        }}
        name="UpdateAvatarStudent"
        component={EditAvatarStudent}
      />
    </Stack.Navigator>
  );
};

export default AdminStack;
