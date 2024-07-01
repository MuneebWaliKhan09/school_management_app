import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckTokenExp from '../../utils/CheckTokenExp';
import {useNavigation} from '@react-navigation/native';
import {useLogoutUserMutation, useUserDetailsQuery} from '../../store/features/userFeatures';
import {GHOST_WHITE, Half_WHITE, THEME_COLOR} from '../../strings/Colors';
import CustomDivider from '../CustomDivider';
import {ResetNavigations} from '../../utils/ResetNavigations';

const StudentDrawer = props => {
  const navigation = useNavigation();
  const [data, setData] = useState(null);
  const isFocused = useIsFocused();
  const [logoutUser,{isLoading}] = useLogoutUserMutation();
  const {data: userData} = useUserDetailsQuery();

  useEffect(() => {
    const validateTokenAndFetchDetails = async () => {
      const isValidToken = await CheckTokenExp(navigation)
        .then(res => {
          getDetails();
        })
        .catch(async error => {
          if (error) {
            const logout = await logoutUser({});
            console.log('logoutdata', logout.data);
          }
        });
    };
    validateTokenAndFetchDetails();
  }, [isFocused,userData]);

  const getDetails = () => {
    setData(userData?.data);
  };

  const handleLogout = async () => {
    const logout = await logoutUser({})
      .unwrap()
      .then(async res => {
        await AsyncStorage.clear();
        ResetNavigations({navigation: navigation, routeName: 'Login'}); // reset the previous path route so wont go back
        console.log('logout res', res.message);
      })
      .catch(error => {
        console.log('logouterror', error);
      });
  };

  const handleThemeChange = ()=>{
    navigation.navigate("StudentStack", {screen: "ThemeChangerStudent"})
  }

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <Avatar.Image
              source={require('../../images/icons/profile.png')}
              size={80}
            />
            <Title style={styles.title}>
              {(data && data?.username) || 'no username'}
            </Title>
            <Caption style={styles.caption}>
              {(data && data?.email) || 'no email'}
            </Caption>
          </View>
          <CustomDivider />
          <Drawer.Section showDivider={false} style={styles.drawerSection}>
            <DrawerItem
              icon={({size}) => (
                <Image
                  source={require('../../images/icons/home.png')}
                  style={{width: size, height: size, tintColor: Half_WHITE}}
                />
              )}
              label="Home"
              labelStyle={{color: GHOST_WHITE}}
              onPress={() => {
                props.navigation.navigate('Dash-board');
              }}
            />
            <DrawerItem
              icon={({size}) => (
                <Image
                  source={require('../../images/icons/user.png')}
                  style={{width: size, height: size, tintColor: Half_WHITE}}
                />
              )}
              label="Profile"
              labelStyle={{color: GHOST_WHITE}}
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              icon={({size}) => (
                <Image
                  source={require('../../images/icons/settings.png')}
                  style={{width: size, height: size, tintColor: Half_WHITE}}
                />
              )}
              label="Settings"
              labelStyle={{color: GHOST_WHITE}}
              onPress={() => {
                props.navigation.navigate('Settings');
              }}
            />
          </Drawer.Section>
          <CustomDivider />

          <Drawer.Section showDivider={false}>
            <Title style={styles.preferencesTitle}>Preferences</Title>
            <TouchableRipple onPress={handleThemeChange}>
              <View style={styles.preference}>
                <Text style={{color: Half_WHITE}}>Dark Theme</Text>
              </View>
            </TouchableRipple>
          </Drawer.Section>
          <CustomDivider />
        </View>
      </DrawerContentScrollView>
      <CustomDivider />
      <Drawer.Section
        tion
        showDivider={false}
        style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({size}) => (
            <Image
              source={require('../../images/icons/logout.png')}
              style={{width: size, height: size, tintColor: Half_WHITE}}
            />
          )}
          label={isLoading ? "Loading..": "Logout"}
          labelStyle={{color: GHOST_WHITE}}
          onPress={handleLogout}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLOR,
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 7,
  },
  title: {
    fontSize: 14,
    marginTop: 3,
    fontWeight: 'bold',
    color: GHOST_WHITE,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: Half_WHITE,
  },
  drawerSection: {
    marginTop: 5,
  },
  preferencesTitle: {
    fontSize: 14,
    marginLeft: 19,
    fontWeight: '500',
    color: GHOST_WHITE, // Customize the color here
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 19,
  },
  bottomDrawerSection: {
    borderBottomWidth: 0.5,
    marginBottom: 0.5,
    borderBottomColor: Half_WHITE,
  },
});

export default StudentDrawer;
