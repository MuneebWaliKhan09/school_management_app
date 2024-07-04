import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Half_WHITE, WHITE_BG} from '../../../strings/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const AcademicHistory = ({navigation}) => {
  const theme = useSelector(state => state.themeAdmin);
  const route = useRoute();
  const {academics} = route.params;

  return (
    <View style={{flex: 1}}>
      {academics?.length > 0 ? (
        <ScrollView contentContainerStyle={styles.container}>
          {academics?.map(record => (
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
                    style={{width: 20, height: 20, tintColor: Half_WHITE}}
                    source={require('../../../images/icons/pen.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.deleteButton]}
                  onPress={() => {
                    /* Handle delete action */
                  }}>
                  <Image
                    style={{width: 20, height: 20, tintColor: Half_WHITE}}
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
        onPress={() => navigation.navigate('AddAcademicRecord')}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
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
    fontSize: 16,
    color: '#555',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
    gap: 18,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
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
  buttonText: {
    color: '#fff',
    fontSize: 12,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 25,
    backgroundColor: '#6200ee',
    width: 60,
    height: 60,
    borderColor: 'white',
    borderWidth: 0.7,
    borderRadius: 30,
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
    fontSize: 25,
    lineHeight: 30,
  },
  noDataContainer: {
    marginTop: responsiveHeight(10),
  },
  noDataText: {
    textAlign: 'center',
    color: '#7f8c8d',
    fontSize: 16,
  },
});

export default AcademicHistory;
