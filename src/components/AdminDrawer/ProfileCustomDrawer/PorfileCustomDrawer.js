import {View, Text, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React, { useEffect, useState } from 'react';
import {Avatar, Caption, Drawer, Title} from 'react-native-paper';
import {GHOST_WHITE, Half_WHITE, THEME_COLOR} from '../../../strings/Colors';
import {useSelector} from 'react-redux';
import CustomDivider from '../../CustomDivider';
import {useUserDetailsQuery} from '../../../store/features/userFeatures';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PorfileCustomDrawer = props => {
  const theme = useSelector(state => state.themeAdmin);
  const {data: userData, isLoading, isError} = useUserDetailsQuery();
  const [dataUser, setDataUser] = useState(null);

  useEffect(() => {
    if (userData) {
      setDataUser(userData?.data);
    }
  }, [userData]);
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <Avatar.Image
              source={require('../../../images/icons/profile.png')}
              size={80}
            />
            <Title style={styles.title}>Admin</Title>
            <Caption style={styles.caption}>Admin@gmail.com</Caption>
          </View>

          <CustomDivider />

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
    fontSize: 16,
    fontWeight: '400',
    color: GHOST_WHITE,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default PorfileCustomDrawer;
