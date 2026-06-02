import { SafeAreaView, StatusBar, StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import React from 'react'
import Homeheader from './Homeheader'
import Stories from './Stories'
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome"

const Posts = [
  {
  id:1,
  img:require("../../assets/image/Lumio.png"),
  username: "Divine12",
  likes:'1400',
  comments:'852',
  date:'2 days ago'
},
  {
  id:11,
  img:require("../../assets/image/cutlogo.png"),
  username: "Divine12",
  likes:'1400',
  comments:'852',
  date:'2 days ago'
},
{
  id:1,
  img:require("../../assets/image/butterflycofe.jpg"),
  username: "Divine12",
  likes:'1400',
  comments:'852',
  date:'2 days ago'
},
{
  id:2,
  img:require("../../assets/image/cand.jpg"),
  username: "Eccleston11",
  likes:'1450',
  comments:'952',
  date:'4 days ago'
},
{
  id:3,
  img:require("../../assets/image/buttercofe.jpg"),
  username: "Mathews98",
  likes:'140',
  comments:'52',
  date:'5 days ago'
},
{
  id:4,
  img:require("../../assets/image/beans.jpg"),
  username: "Catherine102",
  likes:'1409',
  comments:'1002',
  date:'6 days ago'
},
{
  id:5,
  img:require("../../assets/image/ball.jpg"),
  username: "Perry52",
  likes:'1700',
  comments:'252',
  date:'1 days ago'
},
{
  id:6,
  img:require("../../assets/image/chococofe.jpg"),
  username: "chat12",
  likes:'1540',
  comments:'962',
  date:'3 days ago'
},

]

const Home = () => {
  return (
    <>
    <Homeheader/>
   <Stories/>
   <ScrollView>
   {Posts.map (item => (
     <View>
    <StatusBar backgroundColor={"black"}/>
   
    <View style={{backgroundColor:"black",paddingBottom:26}}>
      <View style={{paddingHorizontal:18,flexDirection:'row',justifyContent:"space-between"}}>
       <View style={{flexDirection:'row',marginTop:25,alignItems:'center'}}>
      <Image source={item.img} style ={{height:30,width:30,borderRadius:50}} />
      <Text style={{color:"white",marginLeft:10,fontSize:13}}>{item.username}</Text> 
     </View>
      <Entypo name ="dots-three-vertical" size={20} color="white" marginTop={25}/>
      </View>
      <Image source={item.img} style={{height:320,width:380,marginVertical:10}} />
      <View style={{paddingHorizontal:18}}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{flexDirection:"row"}}>
        <AntDesign name = "hearto" color="white" size={25} style={styles.icon}/>
        <Feather name="message-circle" color="white" size={25} style={styles.commenticon}/>
        <Feather name="send" color="white" size={25} />
        </View>
        <FontAwesome name="bookmark-o" color="white" size={25} marginRight={20}/>
       
      </View>
       <Text style={{marginTop:8,color:'white',fontSize:15}}>{item.likes} likes</Text>
       <Text style={{}}>
        <Text style={{color:"white",fontSize:13,fontWeight:800}}>{item.username}</Text>
        <Text style={{color:"white",fontSize:13,}}> {''} take the shot and capture coffee</Text>
       </Text>
       <Text style={{color:"grey",marginTop:5,fontSize:13}}>View all {item.comments} comments</Text>
              <Text style={{color:"grey",marginTop:4,fontSize:13}}>{item.date}</Text>

       </View>
      </View>
  </View>
   ))}
   
   </ScrollView>
   </>
  )
}

export default Home

const styles = StyleSheet.create({
  icon:{
    marginRight:18,
    marginTop:1,
    
  },
   commenticon:{
    marginRight:15,
    marginTop:1,
    marginLeft:5
  }
})