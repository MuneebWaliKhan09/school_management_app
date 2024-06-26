import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import UserProfile from './UserProfile';
import TeacherProfile from './TeacherProfile';
import { THEME_COLOR } from '../../../strings/Colors';
import { Divider } from 'react-native-paper';
import { useUserDetailsQuery } from '../../../store/features/userFeatures';



const Profile = () => {
  const [selectedTab, setSelectedTab] = useState('user');
  const {data: userData,isLoading, isError} = useUserDetailsQuery()
  const [dataUser, setdataUser] = useState(null)

  useEffect(()=>{
    if(userData){
      setdataUser(userData?.data)
    }
  },[userData])
  
  const exampleTeacher = {
    avatar: 'https://example.com/avatar.jpg',
    fullName: 'John Doe',
    username: 'johndoe',
    email: 'john.doe@example.com',
    role: 'User',
    school: 'Example High School',
    subjects: ['Math', 'Science'],
    bio: 'Experienced teacher with a passion for education.',
  };
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider/>
      <View style={styles.topNav}>
        <TouchableOpacity
          style={[
            styles.navButton,
            selectedTab === 'user' && styles.activeNavButton,
          ]}
          onPress={() => setSelectedTab('user')}
        >
          <Text style={styles.navButtonText}>User Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navButton,
            selectedTab === 'teacher' && styles.activeNavButton,
          ]}
          onPress={() => setSelectedTab('teacher')}
        >
          <Text style={styles.navButtonText}>Teacher Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        {selectedTab === 'user' ? (
          <UserProfile dataUser={dataUser} />
        ) : (
          <TeacherProfile exampleTeacher={exampleTeacher} />
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
    paddingVertical: 10,
  },
  navButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeNavButton: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  navButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Profile;
