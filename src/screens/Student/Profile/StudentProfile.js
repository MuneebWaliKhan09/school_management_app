import React from 'react';
import {Image, ScrollView, StyleSheet} from 'react-native';
import {Avatar, Card, List, Divider} from 'react-native-paper';
import {GHOST_WHITE, Half_gray, WHITE_BG} from '../../../strings/Colors';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const StudentProfile = ({studentData}) => {
  const student = studentData ? studentData : null;
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          style={styles.cardTitle}
          title={
            student.fullName[0].toUpperCase() +
            student.fullName.substr(1, student.fullName.length)
          }
          titleStyle={styles.title}
          subtitle={"St, " + student?.className?.className.toLowerCase()}
          subtitleStyle={styles.subtitle}
          left={() => (
            <Avatar.Image
              size={responsiveWidth(20)}
              source={{
                uri:
                  student.avatar ||
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
              description={student.email}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/email.png')}
                />
              )}
            />
            <List.Item
              title="Phone"
              description={student.phone}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/smartphone.png')}
                />
              )}
            />
            <List.Item
              title="Address"
              description={student.address}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/placeholder.png')}
                />
              )}
            />
            <List.Item
              title="DOB"
              description={new Date(student.DOB).toDateString()}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/birthday.png')}
                />
              )}
            />
            <List.Item
              title="Gender"
              description={student.gender}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/gender-equality.png')}
                />
              )}
            />
            <List.Item
              title="Blood Group"
              description={student.bloodGroup}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/blood-group.png')}
                />
              )}
            />
            <List.Item
              title="Father's Name"
              description={student.fatherName}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/man.png')}
                />
              )}
            />
            <List.Item
              title="Age"
              description={student.age}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/age.png')}
                />
              )}
            />
          </List.Section>

          <List.Section>
            <List.Subheader>Professional Information</List.Subheader>
            <Divider />
            <List.Item
              title="Joining Date"
              description={new Date(student.joiningDate).toDateString()}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/add-event.png')}
                />
              )}
            />
            <List.Item
              title="Admission Class"
              description={student.admissionClass}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/teachings.png')}
                />
              )}
            />
            <List.Item
              title="Roll Number"
              description={student.rollNo}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/id-card.png')}
                />
              )}
            />
            <List.Item
              title="Monthly Fee"
              description={`$${student.monthlyFee}`}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/money.png')}
                />
              )}
            />
            <List.Item
              title="Lab Fee"
              description={`$${student.labFee}`}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/money.png')}
                />
              )}
            />
            <List.Item
              title="Security Fee"
              description={`$${student.securityFee}`}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/money.png')}
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
    lineHeight: responsiveHeight(1.7),
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
