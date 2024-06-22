import React from 'react';
import {TextInput} from 'react-native-paper';
import {Button, View,Text} from 'react-native';
import {Formik as FormikLib} from 'formik';
import {THEME_COLOR} from '../../strings/Colors';
import { object, string, InferType } from 'yup';

let userSchema = object({
    name: string().required("please enter your name"),
    email: string().email(),
  });

const Formik = props => (
  <View style={{flex: 1}}>
    <FormikLib
      initialValues={{email: '', name: ''}}
      onSubmit={values => console.log(values)}
      validationSchema={userSchema}
      >
      {({handleChange, handleBlur, handleSubmit, values,errors}) => (
        <View>
          <TextInput
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            label="Name"
            mode="outlined"
            outlineColor={THEME_COLOR}
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: 40,
            }}
          />
          {errors.name && <Text style={{color: 'red',width:"90%",marginTop:5,alignSelf:"center"}}>{errors.name}</Text>}
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            label="Email"
            mode="outlined"
            outlineColor={THEME_COLOR}
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: 10,
            }}
          />
          {errors.email && <Text style={{color: 'red',width:"90%",marginTop:10}}>{errors.email}</Text>}
          <View style={{marginTop:20}}>
          <Button onPress={handleSubmit} title="Submit" />
          </View>
        </View>
      )}
    </FormikLib>
  </View>
);

export default Formik;
