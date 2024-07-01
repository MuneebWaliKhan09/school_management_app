import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Card, List, Divider, Text} from 'react-native-paper';
import {GHOST_WHITE, Half_gray, THEME_COLOR, THEME_COLOR2, WHITE_BG} from '../../../strings/Colors';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const TeacherProfile = ({teacherData, loadingTeacherData}) => {
  const teacher = teacherData?.[0];
  const teacherOfClass = teacherData?.[1];

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          style={styles.cardTitle}
          title={
            <Text style={styles.title}>
              {teacher?.fullName[0].toUpperCase() +
                teacher?.fullName.substr(1, teacher?.fullName.length)}
            </Text>
          }
          subtitle={
            <Text style={styles.subtitle}>
              {teacher?.designation + ' , ' + teacherOfClass?.toLowerCase()}
            </Text>
          }
          left={() => (
            <Image
              style={styles.avatar}
              source={
                teacher?.avatar
                  ? {uri: teacher.avatar}
                  : require('../../../images/icons/profile.png')
              }
            />
          )}
        />
        <Card.Content style={styles.cardContent}>
          <List.Section>
            <List.Subheader style={{color:THEME_COLOR}}>Personal Information</List.Subheader>
            <Divider />
            <List.Item
              title="Email"
              titleStyle={styles.titleStyle}
              descriptionStyle={styles.descriptionStyle}
              description={teacher?.email}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/email.png')}
                />
              )}
            />
            <List.Item
              title="Phone"
              titleStyle={styles.titleStyle}
              descriptionStyle={styles.descriptionStyle}
              description={teacher?.phone}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/smartphone.png')}
                />
              )}
            />
            <List.Item
              title="Address"
              titleStyle={styles.titleStyle}
              descriptionStyle={styles.descriptionStyle}
              description={teacher?.address}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/placeholder.png')}
                />
              )}
            />
            <List.Item
              title="DOB"
              titleStyle={styles.titleStyle}
              descriptionStyle={styles.descriptionStyle}
              description={new Date(teacher?.DOB).toDateString()}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/birthday.png')}
                />
              )}
            />
            <List.Item
              title="Gender"
              titleStyle={styles.titleStyle}
              descriptionStyle={styles.descriptionStyle}
              description={teacher?.gender}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/gender-equality.png')}
                />
              )}
            />
            <List.Item
              title="Blood Group"
              titleStyle={styles.titleStyle}
              descriptionStyle={styles.descriptionStyle}
              description={teacher?.bloodGroup}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/blood-group.png')}
                />
              )}
            />
          </List.Section>

          <List.Section>
            <List.Subheader style={{color:THEME_COLOR}}>Professional Information</List.Subheader>
            <Divider />
            <List.Item
              title="Joining Date"
              titleStyle={styles.titleStyle}
              descriptionStyle={styles.descriptionStyle}
              description={new Date(teacher?.joiningDate).toDateString()}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/add-event.png')}
                />
              )}
            />
            <List.Item
              title="Leaving Date"
              titleStyle={styles.titleStyle}
              descriptionStyle={styles.descriptionStyle}
              description={new Date(teacher?.leavingDate).toDateString()}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/leave.png')}
                />
              )}
            />
            <List.Item
              title="Status"
              titleStyle={styles.titleStyle}
              descriptionStyle={styles.descriptionStyle}
              description={teacher?.status}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/check-list.png')}
                />
              )}
            />
            <List.Item
              title="Subject"
              titleStyle={styles.titleStyle}
              descriptionStyle={styles.descriptionStyle}
              description={teacher?.subject}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/books.png')}
                />
              )}
            />
            <List.Item
              title="Classes Taught"
              titleStyle={styles.titleStyle}
              descriptionStyle={styles.descriptionStyle}
              description={teacher?.classesTaught
                ?.map(cls => cls?.className)
                .join(', ')}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/teachings.png')}
                />
              )}
            />
            <List.Item
              title="Salary"
              titleStyle={styles.titleStyle}
              descriptionStyle={styles.descriptionStyle}
              description={`$${teacher?.sallary}`}
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
  avatar: {
    width: responsiveWidth(19),
    height: responsiveWidth(19),
    borderRadius: responsiveWidth(19),
    resizeMode: 'cover',
  },
  cardTitle: {
    marginBottom: responsiveHeight(1.5),
  },
  title: {
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(1.5),
    fontSize: responsiveFontSize(2.2),
    fontWeight: '700',
    color: THEME_COLOR,
  },
  titleStyle:{
    color:THEME_COLOR,
    fontWeight:"700",
    opacity:.9
  },
  descriptionStyle:{
    color:THEME_COLOR2
  },
  subtitle: {
    marginLeft: responsiveWidth(10),
    lineHeight: responsiveHeight(1.8),
    fontSize: responsiveFontSize(1.6),
    fontWeight: '600',
    color: THEME_COLOR2,
  },
  cardContent: {
    backgroundColor: WHITE_BG,
  },
  icon: {
    width: responsiveWidth(7),
    height: responsiveHeight(3.5),
    tintColor: THEME_COLOR,
    resizeMode: 'cover',
  },
});

export default TeacherProfile;
