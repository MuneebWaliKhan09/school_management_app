import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {TextInput} from 'react-native-paper';
import {THEME_COLOR} from '../../strings/Colors';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const nav = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={THEME_COLOR} />
      <View>
        <Image
          style={styles.logginBanner}
          source={require('../../images/signup.png')}
        />
      </View>
      <Text style={styles.title}>Sign Up</Text>
      <ScrollView>
        <KeyboardAvoidingView
          style={styles.inputsContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 50} // Adjust as needed
        >
          <ScrollView>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.textInputs}
                label="Username"
                mode="outlined"
                outlineColor={THEME_COLOR}
                activeOutlineColor={THEME_COLOR}
                placeholder="Enter your Username"
              />
            </View>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.textInputs}
                label="Email"
                mode="outlined"
                outlineColor={THEME_COLOR}
                activeOutlineColor={THEME_COLOR}
                placeholder="Enter your Email"
              />
            </View>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.textInputs}
                label="Password"
                mode="outlined"
                outlineColor={THEME_COLOR}
                activeOutlineColor={THEME_COLOR}
                placeholder="Enter your Password"
              />
            </View>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.textInputs}
                label="FirstName"
                mode="outlined"
                outlineColor={THEME_COLOR}
                activeOutlineColor={THEME_COLOR}
                placeholder="Enter your Firstname"
              />
            </View>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.textInputs}
                label="FullName"
                mode="outlined"
                outlineColor={THEME_COLOR}
                activeOutlineColor={THEME_COLOR}
                placeholder="Enter your Fullname"
              />
            </View>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.textInputs}
                label="Role"
                mode="outlined"
                outlineColor={THEME_COLOR}
                activeOutlineColor={THEME_COLOR}
                placeholder="Enter your Role"
              />
            </View>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.textInputs}
                label="Unique Code"
                mode="outlined"
                outlineColor={THEME_COLOR}
                activeOutlineColor={THEME_COLOR}
                placeholder="Enter your Unique Code"
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            onPress={() => nav.navigate('ForgotPassword')}
            style={styles.forgotpass}>
            forgot password?
          </Text>
          <Text
            onPress={() => nav.navigate('Login')}
            style={styles.forgotpass}>
            Login?
          </Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          {/* login button */}
          <Text style={styles.btntext}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logginBanner: {
    width: responsiveScreenWidth(92),
    height: responsiveScreenHeight(35),
    alignSelf: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 20,
    color: THEME_COLOR,
    fontFamily: 'Poppins-BoldItalic',
  },
  inputsContainer: {
    flexDirection: 'column',
    marginTop: 10,
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  textInputs: {
    margin: 10,
    marginTop: 5,
    height: 45,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  inputTitle: {
    marginLeft: 10,
  },
  forgotpass: {
    marginLeft: 23,
    marginRight: 25,
    fontSize: 13,
    marginTop: 5,
  },
  btn: {
    width: '90%',
    height: 45,
    borderWidth: 2,
    borderColor: THEME_COLOR,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25,
    backgroundColor: THEME_COLOR,
    marginBottom:30
  },
  btntext: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});
