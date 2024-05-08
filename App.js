import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomTI from './src/components/CustomTI'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import Dashboard from './src/screens/Dashboard';
import AddNew from './src/screens/AddNew';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Individual from './src/screens/Individual';
import ForgetPW from './src/screens/ForgetPW';
const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Dashboard' >
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='Dashboard' component={Dashboard}/>
        <Stack.Screen name='AddNew' component={AddNew}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='Individual' component={Individual}/>
        <Stack.Screen name='ForgetPW' component={ForgetPW}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})