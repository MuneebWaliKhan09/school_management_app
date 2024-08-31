// import React from 'react';
// import {View, StyleSheet, ActivityIndicator} from 'react-native';
// import {Card, Text, Avatar, Title, Paragraph} from 'react-native-paper';
// import {useGetTodayAttendaceQuery} from '../../../store/features/teacherFeatures';
// import {THEME_COLOR, GHOST_WHITE, Half_WHITE} from '../../../strings/Colors';
// import ErrorCustom from '../../../Error/ErrorCustom';

// const dummyTodayAttendance = [
//   {
//     studentName: 'Ali Khan',
//     studentEmail: 'alikhan@gmail.com',
//     AttClass: 'CLASS 2',
//     date: '2024-03-22T05:40:02.146+00:00',
//     status: 'present',
//     markedBy: 'Naseeb Khan',
//   },
//   {
//     studentName: 'Sara Ahmed',
//     studentEmail: 'saraahmed@gmail.com',
//     AttClass: 'CLASS 2',
//     date: '2024-03-22T05:40:02.146+00:00',
//     status: 'absent',
//     markedBy: 'Naseeb Khan',
//   },
//   {
//     studentName: 'Umar Farooq',
//     studentEmail: 'umarfarooq@gmail.com',
//     AttClass: 'CLASS 2',
//     date: '2024-03-22T05:40:02.146+00:00',
//     status: 'present',
//     markedBy: 'Naseeb Khan',
//   },
//   {
//     studentName: 'Aisha Ali',
//     studentEmail: 'aishaali@gmail.com',
//     AttClass: 'CLASS 2',
//     date: '2024-03-22T05:40:02.146+00:00',
//     status: 'present',
//     markedBy: 'Naseeb Khan',
//   },
//   {
//     studentName: 'Zainab Bibi',
//     studentEmail: 'zainabbibi@gmail.com',
//     AttClass: 'CLASS 2',
//     date: '2024-03-22T05:40:02.146+00:00',
//     status: 'absent',
//     markedBy: 'Naseeb Khan',
//   },
//   {
//     studentName: 'Hassan Ali',
//     studentEmail: 'hassanal@gmail.com',
//     AttClass: 'CLASS 2',
//     date: '2024-03-22T05:40:02.146+00:00',
//     status: 'present',
//     markedBy: 'Naseeb Khan',
//   },
//   {
//     studentName: 'Fatima Noor',
//     studentEmail: 'fatimanoor@gmail.com',
//     AttClass: 'CLASS 2',
//     date: '2024-03-22T05:40:02.146+00:00',
//     status: 'present',
//     markedBy: 'Naseeb Khan',
//   },
//   {
//     studentName: 'Bilal Khan',
//     studentEmail: 'bilalkhan@gmail.com',
//     AttClass: 'CLASS 2',
//     date: '2024-03-22T05:40:02.146+00:00',
//     status: 'present',
//     markedBy: 'Naseeb Khan',
//   },
//   {
//     studentName: 'Rabia Sheikh',
//     studentEmail: 'rabiasheikh@gmail.com',
//     AttClass: 'CLASS 2',
//     date: '2024-03-22T05:40:02.146+00:00',
//     status: 'absent',
//     markedBy: 'Naseeb Khan',
//   },
//   {
//     studentName: 'Ahmed Shah',
//     studentEmail: 'ahmedshah@gmail.com',
//     AttClass: 'CLASS 2',
//     date: '2024-03-22T05:40:02.146+00:00',
//     status: 'present',
//     markedBy: 'Naseeb Khan',
//   },
// ];


// const Attendance = () => {
//   const {
//     data: todayAttendance,
//     isLoading,
//   } = useGetTodayAttendaceQuery();
//   console.log('attendance', todayAttendance);

//   if (isLoading) {
//     return (
//       <View style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color={THEME_COLOR} />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       {dummyTodayAttendance && dummyTodayAttendance?.length > 0 ? (
//         dummyTodayAttendance.map((attendance, index) => (
//           <Card key={index} style={styles.card}>
//             <Card.Content>
//               <View style={styles.cardHeader}>
//                 <Avatar.Text
//                   size={40}
//                   label={attendance.studentName.charAt(0)}
//                 />
//                 <Title style={styles.cardTitle}>{attendance.studentName}</Title>
//               </View>
//               <Paragraph style={styles.paragraph}>
//                 Email: {attendance.studentEmail}
//               </Paragraph>
//               <Paragraph style={styles.paragraph}>
//                 Class: {attendance.AttClass}
//               </Paragraph>
//               <Paragraph style={styles.paragraph}>
//                 Date: {new Date(attendance.date).toLocaleDateString()}
//               </Paragraph>
//               <Paragraph style={styles.paragraph}>
//                 Status: {attendance.status}
//               </Paragraph>
//               <Paragraph style={styles.paragraph}>
//                 Marked By: {attendance.markedBy}
//               </Paragraph>
//             </Card.Content>
//           </Card>
//         ))
//       ) : (
//         <ErrorCustom message={"Attendance Not Taken Today !"}/>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: GHOST_WHITE,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: THEME_COLOR,
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.7)', // White with 70% opacity
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
//   errorContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   errorText: {
//     fontSize: 16,
//     color: 'red',
//   },
//   card: {
//     marginBottom: 16,
//     backgroundColor: Half_WHITE,
//     borderRadius: 10,
//     padding: 10,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginLeft: 10,
//     color: THEME_COLOR,
//   },
//   paragraph: {
//     fontSize: 14,
//     color: THEME_COLOR,
//   },
// });

// export default Attendance;


import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { DataTable } from 'react-native-paper';
import { useGetTodayAttendaceQuery } from '../../../store/features/teacherFeatures';
import { THEME_COLOR, GHOST_WHITE, Half_WHITE } from '../../../strings/Colors';

const dummyTodayAttendance = [
  {
    studentName: 'Ali Khan',
    studentEmail: 'alikhan@gmail.com',
    AttClass: 'CLASS 2',
    date: '2024-03-22T05:40:02.146+00:00',
    status: 'present',
    markedBy: 'Naseeb Khan',
  },
  {
    studentName: 'Sara Ahmed',
    studentEmail: 'saraahmed@gmail.com',
    AttClass: 'CLASS 2',
    date: '2024-03-22T05:40:02.146+00:00',
    status: 'absent',
    markedBy: 'Naseeb Khan',
  },
  {
    studentName: 'Umar Farooq',
    studentEmail: 'umarfarooq@gmail.com',
    AttClass: 'CLASS 2',
    date: '2024-03-22T05:40:02.146+00:00',
    status: 'present',
    markedBy: 'Naseeb Khan',
  },
  {
    studentName: 'Aisha Ali',
    studentEmail: 'aishaali@gmail.com',
    AttClass: 'CLASS 2',
    date: '2024-03-22T05:40:02.146+00:00',
    status: 'present',
    markedBy: 'Naseeb Khan',
  },
  {
    studentName: 'Zainab Bibi',
    studentEmail: 'zainabbibi@gmail.com',
    AttClass: 'CLASS 2',
    date: '2024-03-22T05:40:02.146+00:00',
    status: 'absent',
    markedBy: 'Naseeb Khan',
  },
  {
    studentName: 'Hassan Ali',
    studentEmail: 'hassanal@gmail.com',
    AttClass: 'CLASS 2',
    date: '2024-03-22T05:40:02.146+00:00',
    status: 'present',
    markedBy: 'Naseeb Khan',
  },
  {
    studentName: 'Fatima Noor',
    studentEmail: 'fatimanoor@gmail.com',
    AttClass: 'CLASS 2',
    date: '2024-03-22T05:40:02.146+00:00',
    status: 'present',
    markedBy: 'Naseeb Khan',
  },
  {
    studentName: 'Bilal Khan',
    studentEmail: 'bilalkhan@gmail.com',
    AttClass: 'CLASS 2',
    date: '2024-03-22T05:40:02.146+00:00',
    status: 'present',
    markedBy: 'Naseeb Khan',
  },
  {
    studentName: 'Rabia Sheikh',
    studentEmail: 'rabiasheikh@gmail.com',
    AttClass: 'CLASS 2',
    date: '2024-03-22T05:40:02.146+00:00',
    status: 'absent',
    markedBy: 'Naseeb Khan',
  },
  {
    studentName: 'Ahmed Shah',
    studentEmail: 'ahmedshah@gmail.com',
    AttClass: 'CLASS 2',
    date: '2024-03-22T05:40:02.146+00:00',
    status: 'present',
    markedBy: 'Naseeb Khan',
  },
];


const Attendance = () => {
  const { data: todayAttendance, isLoading } = useGetTodayAttendaceQuery();
  console.log('attendance', todayAttendance);

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={THEME_COLOR} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Attendance</Text>
      {dummyTodayAttendance && dummyTodayAttendance.length > 0 ? (
        <DataTable>
          <DataTable.Header style={styles.tableHeader}>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title>Email</DataTable.Title>
            <DataTable.Title>Class</DataTable.Title>
            <DataTable.Title>Date</DataTable.Title>
            <DataTable.Title>Status</DataTable.Title>
          </DataTable.Header>

          {dummyTodayAttendance.map((attendance, index) => (
            <DataTable.Row key={index}>
              <DataTable.Cell>{attendance.studentName}</DataTable.Cell>
              <DataTable.Cell>{attendance.studentEmail}</DataTable.Cell>
              <DataTable.Cell>{attendance.AttClass}</DataTable.Cell>
              <DataTable.Cell>{new Date(attendance.date).toLocaleDateString()}</DataTable.Cell>
              <DataTable.Cell style={{
                color: attendance.status === 'present' ? 'green' : 'red',
                fontWeight: 'bold',
              }}>
                {attendance.status}
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      ) : (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Attendance Not Taken Today!</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: GHOST_WHITE,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: THEME_COLOR,
    marginBottom: 16,
    textAlign: 'center',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // White with 70% opacity
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  tableHeader: {
    backgroundColor: Half_WHITE,
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
