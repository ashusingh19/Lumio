import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Splashscreen from '../screen/Splashscreen';
import Login from '../screen/Login';
import Signup from '../screen/Signup';
import Home from '../screen/Home';
import Forget from '../screen/Forget';
import Chat from '../screen/Chat';
import BottomTab from './BottomTab';
const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
   <SafeAreaProvider>
      <NavigationContainer >
        <Stack.Navigator initialRouteName='SplashScreen'  >
          <Stack.Screen name="SplashScreen" component={Splashscreen} options={{headerShown:false}}/>
          <Stack.Screen  name='Login' component={Login} options={{headerShown:false}}/>
          <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>
          <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
          <Stack.Screen name='Forget' component={Forget} options={{headerShown:false}}/>
          <Stack.Screen name='BottomTab' component={BottomTab} options={{headerShown:false}}/>
          <Stack.Screen name='Chat' component={Chat} options={{headerShown:false}}/>


        </Stack.Navigator>
      </NavigationContainer>
</SafeAreaProvider>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})