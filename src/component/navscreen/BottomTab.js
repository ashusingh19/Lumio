import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screen/Home'
import Chat from '../screen/Chat'
import Profile from '../screen/Profile'
import Search from '../screen/Search'
import Foundation from "react-native-vector-icons/Foundation"
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Reels from '../screen/Reels'



const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    
            <Tab.Navigator initialRouteName='Home' options={{headerShown:false ,}} screenOptions={({route}) =>({
              headerShown:false,
              tabBarShowLabel:false,
              tabBarStyle:{
               backgroundColor:"black"
              },
              tabBarActiveTintColor:"white",
              tabBarInactiveTintColor:"white",
              tabBarIcon:({color})=>{
                let Icon;
                if(route.name === "Home"){
                  Icon= <Foundation name="home" size={30} color={color}/>;
                }else if(route.name === "Search"){
                  Icon= <FontAwesome name ="search" size={30} color={color}/>
                // }else if(route.name === "Chat"){
                //   Icon= <Feather name ="send" size={30} color={color}/>
                }else if(route.name === "Reels"){
                  Icon= <FontAwesome name ="file-movie-o" size={30} color={color}/>
                }else if(route.name === "Profile"){
                  Icon= <FontAwesome name ="user" size={30} color={color}/>
                }
                return Icon;
              },

            })} >
                <Tab.Screen name='Home' component={Home} options={{headerShown:false}}/>
                <Tab.Screen name='Search' component={Search} options={{headerShown:false}}/>
                {/* <Tab.Screen name='Chat' component={Chat} options={{headerShown:false}}/>  */}
                <Tab.Screen name='Reels' component={Reels} options={{headerShown:false}}/>
                <Tab.Screen name='Profile' component={Profile} options={{headerShown:false}}/>
            </Tab.Navigator>
    
    
  )
}

export default BottomTab

const styles = StyleSheet.create({})
