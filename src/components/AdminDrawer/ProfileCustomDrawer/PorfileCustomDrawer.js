import {View, Text, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React, {useEffect, useState} from 'react';
import {Avatar, Caption, Drawer, Title} from 'react-native-paper';
import {GHOST_WHITE, Half_WHITE, THEME_COLOR} from '../../../strings/Colors';
import {useSelector} from 'react-redux';
import CustomDivider from '../../CustomDivider';
import {
  useLogoutUserMutation,
  useUserDetailsQuery,
} from '../../../store/features/userFeatures';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ResetNavigations} from '../../../utils/ResetNavigations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import CheckTokenExp from '../../../utils/CheckTokenExp';

const PorfileCustomDrawer = props => {
    const navigation = useNavigation()
  const theme = useSelector(state => state.themeAdmin);
  const {data: userData, isError} = useUserDetailsQuery();
  const [logoutUser, {isLoading}] = useLogoutUserMutation();

  const [dataUser, setDataUser] = useState(null);

  useEffect(() => {
    if (dataUser) {
      setDataUser(userData?.data);
    }
  }, [dataUser]);

  const handleLogout = async () => {
    const logout = await logoutUser({})
      .unwrap()
      .then(async res => {
        await AsyncStorage.removeItem("accessToken");
        await AsyncStorage.removeItem("userData");
        await AsyncStorage.removeItem("themeStudent")
        await AsyncStorage.removeItem("themeAdmin")
        await AsyncStorage.removeItem("themeTeacher")
        ResetNavigations({navigation: navigation, routeName: 'Login'}); // reset the previous path route so wont go back
        console.log('logout res', res.message);
      })
      .catch(error => {
        console.log('logouterror', error);
      });
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <CheckTokenExp/>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <Avatar.Image
              source={require('../../../images/icons/profile.png')}
              size={80}
            />
            <Title style={styles.title}>{userData?.data?.username || ''}</Title>
            <Caption style={styles.caption}>
              {userData?.data?.email || ''}
            </Caption>
          </View>

          <CustomDivider />

          <View
            style={{
              flexDirection: 'column',
            }}>
            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                label="Edit Profile"
                onPress={() => {
                  props.navigation.navigate('ActionsAdminProfile', {
                    screen: 'EditProfileAdmin',
                    params: {userData: dataUser}, // Pass userData as params
                  });
                }}
                icon={({color, size}) => (
                  <Icon name="account-edit" size={size} color={GHOST_WHITE} />
                )}
                labelStyle={styles.drawerItemLabel}
              />
              <DrawerItem
                label="Edit Password"
                onPress={() => {
                  props.navigation.navigate('ActionsAdminProfile', {
                    screen: 'EditPasswordAdmin',
                  });
                }}
                icon={({color, size}) => (
                  <Icon name="lock-reset" size={size} color={GHOST_WHITE} />
                )}
                labelStyle={styles.drawerItemLabel}
              />
            </Drawer.Section>
            <DrawerItem
              style={styles.bottomDrawerSection}
              label={isLoading ? 'Loading...' : 'Logout'}
              onPress={() => handleLogout()}
              icon={({color, size}) => (
                <Icon name="logout" size={size} color={GHOST_WHITE} />
              )}
              labelStyle={styles.drawerItemLabel}
            />
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
    color: GHOST_WHITE,
  },
  caption: {
    fontSize: 14,
    lineHeight: 16,
    color: Half_WHITE,
  },
  drawerSection: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  drawerItemLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: GHOST_WHITE,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default PorfileCustomDrawer;
