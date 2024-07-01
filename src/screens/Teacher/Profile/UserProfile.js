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

const UserProfile = ({ dataUser, onEditProfile, onUpdatePassword }) => {
  const userData = dataUser ? dataUser : null;

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
              <Text style={styles.title}>
                {userData?.fullName[0].toUpperCase() +
                  userData?.fullName.substr(1)}
              </Text>
              <Text style={styles.subtitle}>@{userData?.username}</Text>
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.sectionTitle}>Personal Information</Text>
            <CustomDivider bgColor={'gray'} marginTopBtm={5} />
            <View style={styles.infoItem}>
              <Image
                style={styles.icon}
                source={require('../../../images/icons/usericons/email.png')}
              />
              <Text style={styles.label}>Email: </Text>
              <Text style={styles.value}>{userData?.email}</Text>
            </View>
            <View style={styles.infoItem}>
              <Image
                style={styles.icon}
                source={require('../../../images/icons/usericons/teachings.png')}
              />
              <Text style={styles.label}>Role: </Text>
              <Text style={styles.value}>{userData?.role}</Text>
            </View>
            <View style={styles.infoItem}>
              <Image
                style={styles.icon}
                source={require('../../../images/icons/usericons/check-list.png')}
              />
              <Text style={styles.label}>Account Status: </Text>
              <Text style={styles.value}>
                {userData?.isActive ? 'Active' : 'Inactive'}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onEditProfile}>
          <Image
            style={styles.buttonIcon}
            source={require('../../../images/icons/edit.png')}
          />
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onUpdatePassword}>
          <Image
            style={styles.buttonIcon}
            source={require('../../../images/icons/password.png')}
          />
          <Text style={styles.buttonText}>Edit Password</Text>
        </TouchableOpacity>
      </View>
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
    tintColor:THEME_COLOR2
  },
  label: {
    fontWeight: '500',
    fontSize: responsiveFontSize(2),
    color: THEME_COLOR2,
  },
  value: {
    color: THEME_COLOR2,
  },
  buttonContainer: {
    flex:1/9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: responsiveWidth(5),
    width: '100%',
    backgroundColor: WHITE_BG,
  },
  button: {
    width:responsiveWidth(38),
    height: responsiveHeight(5.5),
    marginHorizontal: responsiveWidth(2),
    backgroundColor: THEME_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveWidth(2),
    flexDirection: 'row',
  },
  buttonIcon: {
    width: responsiveWidth(5),
    height: responsiveHeight(2.5),
    marginRight: responsiveWidth(2),
    resizeMode: 'contain',
    tintColor:WHITE_BG
  },
  buttonText: {
    color: WHITE_BG,
    fontSize: responsiveFontSize(1.8),
  },
});

export default UserProfile;
