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
import {Formik as FormikLib} from 'formik';
import {object, string} from 'yup';
import {useNavigation} from '@react-navigation/native';
import {useLoginUserMutation} from '../../store/features/userFeatures';

let userSchema = object({
  username: string().required('Username is required !'),
  email: string().email('Invalid email address').required('Email is required!'),
  password: string().required('Password is required !'),
});

const Login = () => {
  const nav = useNavigation();
  const [loginUser, {isLoading, error, data: loginData}] =
    useLoginUserMutation();

  const handleLogin = values => {
    
    console.log(values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FormikLib
        initialValues={{email: '', username: '', password: ''}}
        onSubmit={handleLogin}
        validationSchema={userSchema}>
        {({handleChange, handleSubmit, handleBlur, values, errors}) => (
          <>
            <StatusBar
              barStyle={'light-content'}
              backgroundColor={THEME_COLOR}
            />
            <View>
              <Image
                style={styles.logginBanner}
                source={require('../../images/login.png')}
              />
            </View>
            <Text style={styles.title}>Login</Text>
            <KeyboardAvoidingView
              style={styles.inputsContainer}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 50} // Adjust as needed
            >
              <ScrollView>
                <View style={styles.inputBox}>
                  <TextInput
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    style={styles.textInputs}
                    label="Username"
                    value={values.username}
                    mode="outlined"
                    outlineColor={THEME_COLOR}
                    activeOutlineColor={THEME_COLOR}
                    placeholder="Enter your Username"
                  />
                  {errors.username && (
                    <Text
                      style={{
                        color: 'red',
                        width: '90%',
                        alignSelf: 'center',
                        fontSize: 10,
                        paddingLeft: 2,
                      }}>
                      {errors.username}
                    </Text>
                  )}
                </View>
                <View style={styles.inputBox}>
                  <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    style={styles.textInputs}
                    value={values.email}
                    label="Email"
                    mode="outlined"
                    outlineColor={THEME_COLOR}
                    activeOutlineColor={THEME_COLOR}
                    placeholder="Enter your Email"
                  />
                  {errors.email && (
                    <Text
                      style={{
                        color: 'red',
                        width: '90%',
                        alignSelf: 'center',
                        fontSize: 10,
                        paddingLeft: 2,
                      }}>
                      {errors.email}
                    </Text>
                  )}
                </View>
                <View style={styles.inputBox}>
                  <TextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    style={styles.textInputs}
                    label="Password"
                    mode="outlined"
                    outlineColor={THEME_COLOR}
                    activeOutlineColor={THEME_COLOR}
                    placeholder="Enter your Password"
                  />
                  {errors.password && (
                    <Text
                      style={{
                        color: 'red',
                        width: '90%',
                        alignSelf: 'center',
                        fontSize: 10,
                        paddingLeft: 2,
                      }}>
                      {errors.password}
                    </Text>
                  )}
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                onPress={() => nav.navigate('ForgotPassword')}
                style={styles.forgotpass}>
                forgot password?
              </Text>
              <Text
                onPress={() => nav.navigate('SignUp')}
                style={styles.forgotpass}>
                SignUp?
              </Text>
            </View>
            <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
              {/* login button */}
              <Text style={styles.btntext}>Login</Text>
            </TouchableOpacity>
          </>
        )}
      </FormikLib>
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
    marginBottom: 7,
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
    marginRight: 23,
    fontSize: 13,
    marginTop: 5,
    color: THEME_COLOR,
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
  },
  btntext: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});
