import React from 'react';
import {Image, ScrollView, StyleSheet} from 'react-native';
import {Avatar, Card, List, Divider, Text} from 'react-native-paper';
import {GHOST_WHITE, Half_gray, THEME_COLOR, THEME_COLOR2, WHITE_BG} from '../../../strings/Colors';
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
            <Text style={styles.title}>
              {student?.fullName[0].toUpperCase() +
                student?.fullName.substr(1, student?.fullName.length)}
            </Text>
          }
          titleStyle={styles.title}
          subtitle={
            <Text style={styles.subtitle}>
              {'St, ' + student?.className?.className.toLowerCase()}
            </Text>
          }
          subtitleStyle={styles.subtitle}
          left={() => (
            <Avatar.Image
              size={responsiveWidth(20)}
              source={
                student?.avatar
                  ? {uri: student?.avatar}
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
              description={student?.email}
              descriptionStyle={styles.descriptionStyle}
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
              description={student?.phone}
              descriptionStyle={styles.descriptionStyle}
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
              description={student?.address}
              descriptionStyle={styles.descriptionStyle}
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
              description={new Date(student?.DOB).toDateString()}
              descriptionStyle={styles.descriptionStyle}
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
              description={student?.gender}
              descriptionStyle={styles.descriptionStyle}
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
              description={student?.bloodGroup}
              descriptionStyle={styles.descriptionStyle}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/blood-group.png')}
                />
              )}
            />
            <List.Item
              title="Father's Name"
              titleStyle={styles.titleStyle}
              description={student?.fatherName}
              descriptionStyle={styles.descriptionStyle}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/man.png')}
                />
              )}
            />
            <List.Item
              title="Age"
              titleStyle={styles.titleStyle}
              description={student?.age}
              descriptionStyle={styles.descriptionStyle}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/age.png')}
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
              description={new Date(student?.joiningDate).toDateString()}
              descriptionStyle={styles.descriptionStyle}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/add-event.png')}
                />
              )}
            />
            <List.Item
              title="Admission Class"
              titleStyle={styles.titleStyle}
              description={student?.admissionClass}
              descriptionStyle={styles.descriptionStyle}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/teachings.png')}
                />
              )}
            />
            <List.Item
              title="Roll Number"
              titleStyle={styles.titleStyle}
              description={student?.rollNo}
              descriptionStyle={styles.descriptionStyle}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/id-card.png')}
                />
              )}
            />
            <List.Item
              title="Monthly Fee"
              titleStyle={styles.titleStyle}
              description={`$${student?.monthlyFee}`}
              descriptionStyle={styles.descriptionStyle}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/money.png')}
                />
              )}
            />
            <List.Item
              title="Lab Fee"
              titleStyle={styles.titleStyle}
              description={`$${student?.labFee}`}
              descriptionStyle={styles.descriptionStyle}
              left={() => (
                <Image
                  style={styles.icon}
                  source={require('../../../images/icons/usericons/money.png')}
                />
              )}
            />
            <List.Item
              title="Security Fee"
              titleStyle={styles.titleStyle}
              description={`$${student?.securityFee}`}
              descriptionStyle={styles.descriptionStyle}
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
    fontWeight:"700"
  },
});

export default StudentProfile;
