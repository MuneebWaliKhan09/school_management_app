import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

const StudentsDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Student'/>
    </Drawer.Navigator>
  )
}

export default StudentsDrawer