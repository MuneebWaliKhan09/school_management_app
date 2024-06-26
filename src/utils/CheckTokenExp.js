import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';

const CheckTokenExp = async (navigation) => {

  const token = await AsyncStorage.getItem('accessToken');
  if (!token) {
    return false; // No token found
  }

  const decodedToken = jwtDecode(token);
  const currentTime = Date.now() / 1000;

  // Check if token is expired
  if (decodedToken.exp < currentTime) {
    console.log('logoutdataExp', logout.data);
    await AsyncStorage.clear();
    navigation.navigate('Welcome');
  }

  return true; // Token is valid
};

export default CheckTokenExp;
