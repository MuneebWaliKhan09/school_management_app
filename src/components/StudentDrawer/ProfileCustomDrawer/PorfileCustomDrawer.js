import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Caption, Drawer, Title} from 'react-native-paper';
import {useSelector} from 'react-redux';
import CustomDivider from '../../CustomDivider';
import {GHOST_WHITE, Half_WHITE, THEME_COLOR} from '../../../strings/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  useLogoutUserMutation,
  useUserDetailsQuery,
} from '../../../store/features/userFeatures';
import {ResetNavigations} from '../../../utils/ResetNavigations';

const ProfileCustomDrawer = props => {
  const theme = useSelector(state => state.themeStudent);
  const {data: userData} = useUserDetailsQuery();
  const [logoutUser, {isLoading}] = useLogoutUserMutation();

  const [dataUser, setdataUser] = useState(null);

  useEffect(() => {
    if (userData) {
      setdataUser(userData && userData?.data);
    }
  }, [userData]);

  const handleLogout = async () => {
    const logout = await logoutUser({})
      .unwrap()
      .then(async res => {
        await AsyncStorage.clear();
        ResetNavigations({navigation: navigation, routeName: 'Login'});
        console.log('logout res', res.message);
      })
      .catch(error => {
        console.log('logouterror', error);
      });
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
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
            style={{justifyContent: 'space-between', flexDirection: 'column'}}>
            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                label="Edit Profile"
                onPress={() => {
                  props.navigation.navigate('ActionsStudentProfile', {
                    screen: 'EditProfileStudent',
                    params: {userData: dataUser},
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
                  props.navigation.navigate('ActionsStudentProfile', {
                    screen: 'EditPasswordStudent',
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

export default ProfileCustomDrawer;
