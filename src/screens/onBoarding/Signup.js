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
import {Formik as FormikLib} from 'formik';
import {object, string, InferType} from 'yup';

let userSchema = object({
  username: string()
    .required('please enter your name')
    .matches(
      /^(?=.*[A-Z])(?=.*\d{4})[A-Za-z\d]{6,}$/,
      'Username must contain one uppercase 4 digits',
    ),
  email: string().email().required('please enter your email'),
  password: string().required('please enter your password'),
  firstName: string()
    .required('please enter your firstname')
    .max(8, 'firstName must be 8 characters or shorter'),
  fullName: string()
    .required('please enter your fullname')
    .max(21, 'fullName must be 21 characters or shorter'),
  role: string().required('please enter your role').max(7),
  uniqueCode: string().required('please enter your unique code').max(15),
});

const Login = () => {
  const nav = useNavigation();

  const handleSignUp = values => {
    console.log(values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FormikLib
        initialValues={{
          username: '',
          email: '',
          password: '',
          firstName: '',
          fullName: '',
          role: '',
          uniqueCode: '',
        }}
        onSubmit={handleSignUp}
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
                      onChangeText={handleChange('username')}
                      onBlur={handleBlur('username')}
                      style={styles.textInputs}
                      value={values.username}
                      label="Username"
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
                      style={styles.textInputs}
                      value={values.password}
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
                  <View style={styles.inputBox}>
                    <TextInput
                      onChangeText={handleChange('firstName')}
                      onBlur={handleBlur('firstName')}
                      style={styles.textInputs}
                      value={values.firstName}
                      label="FirstName"
                      mode="outlined"
                      outlineColor={THEME_COLOR}
                      activeOutlineColor={THEME_COLOR}
                      placeholder="Enter your Firstname"
                    />
                    {errors.firstName && (
                      <Text
                        style={{
                          color: 'red',
                          width: '90%',
                          alignSelf: 'center',
                          fontSize: 10,
                          paddingLeft: 2,
                        }}>
                        {errors.firstName}
                      </Text>
                    )}
                  </View>
                  <View style={styles.inputBox}>
                    <TextInput
                      onChangeText={handleChange('fullName')}
                      onBlur={handleBlur('fullName')}
                      style={styles.textInputs}
                      value={values.fullName}
                      label="FullName"
                      mode="outlined"
                      outlineColor={THEME_COLOR}
                      activeOutlineColor={THEME_COLOR}
                      placeholder="Enter your Fullname"
                    />
                    {errors.fullName && (
                      <Text
                        style={{
                          color: 'red',
                          width: '90%',
                          alignSelf: 'center',
                          fontSize: 10,
                          paddingLeft: 2,
                        }}>
                        {errors.fullName}
                      </Text>
                    )}
                  </View>
                  <View style={styles.inputBox}>
                    <TextInput
                      onChangeText={handleChange('role')}
                      onBlur={handleBlur('role')}
                      style={styles.textInputs}
                      value={values.role}
                      label="Role"
                      mode="outlined"
                      outlineColor={THEME_COLOR}
                      activeOutlineColor={THEME_COLOR}
                      placeholder="Enter your Role"
                    />
                    {errors.role && (
                      <Text
                        style={{
                          color: 'red',
                          width: '90%',
                          alignSelf: 'center',
                          fontSize: 10,
                          paddingLeft: 2,
                        }}>
                        {errors.role}
                      </Text>
                    )}
                  </View>
                  <View style={styles.inputBox}>
                    <TextInput
                      onChangeText={handleChange('uniqueCode')}
                      onBlur={handleBlur('uniqueCode')}
                      style={styles.textInputs}
                      value={values.uniqueCode}
                      label="Unique Code"
                      mode="outlined"
                      outlineColor={THEME_COLOR}
                      activeOutlineColor={THEME_COLOR}
                      placeholder="Enter your Unique Code"
                    />
                    {errors.uniqueCode && (
                      <Text
                        style={{
                          color: 'red',
                          width: '90%',
                          alignSelf: 'center',
                          fontSize: 10,
                          paddingLeft: 2,
                        }}>
                        {errors.uniqueCode}
                      </Text>
                    )}
                  </View>
                </ScrollView>
              </KeyboardAvoidingView>

              <View
                style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text
                  onPress={() => nav.navigate('Login')}
                  style={styles.forgotpass}>
                  Login?
                </Text>
              </View>
              <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
                {/* login button */}
                <Text style={styles.btntext}>Sign Up</Text>
              </TouchableOpacity>
            </ScrollView>
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
    color:THEME_COLOR
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
    marginTop: 20,
    backgroundColor: THEME_COLOR,
    marginBottom: 30,
  },
  btntext: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});
