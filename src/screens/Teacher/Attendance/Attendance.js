import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {useGetTodayAttendaceQuery} from '../../../store/features/teacherFeatures';
import {
  THEME_COLOR,
  WHITE_BG,
  THEME_COLOR2,
  Half_gray,
} from '../../../strings/Colors';
import NotFound from '../../../Error/NotFound';
import Loader from '../../../Loaders/Loader';
import {RefreshControl} from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useSelector } from 'react-redux';

const Attendance = () => {
  const theme = useSelector(state => state.themeTeacher);
  const {
    data: todayAttendance,
    isLoading,
    isFetching,
    refetch,
  } = useGetTodayAttendaceQuery();
  const [classinfo, setclassinfo] = useState('');

  useEffect(() => {
    if (todayAttendance && todayAttendance.data) {
      const classIn = [
        ...new Set(todayAttendance?.data?.map(cls => cls.AttClass)),
      ];
      const uniqueCls = classIn.join(',');
      setclassinfo(uniqueCls);
    }
  }, [todayAttendance]);

  const onRefresh = useCallback(() => {
    refetch();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
      }>
      <View style={styles.headerContainer}>
        <Text style={[styles.dateText]}>
          Date:{' '}
          {new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </Text>
        <Text style={[styles.classText]}>{classinfo}</Text>
      </View>
      {todayAttendance && todayAttendance.data?.length > 0 ? (
        todayAttendance?.data?.map((item, index) => (
          <ScrollView
            key={index}
            contentContainerStyle={styles.scrollViewContainer}
            showsVerticalScrollIndicator={false}>
            <View style={styles.row}>
              <Text style={[styles.name, {color:theme.background}]}>
                {item?.studentName[0]?.toUpperCase() +
                  item?.studentName?.slice(1)}
              </Text>
              <Text
                style={[
                  styles.status,
                  item.status === 'present' ? styles.present : styles.absent,
                ]}>
                {item.status[0].toUpperCase() + item.status.slice(1)}
              </Text>
            </View>
          </ScrollView>
        ))
      ) : (
        <View style={{alignSelf: 'center'}}>
          <NotFound message={'Attendance Not Taken Today !'} />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: responsiveWidth(4), // 16
    backgroundColor: WHITE_BG,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(6), // 30
    paddingHorizontal: responsiveWidth(1), // 2
    height: responsiveHeight(3), // 20
  },
  dateText: {
    fontSize: responsiveFontSize(2), // 16
    color: THEME_COLOR2,
    fontWeight: '700',
  },
  classText: {
    fontSize: responsiveFontSize(2), // 16
    color: THEME_COLOR2,
    fontWeight: '700',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // White with 70% opacity
  },
  scrollViewContainer: {
    paddingBottom: responsiveHeight(5), // 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Ensures text alignment vertically centered
    paddingBottom: responsiveHeight(1), // 10
    borderBottomWidth: 0.5,
    paddingHorizontal: responsiveWidth(1), // 2
    borderBottomColor: Half_gray,
  },
  name: {
    flex: 1, // Allows name to occupy remaining space
    fontSize: responsiveFontSize(1.9), // 15
    color: THEME_COLOR2,
    fontWeight: '600',
  },
  status: {
    width: responsiveWidth(15), // 60
    textAlign: 'center',
    fontSize: responsiveFontSize(1.8), // 14
    fontWeight: '600',
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
    fontSize: responsiveFontSize(2), // 16
    color: 'red',
  },
});

export default Attendance;
