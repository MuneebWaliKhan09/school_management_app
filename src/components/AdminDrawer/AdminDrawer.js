import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckTokenExp from '../../utils/CheckTokenExp';
import { useNavigation } from '@react-navigation/native';


const AdminDrawer = (props) => {
  const navigation = useNavigation();
  const [data, setData] = useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    const validateTokenAndFetchDetails = async () => {
      const isValidToken = await CheckTokenExp(navigation);
      if (isValidToken) {
        getDetails();
      }
    };
    validateTokenAndFetchDetails();
  }, [isFocused]);

  const getDetails = async () => {
    const userData = await AsyncStorage.getItem('userData');
    const token = await AsyncStorage.getItem('accessToken');
    setData(JSON.parse(userData));
    console.log(token);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userData');
    props.navigation.navigate('Login'); // Navigate to your login screen
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <Avatar.Image
              source={require('../../images/icons/profile.png')}
              size={80}
            />
            <Title style={styles.title}>
              {(data && data.username) || 'no username'}
            </Title>
            <Caption style={styles.caption}>
              {(data && data.email) || 'no email'}
            </Caption>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ size }) => (
                <Image
                  source={require('../../images/icons/home.png')}
                  style={{ width: size, height: size }}
                />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({ size }) => (
                <Image
                  source={require('../../images/icons/user.png')}
                  style={{ width: size, height: size }}
                />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              icon={({ size }) => (
                <Image
                  source={require('../../images/icons/settings.png')}
                  style={{ width: size, height: size }}
                />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate('Settings');
              }}
            />
          </Drawer.Section>

          <Drawer.Section title="Preferences">
            <TouchableRipple onPress={() => {}}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={false} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ size }) => (
            <Image
              source={require('../../images/icons/logout.png')}
              style={{ width: size, height: size }}
            />
          )}
          label="Logout"
          onPress={handleLogout}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 19,
  },
  bottomDrawerSection: {
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
    borderBottomColor:"white",
    marginBottom:0
  },
});

export default AdminDrawer;
