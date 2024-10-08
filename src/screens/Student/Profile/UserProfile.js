import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Half_gray, WHITE_BG, THEME_COLOR, THEME_COLOR2 } from '../../../strings/Colors';
import CustomDivider from '../../../components/CustomDivider';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { useSelector } from 'react-redux';

const UserProfile = ({ dataUser }) => {
  const userData = dataUser ? dataUser : null;
  const theme = useSelector((state)=> state.themeStudent)


  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.card}>
          <View style={styles.header}>
            {userData?.avatar ? (
              <Image
                style={styles.avatar}
                source={{
                  uri: userData?.avatar,
                }}
              />
            ) : (
              <Image
                style={styles.avatar}
                source={require('../../../images/icons/profile.png')}
              />
            )}
            <View style={styles.headerText}>
              <Text style={[styles.title,{color: theme.background}]}>
                {userData?.fullName[0].toUpperCase() +
                  userData?.fullName.substr(1)}
              </Text>
              <Text style={[styles.subtitle,{color:theme.background}]}>@{userData?.username}</Text>
            </View>
          </View>
          <View style={styles.content}>
            <Text style={[styles.sectionTitle,{color:theme.background}]}>Personal Information</Text>
            <CustomDivider bgColor={'gray'} marginTopBtm={5} />
            <View style={styles.infoItem}>
              <Image
                style={[styles.icon,{tintColor:theme.background}]}
                source={require('../../../images/icons/usericons/email.png')}
              />
              <Text style={[styles.label,{color:theme.background}]}>Email: </Text>
              <Text style={[styles.value,{color:theme.background}]}>{userData?.email}</Text>
            </View>
            <View style={styles.infoItem}>
              <Image
                style={[styles.icon,{tintColor:theme.background}]}
                source={require('../../../images/icons/usericons/teachings.png')}
              />
              <Text style={[styles.label,{color:theme.background}]}>Role: </Text>
              <Text style={[styles.value,{color:theme.background}]}>{userData?.role}</Text>
            </View>
            <View style={styles.infoItem}>
              <Image
                style={[styles.icon,{tintColor:theme.background}]}
                source={require('../../../images/icons/usericons/check-list.png')}
              />
              <Text style={[styles.label,{color:theme.background}]}>Account Status: </Text>
              <Text style={[styles.value,{color:theme.background}]}>
                {userData?.isActive ? 'Active' : 'Inactive'}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_BG,
  },
  scrollView: {
    flex: 1,
  },
  card: {
    padding: responsiveWidth(5),
    paddingTop: responsiveHeight(3.5),
    paddingLeft: responsiveWidth(8),
    backgroundColor: WHITE_BG,
    borderRadius: responsiveWidth(2.5),
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveHeight(1.5),
  },
  avatar: {
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    borderRadius: responsiveWidth(10),
    marginBottom: responsiveHeight(1.5),
  },
  headerText: {
    marginLeft: responsiveWidth(5),
  },
  title: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: '700',
    color: THEME_COLOR,
  },
  subtitle: {
    fontSize: responsiveFontSize(1.6),
    fontWeight: '600',
    color: THEME_COLOR2,
  },
  content: {
    paddingTop: responsiveHeight(1.5),
  },
  sectionTitle: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '400',
    marginBottom: responsiveHeight(1),
    color: THEME_COLOR,
    marginTop: responsiveHeight(1.5),
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsiveHeight(1.3),
  },
  icon: {
    width: responsiveWidth(7),
    height: responsiveHeight(3.5),
    marginRight: responsiveWidth(2.5),
    resizeMode: 'cover',
    tintColor:THEME_COLOR2,
    fontWeight:"700",
  },
  label: {
    fontWeight: '700',
    fontSize: responsiveFontSize(2),
    color: THEME_COLOR2,
  },
  value: {
    color: THEME_COLOR2,
  },
});

export default UserProfile;
