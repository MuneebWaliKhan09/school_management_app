import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useGetAllClassesQuery, useGetAttendanceByClassQuery } from '../../../store/features/adminFeatures'

const Attendances = () => {
  const [cls, setcls] = useState(null)
  const {data: classes, isLoading: clsLoading} = useGetAllClassesQuery()
  const {data: clsAttendance, isLoading: clsAttendanceLoading} = useGetAttendanceByClassQuery(cls)

  console.log("classes",classes?.data);
  console.log("attendance",cls);
  
  return (
    <View>
      <Text>Attendances</Text>
    </View>
  )
}

export default Attendances