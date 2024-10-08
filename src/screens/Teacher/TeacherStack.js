import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ThemeChangerTeacher from './Theme/ThemeChangeTeacher';
import {GHOST_WHITE} from '../../strings/Colors';
import {useSelector} from 'react-redux';
import StudentsTeacher from './StudentsTeacher/StudentsTeacher';
import StudentDetails from './StudentsTeacher/StudentDetails';
import AcademicHistory from './StudentsTeacher/AcademicHistory';
import EditStudent from './StudentsTeacher/EditStudent';
import AddStudent from './StudentsTeacher/AddStudent';
import EditAvatarStudent from './StudentsTeacher/EditAvatarStudent';
import AddAcademicRecord from './StudentsTeacher/AddAcademicRecord';
import EditAcademicRecord from './StudentsTeacher/EditAcademicRecord';
import TakeAttendance from './Attendance/TakeAttendance';
import StudentMonthlyAttendance from './Attendance/StudentMonthlyAttendance';

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
      <Stack.Screen
        options={{
          headerTitle: 'All Students',
          ...options,
          headerStyle: {
            backgroundColor: theme.background,
          },
        }}
        name="AllStudentsTeacher"
        component={StudentsTeacher}
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
      <Stack.Screen
        options={{
          headerTitle: 'Add Academic Record',
          ...options,
          headerStyle: {
            backgroundColor: theme.background,
          },
        }}
        name="AddAcademicRecord"
        component={AddAcademicRecord}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Edit Academic Record',
          ...options,
          headerStyle: {
            backgroundColor: theme.background,
          },
        }}
        name="EditAcademicRecord"
        component={EditAcademicRecord}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Take Attendance',
          ...options,
          headerStyle: {
            backgroundColor: theme.background,
          },
        }}
        name="TakeStudentAttendance"
        component={TakeAttendance}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Monthly Attendance',
          ...options,
          headerStyle: {
            backgroundColor: theme.background,
          },
        }}
        name="StudentMonthlyAttendance"
        component={StudentMonthlyAttendance}
      />
    </Stack.Navigator>
  );
};

export default TeacherStack;
