import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Switch, Button, ScrollView} from 'react-native';
import {
  useAllStudentsClassTeacherQuery,
  useTakeAttendanceMutation,
} from '../../../store/features/teacherFeatures';
import {THEME_COLOR, GHOST_WHITE} from '../../../strings/Colors';
import Loader from '../../../Loaders/Loader';
import { useToast } from '../../../context/ToastContext';
import { useNavigation } from '@react-navigation/native';

const dummyStudents = [
  {studentID: '1', studentName: 'Ali Khan', studentEmail: 'ali@example.com'},
  {studentID: '2', studentName: 'Sara Ahmed', studentEmail: 'sara@example.com'},
  {studentID: '3', studentName: 'John Doe', studentEmail: 'john@example.com'},
  {studentID: '4', studentName: 'Jane Smith', studentEmail: 'jane@example.com'},
  {
    studentID: '5',
    studentName: 'Michael Brown',
    studentEmail: 'michael@example.com',
  },
  {
    studentID: '6',
    studentName: 'Emily Davis',
    studentEmail: 'emily@example.com',
  },
  {
    studentID: '7',
    studentName: 'David Wilson',
    studentEmail: 'david@example.com',
  },
  {
    studentID: '8',
    studentName: 'Linda Johnson',
    studentEmail: 'linda@example.com',
  },
  {studentID: '9', studentName: 'Chris Lee', studentEmail: 'chris@example.com'},
  {
    studentID: '10',
    studentName: 'Patricia Kim',
    studentEmail: 'patricia@example.com',
  },
];

const TakeAttendance = () => {
    const {showToast} = useToast()
    const nav = useNavigation()
  const {data: allStudents, isLoading: isLoadingSt} = useAllStudentsClassTeacherQuery();
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
        const data = await TakeStudentAttendance(attendance)
        
     if(data?.error){
        showToast(data?.error?.data?.message)
     }
     else{
        showToast(data?.data?.message)
        nav.navigate("Attendance")
     }
    } catch (error) {
      console.error('Error taking attendance:', error);
    }
  };

  if(isLoadingSt){
    return <Loader/>
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
        {allStudents &&  allStudents?.data?.length > 0 ? (
           allStudents?.data?.[0].map((student, index) => (
            <View key={student._id} style={styles.row}>
              <Text style={styles.studentName}>{student.fullName}</Text>
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
          <Text>
            No Students fOUND
          </Text>
          </>
        )}
      </ScrollView>
      <Button
        title={isLoading ? 'Submitting...' : 'Submit Attendance'}
        onPress={handleSubmit}
        color={THEME_COLOR}
        disabled={isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: GHOST_WHITE,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME_COLOR,
    marginBottom: 16,
  },
  scrollView: {
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  studentName: {
    fontSize: 16,
    color: '#333',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 2,
    height: 20,
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
});

export default TakeAttendance;
