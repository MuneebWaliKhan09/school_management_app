import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import Loader from '../../../Loaders/Loader';
import {useSelector} from 'react-redux';
import {Half_WHITE, WHITE_BG} from '../../../strings/Colors';
import { useStudentDetailsClassQuery } from '../../../store/features/teacherFeatures';

const StudentDetails = ({navigation}) => {
  const theme = useSelector(state => state.themeTeacher);
  const [modalOpen, setmodalOpen] = useState(false);
  const [more, setmore] = useState('');
  const route = useRoute();
  const {id} = route.params;
  const {
    data: singleStudentData,
    isLoading,
    isError,
  } = useStudentDetailsClassQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Text>Something went wrong!</Text>;
  }

  const handleModalOpen = address => {
    setmodalOpen(true);
    setmore(address);
  };

  const data = singleStudentData?.data || '';
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.card, {backgroundColor: theme.background}]}>
        <View style={styles.imageContainer}>
          <Image source={{uri: data.avatar}} style={styles.avatar} />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.row}>
            <Text
              style={[
                styles.label,
                {color: theme.background ? WHITE_BG : '#333'},
              ]}>
              Full Name:
            </Text>
            <Text
              style={[
                styles.value,
                {color: theme.background ? Half_WHITE : '#555'},
              ]}>
              {data.fullName}
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={[
                styles.label,
                {color: theme.background ? WHITE_BG : '#333'},
              ]}>
              Date of Birth:
            </Text>
            <Text
              style={[
                styles.value,
                {color: theme.background ? Half_WHITE : '#555'},
              ]}>
              {new Date(data.DOB).toLocaleDateString()}
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={[
                styles.label,
                {color: theme.background ? WHITE_BG : '#333'},
              ]}>
              Gender:
            </Text>
            <Text
              style={[
                styles.value,
                {color: theme.background ? Half_WHITE : '#555'},
              ]}>
              {data.gender}
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={[
                styles.label,
                {color: theme.background ? WHITE_BG : '#333'},
              ]}>
              Class Name:
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={[
                styles.label,
                {color: theme.background ? WHITE_BG : '#333'},
              ]}>
              Roll Number:
            </Text>
            <Text
              style={[
                styles.value,
                {color: theme.background ? Half_WHITE : '#555'},
              ]}>
              {data.rollNo}
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={[
                styles.label,
                {color: theme.background ? WHITE_BG : '#333'},
              ]}>
              Admission Class:
            </Text>
            <Text
              style={[
                styles.value,
                {color: theme.background ? Half_WHITE : '#555'},
              ]}>
              {data.admissionClass}
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={[
                styles.label,
                {color: theme.background ? WHITE_BG : '#333'},
              ]}>
              Father's Name:
            </Text>
            <Text
              style={[
                styles.value,
                {color: theme.background ? Half_WHITE : '#555'},
              ]}>
              {data.fatherName}
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={[
                styles.label,
                {color: theme.background ? WHITE_BG : '#333'},
              ]}>
              Email:
            </Text>
            <Text
              style={[
                styles.value,
                {color: theme.background ? Half_WHITE : '#555'},
              ]}>
              {data.email}
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={[
                styles.label,
                {color: theme.background ? WHITE_BG : '#333'},
              ]}>
              Phone:
            </Text>
            <Text
              style={[
                styles.value,
                {color: theme.background ? Half_WHITE : '#555'},
              ]}>
              {data.phone}
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={[
                styles.label,
                {color: theme.background ? WHITE_BG : '#333'},
              ]}>
              Address:
            </Text>
            <Text
              onPress={() => handleModalOpen(data?.address)}
              style={[
                styles.value,
                {color: theme.background ? Half_WHITE : '#555'},
              ]}>
              {data?.address.length >= 20 ? (
                <>
                  {data?.address.slice(0, 20)}
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: theme.background ? Half_WHITE : '#555',
                    }}>
                    {' '}
                    More...
                  </Text>
                </>
              ) : (
                data?.address
              )}
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={[
                styles.label,
                {color: theme.background ? WHITE_BG : '#333'},
              ]}>
              Blood Group:
            </Text>
            <Text
              style={[
                styles.value,
                {color: theme.background ? Half_WHITE : '#555'},
              ]}>
              {data.bloodGroup}
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={[
                styles.label,
                {color: theme.background ? WHITE_BG : '#333'},
              ]}>
              Joining Date:
            </Text>
            <Text
              style={[
                styles.value,
                {color: theme.background ? Half_WHITE : '#555'},
              ]}>
              {new Date(data.joiningDate).toLocaleDateString()}
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={[
                styles.label,
                {color: theme.background ? WHITE_BG : '#333'},
              ]}>
              Age:
            </Text>
            <Text
              style={[
                styles.value,
                {color: theme.background ? Half_WHITE : '#555'},
              ]}>
              {data.age}
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={[
                styles.label,
                {color: theme.background ? WHITE_BG : '#333'},
              ]}>
              Monthly Fee:
            </Text>
            <Text
              style={[
                styles.value,
                {color: theme.background ? Half_WHITE : '#555'},
              ]}>
              ${data.monthlyFee}
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={[
                styles.label,
                {color: theme.background ? WHITE_BG : '#333'},
              ]}>
              Lab Fee:
            </Text>
            <Text
              style={[
                styles.value,
                {color: theme.background ? Half_WHITE : '#555'},
              ]}>
              ${data.labFee}
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={[
                styles.label,
                {color: theme.background ? WHITE_BG : '#333'},
              ]}>
              Security Fee:
            </Text>
            <Text
              style={[
                styles.value,
                {color: theme.background ? Half_WHITE : '#555'},
              ]}>
              ${data.securityFee}
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.button, {backgroundColor: theme.background}]}
            onPress={() =>
              navigation.navigate('TeacherStack', {
                screen: 'AcademicHistory',
                params: {academics: data?.academicHistory},
              })
            }>
            <Text style={[styles.buttonText]}>View Academic History</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        visible={modalOpen}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setmodalOpen(false)}>
        <View style={styles.modalBackground}>
          <View
            style={[
              styles.modalContainer,
              {backgroundColor: theme.background},
            ]}>
            <ScrollView>
              <Text style={styles.modalText}>{more}</Text>
              <TouchableOpacity
                onPress={() => setmodalOpen(false)}
                style={[styles.closeButton, {borderColor: theme.background}]}>
                <Text
                  style={[
                    styles.closeButtonText,
                    {color: theme.background ? Half_WHITE : '#555'},
                  ]}>
                  Close
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 14,
    backgroundColor: '#f0f4f7',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#dcdcdc',
  },
  detailsContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  value: {
    fontSize: 15,
    color: '#555',
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 0.7,
    borderColor: Half_WHITE,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    borderRadius: 10,
    padding: 20,
    width: '80%',
    maxHeight: '80%',
  },
  modalText: {
    fontSize: 16,
    color: '#ffff',
    marginBottom: 10,
  },
  closeButton: {
    borderWidth: 1,
    borderColor: '#6200ee',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#6200ee',
  },
  addressContainer: {
    flexDirection: 'row', // Ensures the text inside TouchableOpacity is properly rendered
  },
});

export default StudentDetails;
