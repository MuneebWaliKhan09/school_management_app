import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import UserProfile from './UserProfile';
import StudentProfile from './StudentProfile';
import {THEME_COLOR} from '../../../strings/Colors';
import {Divider} from 'react-native-paper';
import {useUserDetailsQuery} from '../../../store/features/userFeatures';
import {useStudentDetailsQuery} from '../../../store/features/studentFeatures';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Loader from '../../../Loaders/Loader';

const Profile = () => {
  const theme = useSelector(state => state.themeStudent);
  const nav = useNavigation();
  const [selectedTab, setSelectedTab] = useState('user');
  const {data: userData, isLoading: isLoadingUser} = useUserDetailsQuery();
  const {data: studentDetails, isLoading: isLoadingStudent} =
    useStudentDetailsQuery();
  const [dataUser, setdataUser] = useState(null);
  const [studentData, setstudentData] = useState(null);

  useEffect(() => {
    if (studentDetails) {
      setstudentData(studentDetails && studentDetails?.data);
    }
    if (userData) {
      setdataUser(userData && userData?.data);
    }
  }, [userData, studentDetails]);

  if(isLoadingUser || isLoadingStudent){
    return <Loader/>
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Divider />
      <View style={[styles.topNav,{backgroundColor:theme.background}]}>
        <TouchableOpacity
          style={[
            styles.navButton,
            selectedTab === 'user' && styles.activeNavButton,
          ]}
          onPress={() => setSelectedTab('user')}>
          <Text style={styles.navButtonText}>User Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navButton,
            selectedTab === 'student' && styles.activeNavButton,
          ]}
          onPress={() => setSelectedTab('student')}>
          <Text style={styles.navButtonText}>Student Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        {selectedTab === 'user' ? (
          <UserProfile
            dataUser={dataUser}
          />
        ) : (
          <StudentProfile studentData={studentData} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: THEME_COLOR,
    paddingVertical: responsiveHeight(1.5),
  },
  navButton: {
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(5),
  },
  activeNavButton: {
    borderBottomWidth: responsiveWidth(0.5),
    borderBottomColor: 'white',
  },
  navButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
  },
});

export default Profile;
