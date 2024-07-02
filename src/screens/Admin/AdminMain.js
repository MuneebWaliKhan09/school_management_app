import React, {useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Animated,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {Text, Card} from 'react-native-paper';
import {
  GHOST_WHITE,
  Half_WHITE,
  THEME_COLOR,
  WHITE_BG,
} from '../../strings/Colors';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useIsFocused, useNavigation} from '@react-navigation/native';

// Import images statically
import adminIcon from '../../images/icons/admin2.png';
import attendanceIcon from '../../images/icons/attendance.png';
import classesIcon from '../../images/icons/classes.png';
import resultsIcon from '../../images/icons/results.png';
import studentsIcon from '../../images/icons/students.png';
import teacherIcon from '../../images/icons/teacher.png';
import usersIcon from '../../images/icons/users.png';
import subjectsIcon from '../../images/icons/subjects.png';
import {useSelector} from 'react-redux';

const AdminMain = () => {
  const theme = useSelector(state => state.themeAdmin);

  const nav = useNavigation();
  const isFocused = useIsFocused();
  const animations = {
    welcomeText: useRef(new Animated.Value(0)).current,
    avatar: useRef(new Animated.Value(0)).current,
    cards: useRef(Array.from({length: 7}, () => new Animated.Value(0))).current,
  };

  useEffect(() => {
    if (isFocused) {
      // Sequential animation for welcome text and avatar
      Animated.sequence([
        Animated.timing(animations.welcomeText, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(animations.avatar, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();

      // Staggered animation for cards
      const cardAnimationSequence = animations.cards.map(anim =>
        Animated.timing(anim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      );
      Animated.stagger(100, cardAnimationSequence).start();
    } else {
      // Reset animations
      animations.welcomeText.setValue(0);
      animations.avatar.setValue(0);
      animations.cards.forEach(anim => anim.setValue(0));
    }
  }, [isFocused]);

  const handlePress = item => {
    switch (item) {
      case 'Attendances':
        nav.navigate('AdminAttendance');
        break;
      case 'All Classes':
        nav.navigate('AdminClasses');
        break;
      case 'Results':
        nav.navigate('AdminResults');
        break;
      case 'All Students':
        nav.navigate('AdminStack', {screen: 'AdminStudents'});
        break;
      case 'All Teachers':
        nav.navigate('AdminTeachers');
        break;
      case 'All Users':
        nav.navigate('AdminUsers');
        break;
      case 'All Subjects':
        nav.navigate('AdminSubjects');
        break;
      default:
        break;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={theme.background}
      />
      <SafeAreaView>
        {/* Top Section */}
        <View style={[styles.topSection, {backgroundColor: theme.background}]}>
          <TouchableOpacity onPress={() => nav.openDrawer()}>
            <Image
              style={styles.headerIcons}
              source={require('../../images/icons/menu.png')}
            />
          </TouchableOpacity>

          {/* avatar and welcome */}
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Animated.Image
              source={adminIcon}
              style={[
                styles.avatar,
                {
                  transform: [
                    {
                      translateX: animations.avatar.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-100, 0], // Start off-screen left, move to default position
                      }),
                    },
                  ],
                  opacity: animations.avatar,
                },
              ]}
            />
            <Animated.View
              style={[
                styles.welcomeMessage,
                {
                  transform: [
                    {
                      translateX: animations.welcomeText.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-100, 0], // Start off-screen left, move to default position
                      }),
                    },
                  ],
                  opacity: animations.welcomeText,
                },
              ]}>
              <Text style={styles.welcomeText}>Welcome Admin 👋</Text>
            </Animated.View>
          </View>

          <TouchableOpacity>
            <Image
              style={styles.headerIcons}
              source={require('../../images/icons/bell.png')}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.heading}>Academics</Text>
        <View style={styles.grid}>
          {[
            {name: 'Attendances', source: attendanceIcon},
            {name: 'All Classes', source: classesIcon},
            {name: 'Results', source: resultsIcon},
            {name: 'All Students', source: studentsIcon},
            {name: 'All Teachers', source: teacherIcon},
            {name: 'All Users', source: usersIcon},
            {name: 'All Subjects', source: subjectsIcon},
          ].map((item, index) => (
            <Animated.View
              key={index}
              style={{opacity: animations.cards[index]}}>
              <Card
                key={index}
                style={[styles.card, {backgroundColor: theme.background}]}>
                <Card.Content>
                  <TouchableOpacity
                    style={styles.cardContent}
                    onPress={() => handlePress(item?.name)}>
                    <Image source={item.source} style={styles.cardIcons} />
                    <Text style={styles.cardText}>{item.name}</Text>
                  </TouchableOpacity>
                </Card.Content>
              </Card>
            </Animated.View>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_BG,
  },
  topSection: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: responsiveHeight(4),
    paddingTop: 0,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: THEME_COLOR,
    borderBottomLeftRadius: responsiveHeight(6.28),
    borderBottomRightRadius: responsiveHeight(6.28),
    marginBottom: responsiveHeight(2),
  },
  headerIcons: {
    width: responsiveWidth(8),
    height: responsiveHeight(4),
    tintColor: GHOST_WHITE,
    marginTop: 15,
  },
  heading: {
    fontSize: responsiveFontSize(2.8),
    fontWeight: 'bold',
    marginLeft: 22,
    marginTop: 20,
  },
  avatar: {
    tintColor: GHOST_WHITE,
    marginBottom: responsiveHeight(1.25),
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    resizeMode: 'cover',
    marginTop: 20,
  },
  welcomeText: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    marginBottom: responsiveHeight(1.25),
    textAlign: 'center',
    color: 'white',
    marginTop: responsiveHeight(2),
  },
  welcomeMessage: {
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: responsiveWidth(2.5),
  },
  card: {
    width: responsiveWidth(42),
    marginVertical: responsiveHeight(1.25),
    backgroundColor: THEME_COLOR,
  },
  cardContent: {
    alignItems: 'center',
  },
  cardText: {
    marginTop: responsiveHeight(1.25),
    fontSize: responsiveFontSize(1.8), // Adjusted fontSize for responsive design
    fontWeight: 'bold',
    textAlign: 'center',
    color: GHOST_WHITE,
  },
  cardIcons: {
    width: responsiveWidth(9),
    height: responsiveWidth(9),
    tintColor: Half_WHITE,
  },
});

export default AdminMain;
