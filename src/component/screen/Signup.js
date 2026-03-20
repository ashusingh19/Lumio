import { SafeAreaView, StyleSheet, Text, TextInput, View ,TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import { scale } from 'react-native-size-matters'

const Signup = ({navigation}) => {
  const[showpassword,setshowpassword] = useState(false)
  const [form, setform] =useState({
    email:'',
    username:'',
    password:'',
    name:''
  })
  return (
    <SafeAreaView style={{flex:scale(1),backgroundColor:"#e6e8e8ff"}}>
      <KeyboardAvoidingView>
      <View>
      <Text style={{fontSize:scale(45),fontWeight:700,marginTop:scale(70),justifyContent:"center",textAlign:"center"}}>Instagram</Text>
      <Text style={{textAlign:"center",fontSize:scale(18),color:"grey"}}>Signup to see photos and videos from your friends</Text>
    </View>
    <TouchableOpacity>
          <View style={{flexDirection:"row",marginTop:scale(28),marginLeft:scale(58)}}>
            <Icon name="facebook" size={28} style={{color:"#00bfff"}}/>
            <Text style={{color:"#00bfff",fontSize:scale(20),fontWeight:"600",paddingLeft:15}}>Login with facebook</Text>
          </View>
        </TouchableOpacity>
         <Text style={{textAlign:"center",marginTop:25,fontSize:15,color:"grey",fontWeight:"600"}}>OR</Text>
    <View>
      <View>
        <TextInput style={styles.username}
        placeholder='Mobile number or email'
        autoCapitalize='none'
        autoCorrect={false}
        placeholderTextColor={"grey"}
        value={form.email}
        onChangeText={email =>setform ({... form,email})}
        />
      </View>
      <View>
        <TextInput 
         style={styles.username}
         placeholder='Full Name'
        autoCapitalize='none'
        autoCorrect={false}
        placeholderTextColor={"grey"}
        value={form.name}
        onChangeText={name =>setform ({... form,name})}
        />
      </View>
       <View>
        <TextInput 
         style={styles.username}
         placeholder='Username'
        autoCapitalize='none'
        autoCorrect={false}
        placeholderTextColor={"grey"}
        value={form.username}
        onChangeText={username =>setform ({... form,username})}
        />
      </View>
       <View style={{alignItems:"center",flexDirection:"row"}}>
        <TextInput 
         style={styles.username}
         placeholder='Password'
         secureTextEntry={!showpassword}
        placeholderTextColor={"grey"}
        value={form.password}
        onChangeText={password =>setform ({... form,password})}
        />
        <Icon 
              name = {showpassword? 'eye':'eye-with-line'}
              size={22}
               onPress={() => setshowpassword(!showpassword)}
                style={{ marginLeft: 10 ,position:"absolute",right:60,top:26}}
              />
      </View>
      <TouchableOpacity 
      onPress={( )=> navigation.navigate('BottomTab')}
      >
        
        <View style={{ marginTop:35,backgroundColor:"#00bfff",paddingVertical:10,paddingHorizontal:10,borderRadius:10,width:310,marginLeft:26}}>
        <Text style={{ textAlign:"center",color:"white",fontWeight:600,fontSize:20}}>Sign up</Text>
        </View>
      </TouchableOpacity>
      <Text style={{fontSize:17,marginTop:10,textAlign:"center",alignItems:"center",marginLeft:10,marginRight:5}}>By signing up,you agree with our Term ,Data Policy and Cookies Policy</Text>
    </View>
     <TouchableOpacity style={{marginTop:20,marginLeft:50}}
        onPress={() => navigation.navigate('Login')}
        >
         
          <Text style={{fontSize:20}}>have an account ? <Text style={{color:"#00bfff",fontSize:20}}>Log in.</Text></Text>
    
        </TouchableOpacity>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({
  username:{
    backgroundColor:"white",
    borderRadius:12,
    borderWidth:1,
    marginTop:10,
    paddingHorizontal:10,
    // paddingVertical:15,
    width:310,
    height:47,
    marginLeft:26,
    fontSize:15
    
  }
})
