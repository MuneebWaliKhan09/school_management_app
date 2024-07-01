import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {TextInput as PaperTextInput, Text} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { useChangePasswordUserMutation } from '../../../store/features/userFeatures';
import Loader from '../../../Loaders/Loader';

const UpdatePassword = () => {
  const [changePasswordUser, {isLoading}] = useChangePasswordUserMutation();

  const initialValues = {
    oldPassword: '',
    newPassword: '',
  };

  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required('Old Password is required'),
    newPassword: Yup.string().required('New Password is required'),
  });

  const handleSubmit = async values => {
    try {
      const response = await changePasswordUser(values).unwrap();
      console.log('Response:', response?.message);
    } catch (error) {
      console.log('Error:', error?.data?.message);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Password</Text>
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
              <Text style={styles.label}>Old Password</Text>
              <PaperTextInput
                style={styles.input}
                placeholder="Enter your old password"
                onChangeText={handleChange('oldPassword')}
                onBlur={handleBlur('oldPassword')}
                value={values.oldPassword}
                secureTextEntry
              />
              {touched.oldPassword && errors.oldPassword && (
                <Text style={styles.errorText}>{errors.oldPassword}</Text>
              )}
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>New Password</Text>
              <PaperTextInput
                style={styles.input}
                placeholder="Enter your new password"
                onChangeText={handleChange('newPassword')}
                onBlur={handleBlur('newPassword')}
                value={values.newPassword}
                secureTextEntry
              />
              {touched.newPassword && errors.newPassword && (
                <Text style={styles.errorText}>{errors.newPassword}</Text>
              )}
            </View>

            <Button
              onPress={handleSubmit}
              title="Update Password"
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

export default UpdatePassword;
