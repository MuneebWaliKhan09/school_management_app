import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableOpacity,
  Button,
  Text,
  Image,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
import {useAddStudentMutation} from '../../../store/features/adminFeatures';
import {useToast} from '../../../context/ToastContext';
import Loader from '../../../Loaders/Loader';
import DatePicker from 'react-native-date-picker';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useSelector} from 'react-redux';
import {Half_WHITE, WHITE_BG} from '../../../strings/Colors';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const genderOptions = [
  {label: 'Male', value: 'Male'},
  {label: 'Female', value: 'Female'},
  {label: 'Other', value: 'Other'},
];

const bloodGroupOptions = [
  {label: 'A+', value: 'A+'},
  {label: 'A-', value: 'A-'},
  {label: 'B+', value: 'B+'},
  {label: 'B-', value: 'B-'},
  {label: 'AB+', value: 'AB+'},
  {label: 'AB-', value: 'AB-'},
  {label: 'O+', value: 'O+'},
  {label: 'O-', value: 'O-'},
];

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  fullName: Yup.string().required('Full name is required'),
  admissionClass: Yup.string().required('Admission class is required'),
  rollNo: Yup.string().required('Roll number is required'),
  age: Yup.string().required('Age is required'),
  className: Yup.string().required('Class name is required'),
  fatherName: Yup.string().required('Father name is required'),
  gender: Yup.string().required('Gender is required'),
  DOB: Yup.string().required('Date of birth is required'),
  joiningDate: Yup.string().required('Joining date is required'),
  bloodGroup: Yup.string().required('Blood group is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  address: Yup.string().required('Address is required'),
  phone: Yup.string().required('Phone number is required'),
  monthlyFee: Yup.string().required('Monthly fee is required'),
  securityFee: Yup.string().required('Security fee is required'),
  labFee: Yup.string().required('Lab fee is required'),
  avatar: Yup.object().required('Avatar is required'),
});

const AddStudent = () => {
  const theme = useSelector(state => state.themeAdmin);
  const {showToast} = useToast();
  const navigation = useNavigation();
  const [AddStudent, {isLoading, isError}] = useAddStudentMutation();

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateField, setDateField] = useState('');
  const [imageFileName, setImageFileName] = useState(null);
  const [imageUri, setImageUri] = useState(null);

  const openDatePicker = field => {
    setDateField(field);
    setShowDatePicker(true);
  };

  const closeDatePicker = () => {
    setShowDatePicker(false);
  };

  const openGallery = async setFieldValue => {
    const res = await launchImageLibrary({mediaType: 'photo'});
    if (!res.didCancel && res.assets && res.assets.length > 0) {
      const {uri, fileName} = res.assets[0];
      console.log(res.assets[0]);
      setImageUri(uri);
      setImageFileName(fileName);
      setFieldValue('avatar', {
        uri,
        type: 'image/jpeg', // or other mime type, adjust accordingly
        name: fileName,
      });
    }
  };

  const handleFormSubmit = async values => {
    const formData = new FormData();
    for (const key in values) {
      if (key === 'avatar' && imageUri) {
        formData.append(key, {
          uri: imageUri,
          type: 'image/jpeg',
          name: imageFileName,
        });
      }
    }
    
    formData.append('fullName', values.fullName)
    formData.append('firstName', values.firstName)
    formData.append('admissionClass', values.admissionClass)
    formData.append('rollNo', values.rollNo)
    formData.append('age', values.age)
    formData.append('className', values.className)
    formData.append('fatherName', values.fatherName)
    formData.append("gender", values.gender)
    formData.append('DOB', values.DOB)
    formData.append('joiningDate', values.joiningDate)
    formData.append('bloodGroup', values.bloodGroup)
    formData.append('email', values.email)
    formData.append('address', values.address)
    formData.append('phone', values.phone)
    formData.append('monthlyFee', values.monthlyFee)
    formData.append('securityFee', values.securityFee)
    formData.append('labFee', values.labFee)
    
    try {
      const response = await AddStudent(formData);
      console.log(response);
      if (response.error) {
        showToast(response.error.data.message, 'error');
      } else {
        showToast(response.data.message, 'success');
        navigation.goBack();
      }
    } catch (error) {
      showToast('An error occurred while saving changes', 'error');
    }
  };

  return (
    <ScrollView
      contentContainerStyle={[styles.container, {backgroundColor: WHITE_BG}]}>
      <Formik
        initialValues={{
          //   fullName: '',
          //   firstName: '',
          //   admissionClass: '',
          //   rollNo: '',
          //   age: '',
          //   className: '',
          //   fatherName: '',
          //   gender: '',
          //   DOB: '',
          //   joiningDate: '',
          //   bloodGroup: '',
          //   email: '',
          //   address: '',
          //   phone: '',
          //   monthlyFee: '',
          //   securityFee: '',
          //   labFee: '',
          fullName: 'abcd',
          firstName: 'abcd2',
          admissionClass: 'class 3',
          rollNo: 3,
          age: 12,
          className: "class 2",
          fatherName: 'shah jahan',
          gender: 'Male',
          DOB: '2022-05-05',
          joiningDate: '2024-05-05',
          bloodGroup: 'A+',
          email: 'abcd@gmail.com',
          address: 'Khapur dam talaghand road near chock yad Ghar',
          phone: '03061097992',
          monthlyFee: 1200,
          securityFee: 200,
          labFee: 100,
          avatar: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          setFieldValue,
          errors,
          touched,
        }) => (
          <View>
            {Object.keys(values).map(key => (
              <View
                key={key}
                style={[styles.inputContainer, {backgroundColor: WHITE_BG}]}>
                {key === 'gender' ? (
                  <Dropdown
                    style={[
                      styles.dropdown,
                      {
                        borderColor: theme.background,
                        backgroundColor: WHITE_BG,
                      },
                    ]}
                    data={genderOptions}
                    itemTextStyle={{color: theme.background}}
                    containerStyle={{
                      borderWidth: 0.7,
                      borderColor: theme.background,
                      borderTopWidth: 0,
                      elevation: 5,
                    }}
                    labelField="label"
                    selectedTextStyle={{color: theme.background}}
                    iconStyle={{
                      marginRight: responsiveWidth(2),
                      tintColor: theme.background,
                    }}
                    valueField="value"
                    placeholder="Select Gender"
                    value={values.gender}
                    onChange={item => setFieldValue('gender', item.value)}
                  />
                ) : key === 'bloodGroup' ? (
                  <Dropdown
                    style={[
                      styles.dropdown,
                      {
                        borderColor: theme.background,
                        backgroundColor: WHITE_BG,
                      },
                    ]}
                    data={bloodGroupOptions}
                    itemTextStyle={{color: theme.background}}
                    containerStyle={{
                      borderWidth: 0.7,
                      borderColor: theme.background,
                      borderTopWidth: 0,
                      elevation: 5,
                    }}
                    labelField="label"
                    valueField="value"
                    selectedTextStyle={{color: theme.background}}
                    iconStyle={{
                      marginRight: responsiveWidth(2),
                      tintColor: theme.background,
                    }}
                    placeholder="Select Blood Group"
                    value={values.bloodGroup}
                    onChange={item => setFieldValue('bloodGroup', item.value)}
                  />
                ) : key === 'DOB' || key === 'joiningDate' ? (
                  <TouchableOpacity onPress={() => openDatePicker(key)}>
                    <TextInput
                      label={key.replace(/([A-Z])/g, ' $1').trim()}
                      mode="outlined"
                      contentStyle={{color: theme.background}}
                      style={{backgroundColor: WHITE_BG}}
                      value={values[key]}
                      editable={false}
                    />
                  </TouchableOpacity>
                ) : key === 'avatar' ? (
                  <View
                    style={[
                      styles.inputAvatarContainer,
                      {borderColor: theme.background},
                    ]}>
                    <TouchableOpacity
                      style={styles.input}
                      onPress={() => openGallery(setFieldValue)}>
                      <View>
                        <Text style={styles.uploadAvatar}>Upload Avatar</Text>
                      </View>
                    </TouchableOpacity>
                    {imageUri !== null ? (
                      <Image source={{uri: imageUri}} style={styles.image} />
                    ) : (
                      <Image
                        style={styles.image}
                        source={require('../../../images/icons/user.png')}
                      />
                    )}
                  </View>
                ) : (
                  <TextInput
                    label={key.replace(/([A-Z])/g, ' $1').trim()}
                    mode="outlined"
                    outlineColor={theme.background}
                    activeOutlineColor={theme.background}
                    contentStyle={{color: theme.background}}
                    value={values[key]?.toString()}
                    style={{backgroundColor: WHITE_BG}}
                    onChangeText={handleChange(key)}
                    onBlur={handleBlur(key)}
                    keyboardType={
                      [
                        'rollNo',
                        'age',
                        'monthlyFee',
                        'securityFee',
                        'labFee',
                      ].includes(key)
                        ? 'numeric'
                        : 'default'
                    }
                  />
                )}
                {errors[key] && touched[key] && (
                  <Text style={styles.errorText}>{errors[key]}</Text>
                )}
              </View>
            ))}
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.btn, {backgroundColor: theme.background}]}
              onPress={handleSubmit}>
              <Text style={{color: Half_WHITE, fontWeight: 'bold'}}>
                {isLoading ? 'Loading...' : 'Add Student'}
              </Text>
            </TouchableOpacity>
            <Modal
              visible={showDatePicker}
              transparent={true}
              animationType="slide"
              onRequestClose={closeDatePicker}>
              <View style={styles.modalContainer}>
                <View style={styles.modal}>
                  <DatePicker
                    date={
                      values[dateField]
                        ? new Date(values[dateField])
                        : new Date()
                    }
                    mode="date"
                    onDateChange={date => {
                      setFieldValue(
                        dateField,
                        date.toISOString().split('T')[0],
                      );
                    }}
                    maximumDate={new Date()}
                  />
                  <Button title="Close" onPress={closeDatePicker} />
                </View>
              </View>
            </Modal>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: responsiveWidth(5),
    backgroundColor: '#f0f4f7',
  },
  inputContainer: {
    marginBottom: responsiveHeight(2),
  },
  label: {
    marginBottom: responsiveHeight(1),
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  inputAvatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: responsiveHeight(7),
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'space-between',
    borderRadius: 5,
    paddingLeft: responsiveWidth(4),
    paddingRight: responsiveWidth(4),
  },
  input: {
    elevation: 3,
    borderRadius: 7,
  },
  uploadAvatar: {
    paddingHorizontal: 7,
    paddingVertical: 5,
    backgroundColor: WHITE_BG,
    borderWidth: 0.6,
    borderColor: 'gray',
    fontSize: 12,
    borderRadius: 7,
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: 10,
    borderRadius: 40,
  },
  dropdown: {
    height: responsiveHeight(7),
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: responsiveWidth(4),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    backgroundColor: 'white',
    padding: responsiveWidth(5),
    borderRadius: 10,
    elevation: 5,
  },
  btn: {
    padding: responsiveWidth(4),
    borderRadius: 50,
    marginTop: responsiveHeight(1),
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: responsiveFontSize(1.5),
    marginTop: responsiveHeight(1),
  },
});

export default AddStudent;
