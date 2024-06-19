import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"

const Stack = createStackNavigator()

const MainNavigator = () => {
  return (
    <View>
      <Text>MainNavigator</Text>
    </View>
  )
}

export default MainNavigator