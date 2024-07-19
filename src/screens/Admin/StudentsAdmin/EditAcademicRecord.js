import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import {TextInput, Button, Text} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useSelector} from 'react-redux';
import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {WHITE_BG} from '../../../strings/Colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useEditAcademicRecordMutation} from '../../../store/features/adminFeatures';
import {useToast} from '../../../context/ToastContext';

const AcademicRecordSchema = Yup.object().shape({
  year: Yup.number().required('Year is required'),
  exam: Yup.string().required('Exam is required'),
  pClass: Yup.string().required('Class is required'),
  grade: Yup.string().required('Grade is required'),
  percentage: Yup.number().required('Percentage is required'),
  positionInClass: Yup.string().required('Position in class is required'),
  marksObtained: Yup.number().required('Marks obtained is required'),
  totalMarks: Yup.number().required('Total marks is required'),
});

const formFields = [
  {name: 'year', label: 'Year', type: 'number'},
  {name: 'exam', label: 'Exam', type: 'string'},
  {name: 'pClass', label: 'Class', type: 'string'},
  {name: 'grade', label: 'Grade', type: 'string'},
  {name: 'percentage', label: 'Percentage', type: 'number'},
  {name: 'positionInClass', label: 'Position in Class', type: 'string'},
  {name: 'marksObtained', label: 'Marks Obtained', type: 'number'},
  {name: 'totalMarks', label: 'Total Marks', type: 'number'},
];

const EditAcademicRecord = () => {
  const route = useRoute();
  const {record} = route?.params;
  const {showToast} = useToast();
  const navigation = useNavigation();
  const theme = useSelector(state => state.themeAdmin);
  const [EditAcademicRecord, {isLoading}] = useEditAcademicRecordMutation();

  const handleSubmit = async values => {
    const arr = {
      ...values,
      percentage: parseInt(values.percentage),
      marksObtained: parseInt(values.marksObtained),
      totalMarks: parseInt(values.totalMarks),
    };
    try {
      const res = await EditAcademicRecord({id: record?._id, data: arr});
      if (res.error) {
        showToast(res.error.data.message, 'error');
      } else {
        showToast(res.data.message, 'success');
        navigation.goBack();
      }
    } catch (error) {
      showToast('An error occurred while saving changes', 'error');
    }
  };

  const initailState = {
    year: record?.year || '',
    exam: record.exam || '',
    pClass: record.pClass || '',
    grade: record?.grade || '',
    percentage: record?.percentage || 0,
    positionInClass: record?.positionInClass || '',
    marksObtained: record?.marksObtained || 0,
    totalMarks: record?.totalMarks || 0,
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        style={{
          backgroundColor: WHITE_BG,
        }}>
        <Formik
          initialValues={initailState}
          validationSchema={AcademicRecordSchema}
          onSubmit={values => handleSubmit(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.container}>
              {formFields.map((field, index) => (
                <View key={index}>
                  <TextInput
                    label={field.label}
                    mode="outlined"
                    onChangeText={handleChange(field.name)}
                    onBlur={handleBlur(field.name)}
                    outlineStyle={{borderColor: theme.background}}
                    value={String(values[field.name])}
                    error={touched[field.name] && errors[field.name]}
                    theme={{
                      colors: {
                        primary: theme.background,
                        text: theme.background,
                      },
                    }}
                    style={styles.input}
                    keyboardType={
                      field.type === 'number' ? 'numeric' : 'default'
                    }
                  />
                  {touched[field.name] && errors[field.name] && (
                    <Text style={styles.error}>{errors[field.name]}</Text>
                  )}
                </View>
              ))}

              <Button
                mode="contained"
                onPress={handleSubmit}
                style={[styles.button, {backgroundColor: theme.background}]}
                disabled={isLoading}>
                {isLoading ? (
                  <Text style={{color: WHITE_BG}}>Submitting...</Text>
                ) : (
                  'Submit'
                )}
              </Button>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: responsiveWidth(5),
    backgroundColor: WHITE_BG,

  },
  title: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: responsiveWidth(5),
  },
  input: {
    marginBottom: responsiveWidth(2.7),
  },
  error: {
    fontSize: responsiveFontSize(1.5),
    color: 'red',
    marginBottom: responsiveWidth(3),
  },
  button: {
    marginTop: responsiveWidth(5),
  },
});

export default EditAcademicRecord;
