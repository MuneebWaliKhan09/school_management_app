import {View, Text} from 'react-native';
import React from 'react';
import {useTakeAttendanceMutation} from '../../../store/features/teacherFeatures';

const TakeAttendance = () => {
  const [TakeStudentAttendance, {isLoading}] = useTakeAttendanceMutation();

  
  return (
    <View>
      <Text>TakeAttendance</Text>
    </View>
  );
};

export default TakeAttendance;
