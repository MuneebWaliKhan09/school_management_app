import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import UserProfile from './UserProfile';
import {THEME_COLOR} from '../../../strings/Colors';
import {Divider} from 'react-native-paper';
import {useUserDetailsQuery} from '../../../store/features/userFeatures';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const nav = useNavigation()
  const {data: userData, isLoading, isError} = useUserDetailsQuery();
  const [dataUser, setDataUser] = useState(null);

  useEffect(() => {
    if (userData) {
      setDataUser(userData?.data);
    }
  }, [userData]);

  const onEditProfile = () => {
    nav.navigate('ActionsAdminProfile', { screen: 'EditProfileAdmin'});
  };

  const onUpdatePassword = () => {
    nav.navigate('ActionsAdminProfile', { screen: 'EditPasswordAdmin' });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Divider />
      <View style={styles.topNav}></View>
      <View style={{flex: 1}}>
        <UserProfile
          dataUser={dataUser}
          isLoading={isLoading}
          onEditProfile={onEditProfile}
          onUpdatePassword={onUpdatePassword}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: THEME_COLOR,
  },
  navButton: {
    paddingVertical: responsiveHeight(1.5),
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
