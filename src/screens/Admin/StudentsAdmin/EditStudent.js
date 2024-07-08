import React, {useEffect, useState} from 'react';
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
import {TextInput, PaperTextInput} from 'react-native-paper';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
import {
  useEditStudentDetailsMutation,
  useSingleStudentDetailsQuery,
} from '../../../store/features/adminFeatures';
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

const EditStudent = () => {
  const theme = useSelector(state => state.themeAdmin);
  const {showToast} = useToast();
  const route = useRoute();
  const navigation = useNavigation();
  const {id} = route?.params;
  const {
    data: singleStudentData,
    isLoading,
    isError,
  } = useSingleStudentDetailsQuery(id);
  const [EditStudentDetails] = useEditStudentDetailsMutation();
  const studentData = singleStudentData?.data || {};

  const [formData, setFormData] = useState({
    fullName: '',
    firstName: '',
    admissionClass: '',
    rollNo: '',
    age: '',
    className: '',
    fatherName: '',
    gender: '',
    DOB: '',
    joiningDate: '',
    bloodGroup: '',
    email: '',
    address: '',
    phone: '',
    monthlyFee: '',
    securityFee: '',
    labFee: '',
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateField, setDateField] = useState('');

  useEffect(() => {
    if (singleStudentData?.data) {
      setFormData({
        fullName: studentData?.fullName || '',
        firstName: studentData?.firstName || '',
        admissionClass: studentData?.admissionClass || '',
        rollNo: studentData?.rollNo || '',
        age: studentData?.age || '',
        className: studentData?.className?.className || '',
        fatherName: studentData?.fatherName || '',
        gender: studentData?.gender || '',
        DOB: studentData?.DOB || '',
        joiningDate: studentData?.joiningDate || '',
        bloodGroup: studentData?.bloodGroup || '',
        email: studentData?.email || '',
        address: studentData?.address || '',
        phone: studentData?.phone || '',
        monthlyFee: studentData?.monthlyFee || '',
        securityFee: studentData?.securityFee || '',
        labFee: studentData?.labFee || '',
      });
    }
  }, [singleStudentData, studentData]);

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: ['rollNo', 'age', 'monthlyFee', 'securityFee', 'labFee'].includes(
        key,
      )
        ? parseInt(value, 10) || ''
        : value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await EditStudentDetails({id, data: formData});
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

  const openDatePicker = field => {
    setDateField(field);
    setShowDatePicker(true);
  };

  const closeDatePicker = () => {
    setShowDatePicker(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Text>{isError}</Text>;
  }

  return (
    <ScrollView
      contentContainerStyle={[styles.container, {backgroundColor: WHITE_BG}]}>
      {Object.keys(formData).map(key => (
        <View
          key={key}
          style={[styles.inputContainer, {backgroundColor: WHITE_BG}]}>
          {key === 'gender' ? (
            <Dropdown
              style={[
                styles.dropdown,
                {borderColor: theme.background, backgroundColor: WHITE_BG},
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
              value={formData.gender}
              onChange={item => handleChange('gender', item.value)}
            />
          ) : key === 'bloodGroup' ? (
            <Dropdown
              style={[
                styles.dropdown,
                {borderColor: theme.background, backgroundColor: WHITE_BG},
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
              value={formData.bloodGroup}
              onChange={item => handleChange('bloodGroup', item.value)}
            />
          ) : key === 'DOB' || key === 'joiningDate' ? (
            <TouchableOpacity onPress={() => openDatePicker(key)}>
              <TextInput
                label={key.replace(/([A-Z])/g, ' $1').trim()}
                mode="outlined"
                contentStyle={{color: theme.background}}
                style={{backgroundColor: WHITE_BG}}
                value={new Date(formData[key]).toLocaleString('en-US', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                })}
                editable={false}
              />
            </TouchableOpacity>
          ) : (
            <TextInput
              label={key.replace(/([A-Z])/g, ' $1').trim()}
              mode="outlined"
              outlineColor={theme.background}
              activeOutlineColor={theme.background}
              contentStyle={{color: theme.background}}
              value={formData[key]?.toString()}
              style={{backgroundColor: WHITE_BG}}
              onChangeText={value => handleChange(key, value)}
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
        </View>
      ))}
      <TouchableOpacity
        style={[styles.btn, {backgroundColor: theme.background}]}
        onPress={handleSubmit}>
        <Text style={{color: Half_WHITE, fontWeight: 'bold'}}>
          {updatingLoad ? 'Updating...' : 'Save Changes'}
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
                formData[dateField] ? new Date(formData[dateField]) : new Date()
              }
              mode="date"
              onDateChange={date => {
                handleChange(dateField, date.toISOString().split('T')[0]);
              }}
              maximumDate={new Date()}
            />
            <Button title="Close" onPress={closeDatePicker} />
          </View>
        </View>
      </Modal>
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
  input: {
    height: responsiveHeight(6),
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: responsiveWidth(2),
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
});

export default EditStudent;
