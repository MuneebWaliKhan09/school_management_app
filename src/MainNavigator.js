import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import Splash from './screens/onBoarding/Splash'
import Login from './screens/onBoarding/Login'
import { NavigationContainer } from '@react-navigation/native'
import Welcome from './screens/Welcome'

const Stack = createStackNavigator()

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" options={{headerShown:false}} component={Splash} />
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
        <Stack.Screen name="Welcome" options={{headerShown:false}} component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator