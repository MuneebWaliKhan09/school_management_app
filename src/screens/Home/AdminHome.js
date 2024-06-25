import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import AdminMain from '../Admin/AdminMain'
import AdminDrawer from '../../components/AdminDrawer/AdminDrawer'
import Profile from '../Admin/Porfile/Profile'

const Drawer = createDrawerNavigator()

const AdminHome = () => {
  return (
      <Drawer.Navigator drawerContent={(props)=> <AdminDrawer {...props}/>}>
        <Drawer.Screen name='Dash-board' options={{headerShown:false}} component={AdminMain} />
        <Drawer.Screen name='Profile' options={{headerShown:false}} component={Profile} />
      </Drawer.Navigator>
  )
}

export default AdminHome