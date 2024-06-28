import React from 'react';
import {Image, ScrollView, StyleSheet} from 'react-native';
import {Avatar, Card, List, Divider} from 'react-native-paper';
import {GHOST_WHITE, Half_gray, WHITE_BG} from '../../../strings/Colors';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const StudentProfile = ({teacherData}) => {
  const teacher = teacherData?.[0];
  const teacherOfClass = teacherData?.[1];

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          style={styles.cardTitle}
          title={
            teacher.fullName[0].toUpperCase() +
            teacher.fullName.substr(1, teacher.fullName.length)
          }
          titleStyle={styles.title}
          subtitle={teacher.designation + " , " + teacherOfClass.toLowerCase()}
          subtitleStyle={styles.subtitle}
          left={() => (
            <Avatar.Image
              size={responsiveWidth(20)}
              source={{
                uri:
                  teacher.avatar ||
                  require('../../../images/icons/profile.png'),
              }}
            />
          )}
        />
        <Card.Content style={styles.cardContent}>
          <List.Section>
            <List.Subheader>Personal Information</List.Subheader>
            <Divider />
            <List.Item
              title="Email"
              description={teacher.email}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/email.png')}
                />
              )}
            />
            <List.Item
              title="Phone"
              description={teacher.phone}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/smartphone.png')}
                />
              )}
            />
            <List.Item
              title="Address"
              description={teacher.address}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/placeholder.png')}
                />
              )}
            />
            <List.Item
              title="DOB"
              description={new Date(teacher.DOB).toDateString()}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/birthday.png')}
                />
              )}
            />
            <List.Item
              title="Gender"
              description={teacher.gender}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/gender-equality.png')}
                />
              )}
            />
            <List.Item
              title="Blood Group"
              description={teacher.bloodGroup}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/blood-group.png')}
                />
              )}
            />
          </List.Section>

          <List.Section>
            <List.Subheader>Professional Information</List.Subheader>
            <Divider />
            <List.Item
              title="Joining Date"
              description={new Date(teacher.joiningDate).toDateString()}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/add-event.png')}
                />
              )}
            />
            <List.Item
              title="Leaving Date"
              description={new Date(teacher.leavingDate).toDateString()}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/leave.png')}
                />
              )}
            />
            <List.Item
              title="Status"
              description={teacher.status}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/check-list.png')}
                />
              )}
            />
            <List.Item
              title="Subject"
              description={teacher.subject}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/books.png')}
                />
              )}
            />
            <List.Item
              title="Classes Taught"
              description={teacher.classesTaught?.map((cls)=> cls?.className + ', ')}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/teachings.png')}
                />
              )}
            />
            <List.Item
              title="Salary"
              description={`$${teacher.sallary}`}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/payroll.png')}
                />
              )}
            />
          </List.Section>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_BG,
    padding: responsiveWidth(2.5),
    paddingTop: 0,
  },
  card: {
    marginVertical: 0,
    padding: responsiveWidth(2.5),
    paddingTop: responsiveHeight(3),
    borderRadius: 0,
    backgroundColor: WHITE_BG,
  },
  cardTitle: {
    marginBottom: responsiveHeight(1.5),
  },
  title: {
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(1.5),
    fontSize: responsiveFontSize(2.2),
    fontWeight: '700',
    color: Half_gray,
  },
  subtitle: {
    marginLeft: responsiveWidth(10),
    lineHeight: responsiveHeight(1.5),
    fontSize: responsiveFontSize(1.6),
    fontWeight: '600',
    color: Half_gray,
  },
  cardContent: {
    backgroundColor: WHITE_BG,
  },
  icon: {
    width: responsiveWidth(7),
    height: responsiveHeight(3.5),
    backgroundColor: GHOST_WHITE,
    resizeMode: 'cover',
  },
});

export default StudentProfile;
