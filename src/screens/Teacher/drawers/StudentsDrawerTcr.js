import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomHeader from '../../../components/CustomHeader';
import { GHOST_WHITE } from '../../../strings/Colors';
import { useSelector } from 'react-redux';
import StudentsCustomDrawer from '../../../components/TeacherDrawer/StudentsDrawer/StudentsCustomDrawer';
import StudentsTeacher from '../StudentsTeacher/StudentsTeacher';

const Drawer = createDrawerNavigator();


const options = {
  headerShown: true,
  headerTintColor: GHOST_WHITE,
  headerTitleStyle: {
    fontWeight: 'semibold',
  },
  headerTitleAlign: 'center',
};


const StudentsDrawerTcr = () => {
  const theme = useSelector(state => state.themeTeacher);

  return (
    <Drawer.Navigator
      drawerContent={props => <StudentsCustomDrawer {...props} />}>
      <Drawer.Screen name="My Students" 
      options={({navigation}) => ({
        ...options,
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerLeft: () => <CustomHeader navigation={navigation} />, // Custom header left component
      })}
      component={StudentsTeacher} />
    </Drawer.Navigator>
  );
};


export default StudentsDrawerTcr;
