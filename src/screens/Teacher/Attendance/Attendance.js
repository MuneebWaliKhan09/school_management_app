import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {useGetTodayAttendaceQuery} from '../../../store/features/teacherFeatures';
import {THEME_COLOR, GHOST_WHITE, WHITE_BG, Half_WHITE, Half_gray, THEME_COLOR2} from '../../../strings/Colors';
import ErrorCustom from '../../../Error/ErrorCustom';

const dummyTodayAttendance = [
  {studentName: 'Ali Khan', status: 'present'},
  {studentName: 'Sara Ahmed', status: 'absent'},
  {studentName: 'John Doe', status: 'present'},
  {studentName: 'Jane Smith', status: 'absent'},
  {studentName: 'Michael Brown', status: 'present'},
  {studentName: 'Emily Davis', status: 'absent'},
  {studentName: 'David Wilson', status: 'present'},
  {studentName: 'Linda Johnson', status: 'present'},
  {studentName: 'Chris Lee', status: 'absent'},
  {studentName: 'Chris Lee', status: 'absent'},
  {studentName: 'Chris Lee', status: 'absent'},
  {studentName: 'Patricia Kim', status: 'present'},
  {studentName: 'Patricia Kim', status: 'present'},
  {studentName: 'Patricia Kim', status: 'present'},
  {studentName: 'Patricia Kim', status: 'present'},
];

const Attendance = () => {
  const {data: todayAttendance, isLoading} = useGetTodayAttendaceQuery();

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={THEME_COLOR} />
      </View>
    );
  }

  const currentClass = dummyTodayAttendance[0]?.AttClass || 'Class not found';
  const currentDate =
    new Date(dummyTodayAttendance[0]?.date).toLocaleDateString() ||
    'Date not found';

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.dateText}>
          Date: {new Date().toLocaleDateString()}
        </Text>
        <Text style={styles.classText}>Class: 2</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}>
        {dummyTodayAttendance.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.name}>{item.studentName}</Text>
            <Text
              style={[
                styles.status,
                item.status === 'present' ? styles.present : styles.absent,
              ]}>
              {item.status[0].toUpperCase() + item.status.slice(1)}
            </Text>
          </View>
        ))}
        {dummyTodayAttendance.length === 0 && (
          <ErrorCustom message={'Attendance Not Taken Today !'} />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:WHITE_BG
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 2,
    height:20,
  },
  dateText: {
    fontSize: 16,
    color: THEME_COLOR,
    fontWeight: '900',
  },
  classText: {
    fontSize: 16,
    color: THEME_COLOR,
    fontWeight: '900',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // White with 70% opacity
  },
  scrollViewContainer: {
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Ensures text alignment vertically centered
    paddingVertical: 10,
    borderBottomWidth: 1,
    paddingHorizontal: 2,
    borderBottomColor: THEME_COLOR,
  },
  name: {
    flex: 1, // Allows name to occupy remaining space
    fontSize: 15,
    color: THEME_COLOR2,
    fontWeight: '500',
  },
  status: {
    width: 60,
    textAlign: 'center', 
    fontSize: 14,
    fontWeight: '500',
  },
  present: {
    color: 'green',
  },
  absent: {
    color: 'red',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
});

export default Attendance;
