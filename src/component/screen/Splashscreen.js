import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'




const Splashscreen = ({navigation}) => {

 useEffect(()=>{
  const timer = setTimeout (()=>{
   navigation.replace("Login")
  }, 5000)
  return ()=> clearInterval(timer)
},[navigation])
  return (
   <View style={{flex:1 ,alignItems:"center",paddingTop:200}} >
    <Image style={{width:300,height:350,}} source={require('../../assets/image/lumiocut.png')}/>
    {/* <Text style={{color:"black",fontSize:56}}>Lumio</Text>
    <Text style={{color:"grey",fontSize:23}}>CONNECT & SHARE</Text> */}
    
   </View>
  )
}

export default Splashscreen

const styles = StyleSheet.create({})