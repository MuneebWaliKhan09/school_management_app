import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {
  useGetAllClassesQuery,
  useGetAttendanceByClassQuery,
} from '../../../store/features/adminFeatures';
import {ActivityIndicator} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {Dropdown} from 'react-native-element-dropdown';
import {Half_gray, Half_WHITE, THEME_COLOR} from '../../../strings/Colors';

const Attendances = () => {
  const theme = useSelector(state => state.themeAdmin);
  const [cls, setcls] = useState('');
  const {data: classes, isLoading: clsLoading} = useGetAllClassesQuery();
  const lowerCaseClass = cls?.toLowerCase();
  const {data: clsAttendance, isLoading: clsAttendanceLoading} =
    useGetAttendanceByClassQuery(lowerCaseClass);

  if (clsLoading || clsAttendanceLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator
          color={theme.background}
          size="large"
          animating={true}
        />
      </View>
    );
  }
  // console.log('classes', classes?.data);
  console.log('attendance', clsAttendance);

  return (
    <View>
      <View style={{marginBottom: 40, width: '80%'}}>
        <Dropdown
          value={cls}
          onChange={item => {
            setcls(item?.className);
          }}
          containerStyle={{borderRadius: 10, backgroundColor: theme.background}}
          itemContainerStyle={{backgroundColor: theme.background}}
          itemTextStyle={{color: Half_WHITE}}
          inputSearchStyle={{
            borderRadius: 10,
            backgroundColor: theme.background,
          }}
          searchPlaceholder="Search..."
          iconColor={theme.background}
          activeColor={THEME_COLOR}
          itemColor={Half_gray}
          labelField="className"
          valueField="className"
          searchable={true}
          dropdownPosition="bottom"
          placeholder="Select Class"
          style={{width: '60%', alignSelf: 'center'}}
          placeholderStyle={{color: theme.background}}
          selectedTextStyle={{color: theme.background}}
          data={classes?.data}
        />
      </View>
      <View style={{padding: 10, flex: 1}}>
        <ScrollView>
          <View
            style={{
              padding: 5,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: theme.background,
            }}>

            </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Attendances;
