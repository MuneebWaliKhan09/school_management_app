import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Switch, Button, ScrollView} from 'react-native';
import {
  useAllStudentsClassTeacherQuery,
  useTakeAttendanceMutation,
} from '../../../store/features/teacherFeatures';
import {THEME_COLOR, GHOST_WHITE} from '../../../strings/Colors';
import Loader from '../../../Loaders/Loader';
import {useToast} from '../../../context/ToastContext';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const TakeAttendance = () => {
  const theme = useSelector(state => state.themeTeacher);
  const {showToast} = useToast();
  const nav = useNavigation();
  const {data: allStudents, isLoading: isLoadingSt} =
    useAllStudentsClassTeacherQuery();
  const [TakeStudentAttendance, {isLoading}] = useTakeAttendanceMutation();
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    if (allStudents && allStudents?.data?.[0]) {
      const initailStudent = allStudents?.data?.[0].map(student => ({
        studentID: student._id,
        status: 'present',
        studentName: student?.fullName,
        studentEmail: student?.email,
      }));
      setAttendance(initailStudent);
    }
  }, [allStudents?.data?.[0]]);

  const toggleAttendance = (studentID, value, studentName, studentEmail) => {
    setAttendance(prev =>
      prev.map(student =>
        student.studentID === studentID
          ? {
              ...student,
              status: value ? 'present' : 'absent',
              studentName,
              studentEmail,
            }
          : student,
      ),
    );
  };

  const handleSubmit = async () => {
    try {
      const data = await TakeStudentAttendance(attendance);

      if (data?.error) {
        showToast(data?.error?.data?.message, 'error');
      } else {
        showToast(data?.data?.message, 'success');
        nav.navigate('Attendance');
      }
    } catch (error) {
      console.error('Error taking attendance:', error);
    }
  };

  if (isLoadingSt) {
    return <Loader />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.dateText}>
          Date:{' '}
          {new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </Text>
        {/* <Text style={styles.classText}>{item.AttClass}</Text> */}
      </View>
      <ScrollView style={styles.scrollView}>
        {allStudents && allStudents?.data?.length > 0 ? (
          allStudents?.data?.[0].map((student, index) => (
            <View key={student._id} style={styles.row}>
              <Text style={[styles.studentName, {color: theme.background}]}>
                {student.fullName[0].toUpperCase() + student?.fullName?.slice(1)}
              </Text>
              <Switch
                thumbColor={
                  attendance.find(att => att.studentID === student?._id)
                    ?.status === 'present'
                    ? 'seagreen'
                    : 'red'
                }
                value={
                  attendance?.find(att => att.studentID === student?._id)
                    ?.status === 'present'
                }
                onValueChange={value =>
                  toggleAttendance(
                    student?._id,
                    value,
                    student.fullName,
                    student.email,
                  )
                }
              />
            </View>
          ))
        ) : (
          <>
            <Text>No Students fOUND</Text>
          </>
        )}
      </ScrollView>
      <Button
        title={isLoading ? 'Submitting...' : 'Submit Attendance'}
        onPress={handleSubmit}
        color={theme.background}
        disabled={isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: responsiveWidth(4), // 16
    backgroundColor: GHOST_WHITE,
  },
  title: {
    fontSize: responsiveFontSize(2.5), // 20
    fontWeight: 'bold',
    color: THEME_COLOR,
    marginBottom: responsiveHeight(2), // 16
  },
  scrollView: {
    marginBottom: responsiveHeight(2), // 16
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: responsiveHeight(2.5), // 10
    paddingHorizontal: responsiveWidth(1), // 2
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  studentName: {
    fontSize: responsiveFontSize(1.9), // 15
    color: THEME_COLOR,
    fontWeight: '500',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(2), // 16
    paddingHorizontal: responsiveWidth(1), // 2
    height: responsiveHeight(3), // 20
  },
  dateText: {
    fontSize: responsiveFontSize(2), // 16
    color: THEME_COLOR,
    fontWeight: '900',
  },
  classText: {
    fontSize: responsiveFontSize(2), // 16
    color: THEME_COLOR,
    fontWeight: '900',
  },
});

export default TakeAttendance;
