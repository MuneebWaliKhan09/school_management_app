// CheckTokenExp.js
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';
import {useNavigation} from '@react-navigation/native';

const CheckTokenExp = () => {
  const navigation = useNavigation();

  const checkTokenExp = async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');

      if (!token) {
        return false;
      }

      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        console.log('Token expired');
        await AsyncStorage.removeItem('accessToken');
        navigation.navigate('Welcome');
        return false;
      } else {
        console.log('valid token');
      }

      return true;
    } catch (error) {
      console.error('Error checkTokenExp:', error);
      return false;
    }
  };

  useEffect(() => {
    checkTokenExp();
  }, []);

  return null;
};

export default CheckTokenExp;
