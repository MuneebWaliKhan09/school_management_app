import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
} from 'react-native';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Half_WHITE, WHITE_BG} from '../../../strings/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { useStudentDetailsClassQuery } from '../../../store/features/teacherFeatures';
import { useDeleteAcademicRecordMutation } from '../../../store/features/adminFeatures';
import { useToast } from '../../../context/ToastContext';

const AcademicHistory = () => {
  const {showToast} = useToast()
  const focus = useIsFocused()
  const navigation = useNavigation()
  const theme = useSelector(state => state.themeTeacher);
  const route = useRoute();
  const {stId} = route.params;

  const {refetch, data} = useStudentDetailsClassQuery(stId);
  const [DeleteAcademicRecord] = useDeleteAcademicRecordMutation()

  const [academicHistory, setAcademicHistory] = useState([]);

  useEffect(() => {
    if(focus){
      refetch()
      setAcademicHistory(data?.data?.academicHistory);
    }
  }, [data,focus]);


  const DeleteAcademicR = async recordId => {
    const confirm = Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            try {
              const response = await DeleteAcademicRecord(recordId);
              console.log(response.data?.message);
              if (response?.error) {
                showToast(response?.error?.data?.message, 'error');
              } else {
                showToast(response.data?.message, 'success');
                refetch()
              }
            } catch (error) {
              showToast('An error occurred while saving changes', 'error');
            }
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {academicHistory?.length > 0 ? (
        <ScrollView contentContainerStyle={styles.container}>
          {academicHistory?.map(record => (
            <View
              key={record._id}
              style={[styles.card, {backgroundColor: theme.background}]}>
              <View style={styles.row}>
                <Text
                  style={[
                    styles.label,
                    {color: theme.background ? WHITE_BG : '#333'},
                  ]}>
                  Year:
                </Text>
                <Text
                  style={[
                    styles.value,
                    {color: theme.background ? Half_WHITE : '#555'},
                  ]}>
                  {record.year}
                </Text>
              </View>
              <View style={styles.row}>
                <Text
                  style={[
                    styles.label,
                    {color: theme.background ? WHITE_BG : '#333'},
                  ]}>
                  Exam:
                </Text>
                <Text
                  style={[
                    styles.value,
                    {color: theme.background ? Half_WHITE : '#555'},
                  ]}>
                  {record.exam}
                </Text>
              </View>
              <View style={styles.row}>
                <Text
                  style={[
                    styles.label,
                    {color: theme.background ? WHITE_BG : '#333'},
                  ]}>
                  Class:
                </Text>
                <Text
                  style={[
                    styles.value,
                    {color: theme.background ? Half_WHITE : '#555'},
                  ]}>
                  {record.pClass}
                </Text>
              </View>
              <View style={styles.row}>
                <Text
                  style={[
                    styles.label,
                    {color: theme.background ? WHITE_BG : '#333'},
                  ]}>
                  Marks Obtained:
                </Text>
                <Text
                  style={[
                    styles.value,
                    {color: theme.background ? Half_WHITE : '#555'},
                  ]}>
                  {record.marksObtained}
                </Text>
              </View>
              <View style={styles.row}>
                <Text
                  style={[
                    styles.label,
                    {color: theme.background ? WHITE_BG : '#333'},
                  ]}>
                  Total Marks:
                </Text>
                <Text
                  style={[
                    styles.value,
                    {color: theme.background ? Half_WHITE : '#555'},
                  ]}>
                  {record.totalMarks}
                </Text>
              </View>
              <View style={styles.row}>
                <Text
                  style={[
                    styles.label,
                    {color: theme.background ? WHITE_BG : '#333'},
                  ]}>
                  Percentage:
                </Text>
                <Text
                  style={[
                    styles.value,
                    {color: theme.background ? Half_WHITE : '#555'},
                  ]}>
                  {record.percentage}%
                </Text>
              </View>
              <View style={styles.row}>
                <Text
                  style={[
                    styles.label,
                    {color: theme.background ? WHITE_BG : '#333'},
                  ]}>
                  Grade:
                </Text>
                <Text
                  style={[
                    styles.value,
                    {color: theme.background ? Half_WHITE : '#555'},
                  ]}>
                  {record.grade}
                </Text>
              </View>
              <View style={styles.row}>
                <Text
                  style={[
                    styles.label,
                    {color: theme.background ? WHITE_BG : '#333'},
                  ]}>
                  Position in Class:
                </Text>
                <Text
                  style={[
                    styles.value,
                    {color: theme.background ? Half_WHITE : '#555'},
                  ]}>
                  {record.positionInClass}
                </Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.editButton]}
                  onPress={() =>
                    navigation.navigate('EditAcademicRecord', {record})
                  }>
                  <Image
                    style={styles.icon}
                    source={require('../../../images/icons/pen.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.deleteButton]}
                  onPress={()=> DeleteAcademicR(record?._id)}>
                  <Image
                    style={styles.icon}
                    source={require('../../../images/icons/delete.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      ) : (
        <View style={styles.noDataContainer}>
          <Text style={[styles.noDataText, {fontSize: responsiveFontSize(2)}]}>
            No Data
          </Text>
        </View>
      )}

      <TouchableOpacity
        style={[styles.addButton]}
        onPress={() => navigation.navigate('AddAcademicRecord', stId)}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: responsiveWidth(5),
    backgroundColor: '#f0f4f7',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: responsiveWidth(2.5),
    padding: responsiveWidth(5),
    marginBottom: responsiveHeight(2.5),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(1.5),
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: responsiveHeight(0.5),
  },
  label: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
    color: '#333',
  },
  value: {
    fontSize: responsiveFontSize(2),
    color: '#555',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: responsiveHeight(1),
    gap: responsiveWidth(4.5),
  },
  button: {
    paddingVertical: responsiveHeight(0.8),
    paddingHorizontal: responsiveWidth(2),
    borderRadius: responsiveWidth(1.25),
    alignItems: 'center',
  },
  editButton: {
    borderColor: Half_WHITE,
    borderWidth: 0.7,
  },
  deleteButton: {
    borderColor: Half_WHITE,
    borderWidth: 0.7,
  },
  icon: {
    width: responsiveWidth(5),
    height: responsiveHeight(2.5),
    tintColor: Half_WHITE,
  },
  addButton: {
    position: 'absolute',
    bottom: responsiveHeight(2.5),
    right: responsiveWidth(6),
    backgroundColor: '#6200ee',
    width: responsiveWidth(15),
    height: responsiveWidth(15),
    borderColor: 'white',
    borderWidth: 0.7,
    borderRadius: responsiveWidth(7.5),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: responsiveFontSize(3.2),
    lineHeight: responsiveFontSize(3.5),
  },
  noDataContainer: {
    marginTop: responsiveHeight(10),
  },
  noDataText: {
    textAlign: 'center',
    color: '#7f8c8d',
    fontSize: responsiveFontSize(2),
  },
});

export default AcademicHistory;
