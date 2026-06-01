


import React, { useState } from 'react';import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const posts = [
  {
    comment:"Me",
    img: require('../../assets/image/ball.jpg'),
  },
  {
     comment:"Travel",
    img: require('../../assets/image/cand.jpg'),
    
  },
  {
     comment:"Coffee",
    img: require('../../assets/image/chococofe.jpg'),
  },
  {
     comment:"food",
    img: require('../../assets/image/cand.jpg'),
  },
  {
    img: require('../../assets/image/butterflycofe.jpg'),
  },
  {
    img: require('../../assets/image/beans.jpg'),
  },
  {
    img: require('../../assets/image/cand.jpg'),
  },
  {
    img: require('../../assets/image/beans.jpg'),
  },
  {
    img: require('../../assets/image/cand.jpg'),
  },
  {

    img: require('../../assets/image/beans.jpg'),
  },
];


const Profile = ({navigation}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Text style={styles.username}>ashu_dev</Text>
          </TouchableOpacity>

          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="add-circle-outline" size={28} color="#000" />
            </TouchableOpacity>

           <TouchableOpacity
              style={styles.iconBtn}
                onPress={() => setMenuVisible(true)}
                  >
               <Entypo name="menu" size={28} color="#000" />
                </TouchableOpacity>
          </View>
        </View>

        {/* //Profile area */}
        <View style={styles.profileSection}>

          <TouchableOpacity>
            <Image
              source={require("../../assets/image/remo.png")}
              style={styles.profileImage}
            />
          </TouchableOpacity>

          <View style={styles.statsContainer}>

            <TouchableOpacity style={styles.statBox}>
              <Text style={styles.statNumber}>54</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.statBox}>
              <Text style={styles.statNumber}>12.5K</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.statBox}>
              <Text style={styles.statNumber}>310</Text>
              <Text style={styles.statLabel}>Following</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bio */}
        <View style={styles.bioContainer}>
          <Text style={styles.name}>Ashutosh Pratap Singh</Text>

          <Text style={styles.bioText}>
            React Native Developer 
          </Text>

          <Text style={styles.bioText}>
            Full Stack Developer | MERN
          </Text>

          <TouchableOpacity>
            <Text style={styles.linkText}>
              github.com/ashusingh19
            </Text>
          </TouchableOpacity>
           <TouchableOpacity>
            <Text style={styles.linkText}>
              https://www.linkedin.com/in/ashutosh-pratap-singh-6690512a0/
            </Text>
          </TouchableOpacity>
        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>

          <TouchableOpacity style={styles.editBtn}>
            <Text style={styles.btnText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.editBtn}>
            <Text style={styles.btnText}>Share Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <Icon name="user-plus" size={18} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Story Highlights */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.highlightsContainer}
        >

          {posts.map((item) => (
            <TouchableOpacity key={item} style={styles.highlightBox}>
              <Image
                source={item.img}
                style={styles.highlightImage}
              />
              <Text style={styles.highlightText}>Travel</Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={styles.highlightBox}>
            <View style={styles.newHighlight}>
              <Ionicons name="add" size={30} color="#000" />
            </View>
            <Text style={styles.highlightText}>New</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Tabs */}
        <View style={styles.tabsContainer}>

          <TouchableOpacity style={styles.tabBtn}>
            <MaterialIcons name="grid-on" size={28} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabBtn}>
            <Ionicons name="videocam-outline" size={28} color="#777" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabBtn}>
            <Ionicons name="person-outline" size={28} color="#777" />
          </TouchableOpacity>
        </View>

        {/* Posts Grid */}
        <View style={styles.postsContainer}>
          {posts.map((item, index) => (
            <TouchableOpacity key={index} style={styles.postWrapper}>
              <Image source={item.img} style={styles.postImage} />
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
      <Modal
  visible={menuVisible}
  transparent={true}
  animationType="slide"
>
  <TouchableOpacity
    activeOpacity={1}
    style={styles.overlay}
    onPress={() => setMenuVisible(false)}
  >
    <View style={styles.menuContainer}>

      <Text style={styles.heading}>
        Lumio Menu
      </Text>

      <TouchableOpacity style={styles.menuItem}>
        <Ionicons
          name="settings-outline"
          size={24}
          color="#fff"
        />
        <Text style={styles.menuText}>
          Settings & Privacy
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Ionicons
          name="bar-chart-outline"
          size={24}
          color="#fff"
        />
        <Text style={styles.menuText}>
          Your Activity
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Ionicons
          name="archive-outline"
          size={24}
          color="#fff"
        />
        <Text style={styles.menuText}>
          Archive
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Ionicons
          name="bookmark-outline"
          size={24}
          color="#fff"
        />
        <Text style={styles.menuText}>
          Saved
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Ionicons
          name="people-outline"
          size={24}
          color="#fff"
        />
        <Text style={styles.menuText}>
          Discover People
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Ionicons
          name="heart-outline"
          size={24}
          color="#fff"
        />
        <Text style={styles.menuText}>
          Favorites
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Ionicons
          name="person-outline"
          size={24}
          color="#fff"
        />
        <Text style={styles.menuText}>
          Close Friends
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          setMenuVisible(false);
          navigation.replace("Login");
        }}
      >
        <Ionicons
          name="log-out-outline"
          size={24}
          color="red"
        />
        <Text
          style={[
            styles.menuText,
            { color: "red" },
          ]}
        >
          Logout
        </Text>
      </TouchableOpacity>

    </View>
  </TouchableOpacity>
</Modal>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },

  username: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
  },

  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconBtn: {
    marginLeft: 18,
  },

  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 10,
  },

  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },

  statsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    marginLeft: 15,
  },

  statBox: {
    alignItems: 'center',
  },

  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },

  statLabel: {
    fontSize: 15,
    color: '#444',
    marginTop: 2,
  },

  bioContainer: {
    paddingHorizontal: 15,
    marginTop: 15,
  },

  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },

  bioText: {
    fontSize: 14,
    color: '#333',
    marginTop: 3,
  },

  linkText: {
    color: '#1877F2',
    marginTop: 4,
    fontWeight: '600',
  },

  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 18,
  },

  editBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 8,
    backgroundColor: '#f8f8f8',
  },

  btnText: {
    color: '#000',
    fontWeight: '600',
  },

  iconButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 9,
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
  },

  highlightsContainer: {
    marginTop: 20,
    paddingLeft: 15,
  },

  highlightBox: {
    alignItems: 'center',
    marginRight: 15,
  },

  highlightImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  newHighlight: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },

  highlightText: {
    marginTop: 5,
    fontSize: 13,
    color: '#000',
  },

  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
    marginTop: 20,
    paddingVertical: 10,
  },

  tabBtn: {
    alignItems: 'center',
    flex: 1,
  },

  postsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  postWrapper: {
    width: '33.33%',
    padding: 1,
  },

  postImage: {
    width: '100%',
    height: 130,
  },
  overlay: {
  flex: 1,
  justifyContent: "flex-end",
  backgroundColor: "rgba(0,0,0,0.5)",
},

menuContainer: {
  backgroundColor: "#1c1c1e",
  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,
  paddingHorizontal: 20,
  paddingVertical: 25,
},

heading: {
  color: "#fff",
  fontSize: 20,
  fontWeight: "700",
  textAlign: "center",
  marginBottom: 20,
},

menuItem: {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 16,
},

menuText: {
  color: "#fff",
  fontSize: 16,
  marginLeft: 15,
},
});


