import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import {TextInput as PaperTextInput} from 'react-native-paper';
import * as Yup from 'yup';
import {WHITE_BG} from '../../../strings/Colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  useUpdateProfileMutation,
} from '../../../store/features/userFeatures';

const EditProfile = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dataUser = route?.params?.userData;
  const [updateProfile] = useUpdateProfileMutation();

  // Set initial values based on userData or empty values if userData is not available
  const initialValues = {
    fullName: dataUser?.fullName || '',
    email: dataUser?.email || '',
    username: dataUser?.username || '',
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    username: Yup.string().required('Username is required'),
  });

  const handleSubmit = async values => {
    await updateProfile(values)
      .then(async res => {
        console.log("res",res.data);
          navigation.goBack();
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Profile</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Full Name</Text>
              <PaperTextInput
                style={styles.input}
                placeholder="Enter your full name"
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
              />
              {touched.fullName && errors.fullName && (
                <Text style={styles.errorText}>{errors.fullName}</Text>
              )}
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <PaperTextInput
                style={styles.input}
                placeholder="Enter your email address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Username</Text>
              <PaperTextInput
                style={styles.input}
                placeholder="Enter your username"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />
              {touched.username && errors.username && (
                <Text style={styles.errorText}>{errors.username}</Text>
              )}
            </View>

            <Button
              onPress={handleSubmit}
              title="Update Profile"
              style={styles.button}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE_BG,
    padding: 20,
  },
  formContainer: {
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007bff',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
  },
});

export default EditProfile;
