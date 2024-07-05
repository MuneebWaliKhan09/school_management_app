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
import {useSingleStudentDetailsQuery} from '../../../store/features/adminFeatures';
import {useRoute} from '@react-navigation/native';
import Loader from '../../../Loaders/Loader';
import {useSelector} from 'react-redux';
import {Half_WHITE, WHITE_BG} from '../../../strings/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const StudentDetails = ({navigation}) => {
  const theme = useSelector(state => state.themeAdmin);
  const [modalOpen, setmodalOpen] = useState(false);
  const [more, setmore] = useState('');
  const route = useRoute();
  const {id} = route.params;
  const {
    data: singleStudentData,
    isLoading,
    isError,
  } = useSingleStudentDetailsQuery(id);

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
  const addressD = 'sadda lower kurram sadda bazar molayano kalay hor';

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
            <Text
              style={[
                styles.value,
                {color: theme.background ? Half_WHITE : '#555'},
              ]}>
              {data.className.className}
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
              navigation.navigate('AdminStack', {
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
    padding: responsiveWidth(4),
    backgroundColor: '#f0f4f7',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: responsiveWidth(2),
    padding: responsiveWidth(5),
    marginBottom: responsiveHeight(2),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: responsiveHeight(0.2)},
    shadowOpacity: 0.1,
    shadowRadius: responsiveWidth(2),
    elevation: 5,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: responsiveHeight(2),
  },
  avatar: {
    width: responsiveWidth(30),
    height: responsiveWidth(30),
    borderRadius: responsiveWidth(15),
    borderWidth: responsiveWidth(0.5),
    borderColor: '#dcdcdc',
  },
  detailsContainer: {
    marginBottom: responsiveHeight(2),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(1.7),
    borderBottomWidth: responsiveWidth(0.2),
    borderBottomColor: '#f0f0f0',
    paddingBottom: responsiveHeight(0.5),
  },
  label: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
    color: '#333',
  },
  value: {
    fontSize: responsiveFontSize(1.8),
    color: '#555',
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: responsiveHeight(1.2),
    borderRadius: responsiveWidth(1.2),
    alignItems: 'center',
    marginTop: responsiveHeight(2),
    borderWidth: responsiveWidth(0.2),
    borderColor: Half_WHITE,
  },
  buttonText: {
    color: '#fff',
    fontSize: responsiveFontSize(2),
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    borderRadius: responsiveWidth(2),
    padding: responsiveWidth(5),
    width: '80%',
    maxHeight: '80%',
  },
  modalText: {
    fontSize: responsiveFontSize(2),
    color: '#ffff',
    marginBottom: responsiveHeight(1),
  },
  closeButton: {
    borderWidth: responsiveWidth(0.2),
    borderColor: '#6200ee',
    padding: responsiveWidth(2),
    borderRadius: responsiveWidth(1.2),
    alignItems: 'center',
    marginTop: responsiveHeight(2),
  },
  closeButtonText: {
    fontSize: responsiveFontSize(2),
    color: '#6200ee',
  },
  addressContainer: {
    flexDirection: 'row',
  },
});

export default StudentDetails;
