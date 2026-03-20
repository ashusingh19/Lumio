import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from "react-native-vector-icons/AntDesign";
import LinearGradient from 'react-native-linear-gradient';

const Story = [
  {
    id: 1,
    img: require('../../assets/image/ball.jpg'),
    username: 'Ashu',
  },
  {
    id: 2,
    img: require('../../assets/image/cand.jpg'),
    username: 'Harshit',
  },
  {
    id: 3,
    img: require('../../assets/image/chococofe.jpg'),
    username: 'Abhishek',
  },
  {
    id: 4,
    img: require('../../assets/image/cand.jpg'),
    username: 'Ayush',
  },
  {
    id: 5,
    img: require('../../assets/image/butterflycofe.jpg'),
    username: 'Shivam',
  },
  {
    id: 6,
    img: require('../../assets/image/beans.jpg'),
    username: 'Rahul',
  },
  {
    id: 7,
    img: require('../../assets/image/cand.jpg'),
    username: 'Lalit',
  },
  {
    id: 8,
    img: require('../../assets/image/beans.jpg'),
    username: 'Rishi',
  },
  {
    id: 9,
    img: require('../../assets/image/cand.jpg'),
    username: 'Anupam',
  },
  {
    id: 10,
    img: require('../../assets/image/beans.jpg'),
    username: 'Vivek',
  },
];

const Stories = () => {
  return (
    <ScrollView
      horizontal
      style={{
        backgroundColor: 'black',
        paddingHorizontal: 18,
        paddingVertical: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      <View style={{alignItems:'center',marginRight:15,position:"relative"}}>
        <Image source={require("../../assets/image/ball.jpg")} 
         style={{ height: 72, width: 72, borderRadius: 50,}} />
         <Text style={{ color: 'white', fontSize: 13, marginTop: 8 }}>your story</Text>
         <Icon name="pluscircle" size={16} style={{ color:"#1f6f8fff",position:'absolute',top:56,left:52,backgroundColor:"white",borderRadius:10}}/>
      </View>
      {Story.map((item) => (
        <View
          key={item.id}
          style={{ alignItems: 'center', marginRight: 12 }}
        >
          <LinearGradient style={{padding:2,borderRadius:60,height:75,width:75,justifyContent:"center",alignSelf:"center"}} colors={['#FEDA75','#fa7e1e','#d62976','#962fbf']}>
             <Image
            source={item.img}
            style={{ height: 70, width: 70, borderRadius: 50,borderWidth:4,color:"black" }}
          />
          </LinearGradient>
         
          <Text
            style={{ color: 'white', fontSize: 13, marginTop: 8 }}
            numberOfLines={1}
          >
            {item.username}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Stories;
