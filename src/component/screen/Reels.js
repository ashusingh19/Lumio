import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const { width, height } = Dimensions.get('window');

const reelsData = [
  {
    id: '1',
    username: 'ashu_dev',
    caption: 'Building Instagram Clone in React Native 🚀',
    likes: '125K',
    comments: '1,250',
    image: require('../../assets/image/cutlogo.png'),
  },
  {
    id: '2',
    username: 'mern_stack',
    caption: 'Full Stack Developer Journey 🔥',
    likes: '98K',
    comments: '850',
    image: require('../../assets/image/cand.jpg'),
  },
  {
    id: '3',
    username: 'react_native',
    caption: 'React Native Animations ❤️',
    likes: '220K',
    comments: '3,200',
    image: require('../../assets/image/chococofe.jpg'),
  },
];

const Reels = () => {

  const tabBarHeight = useBottomTabBarHeight();

  const renderItem = ({ item }) => {
    return (
      <View
        style={[
          styles.reelContainer,
          {
            height: height - tabBarHeight,
          },
        ]}
      >

        <ImageBackground
          source={item.image}
          style={styles.video}
          resizeMode="cover"
        >

          {/* Header */}
          <View style={styles.topHeader}>

            <Text style={styles.reelsText}>
              Reels
            </Text>

            <TouchableOpacity>
              <Ionicons
                name="camera-outline"
                size={30}
                color="#fff"
              />
            </TouchableOpacity>

          </View>

          {/* Right Side Actions */}
          <View style={styles.rightSection}>

            <TouchableOpacity style={styles.iconContainer}>
              <Ionicons
                name="heart"
                size={32}
                color="#fff"
              />
              <Text style={styles.iconText}>
                {item.likes}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconContainer}>
              <Ionicons
                name="chatbubble"
                size={30}
                color="#fff"
              />
              <Text style={styles.iconText}>
                {item.comments}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconContainer}>
              <Feather
                name="send"
                size={28}
                color="#fff"
              />
              <Text style={styles.iconText}>
                Share
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconContainer}>
              <FontAwesome
                name="bookmark"
                size={28}
                color="#fff"
              />
              <Text style={styles.iconText}>
                Save
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconContainer}>
              <Ionicons
                name="ellipsis-vertical"
                size={26}
                color="#fff"
              />
            </TouchableOpacity>

          </View>

          {/* Bottom Content */}
          <View
            style={[
              styles.bottomSection,
              {
                marginBottom: tabBarHeight + 20,
              },
            ]}
          >

            <View style={styles.userRow}>

              <TouchableOpacity style={styles.profileCircle} />

              <Text style={styles.username}>
                {item.username}
              </Text>

              <TouchableOpacity style={styles.followBtn}>
                <Text style={styles.followText}>
                  Follow
                </Text>
              </TouchableOpacity>

            </View>

            <Text style={styles.caption}>
              {item.caption}
            </Text>

            <View style={styles.musicRow}>

              <Ionicons
                name="musical-notes"
                size={18}
                color="#fff"
              />

              <Text style={styles.musicText}>
                Original Audio - Instagram Reels
              </Text>

            </View>

          </View>

        </ImageBackground>

      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        data={reelsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
      />

    </SafeAreaView>
  );
};

export default Reels;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  reelContainer: {
    width: width,
    backgroundColor: '#000',
  },

  video: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },

  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 50,
  },

  reelsText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
  },

  rightSection: {
    position: 'absolute',
    right: 12,
    bottom: 180,
    alignItems: 'center',
  },

  iconContainer: {
    alignItems: 'center',
    marginBottom: 22,
  },

  iconText: {
    color: '#fff',
    marginTop: 5,
    fontWeight: '600',
  },

  bottomSection: {
    paddingHorizontal: 15,
  },

  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
  },

  username: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 10,
  },

  followBtn: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 12,
  },

  followText: {
    color: '#fff',
    fontWeight: '600',
  },

  caption: {
    color: '#fff',
    marginTop: 12,
    fontSize: 15,
    lineHeight: 22,
  },

  musicRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  musicText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 14,
  },

});