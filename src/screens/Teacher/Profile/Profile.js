import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import UserProfile from './UserProfile';
import TeacherProfile from './TeacherProfile';
import {THEME_COLOR} from '../../../strings/Colors';
import {Divider} from 'react-native-paper';
import {useUserDetailsQuery} from '../../../store/features/userFeatures';
import { useTeacherDetailsQuery } from '../../../store/features/teacherFeatures';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Profile = () => {
  const theme = useSelector(state => state.themeTeacher);
  const nav = useNavigation()
  const [selectedTab, setSelectedTab] = useState('user');
  const {data: userData, isLoading:loadingUserData, isError} = useUserDetailsQuery();
  const {data: teacherDetails, isError: teacherErrorProfile,isLoading:loadingTeacherData} = useTeacherDetailsQuery();
  const [dataUser, setdataUser] = useState(null);
  const [teacherData, setteacherData] = useState(null);

  useEffect(() => {
    if (teacherDetails) {
      setteacherData(teacherDetails && teacherDetails?.data);
    }
    if (userData) {
      setdataUser(userData && userData?.data);
    }
  }, [userData, teacherDetails]);


  return (
    <SafeAreaView style={{flex: 1}}>
      <Divider />
      <View style={[styles.topNav, {backgroundColor:theme.background}]}>
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
            selectedTab === 'teacher' && styles.activeNavButton,
          ]}
          onPress={() => setSelectedTab('teacher')}>
          <Text style={styles.navButtonText}>Teacher Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        {selectedTab === 'user' ? (
          <UserProfile dataUser={dataUser}/>
        ) : (
          <TeacherProfile teacherData={teacherData} loadingTeacherData={loadingTeacherData}/>
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
