import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Caption, Drawer, Title} from 'react-native-paper';
import {useSelector} from 'react-redux';
import CustomDivider from '../../CustomDivider';
import {GHOST_WHITE, Half_WHITE, THEME_COLOR} from '../../../strings/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileCustomDrawer = props => {
  const theme = useSelector(state => state.themeTeacher);

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <Avatar.Image
              source={require('../../../images/icons/profile.png')}
              size={80}
            />
            <Title style={styles.title}>Teacher</Title>
            <Caption style={styles.caption}>Teacher@gmail.com</Caption>
          </View>

          <CustomDivider />

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Edit Profile"
              onPress={() => {
                props.navigation.navigate('EditProfile');
              }}
              icon={({color, size}) => (
                <Icon
                  name="account-edit"
                  size={size}
                  color={color}
                />
              )}
              labelStyle={styles.drawerItemLabel}
            />
            <DrawerItem
              label="Edit Password"
              onPress={() => {
                props.navigation.navigate('EditPassword');
              }}
              icon={({color, size}) => (
                <Icon
                  name="lock-reset"
                  size={size}
                  color={color}
                />
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
    fontSize: 16,
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
    marginTop: 10,
  },
  drawerItemLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: GHOST_WHITE,
  },
  bottomDrawerSection: {
    borderBottomWidth: 0.5,
    marginBottom: 0.5,
    borderBottomColor: Half_WHITE,
  },
});

export default ProfileCustomDrawer;
