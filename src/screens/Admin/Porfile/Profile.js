import React, {useEffect, useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import UserProfile from './UserProfile';
import {THEME_COLOR} from '../../../strings/Colors';
import {Divider} from 'react-native-paper';
import {useUserDetailsQuery} from '../../../store/features/userFeatures';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Loader from '../../../Loaders/Loader';

const Profile = () => {
  const theme = useSelector(state => state.themeAdmin);
  const nav = useNavigation();
  const {
    data: userData,
    isLoading,
    isError,
    isFetching,
  } = useUserDetailsQuery();
  const [dataUser, setDataUser] = useState(null);


  if(isLoading || isFetching){
    return <Loader/>
  }
  
  useEffect(() => {
    if (userData) {
      setDataUser(userData?.data);
    }
  }, [userData]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Divider />
      <View
        style={[styles.topNav, {backgroundColor: theme?.background}]}></View>
      <View style={{flex: 1}}>
          <UserProfile dataUser={dataUser} isLoading={isLoading} />
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
