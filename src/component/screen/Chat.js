import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

const chats = [
  {
    id: "1",
    username: "Rishi",
    message: "Bro project complete?",
    time: "2m",
    unread: 2,
    online: true,
    img:  require('../../assets/image/chococofe.jpg'),
  },
  {
    id: "2",
    username: "Lalit Singh",
    message: "Send me the Figma file",
    time: "10m",
    unread: 1,
    online: true,
    img: require('../../assets/image/buttercofe.jpg'),
  },
  {
    id: "3",
    username: "Harshit Sharma",
    message: "hey i am going",
    time: "1h",
    unread: 0,
    online: false,
    img:  require('../../assets/image/remo.png'),
  },
  {
    id: "4",
    username: "Abhishek Singh",
    message: "Where are you?",
    time: "3h",
    unread: 0,
    online: false,
    img:  require('../../assets/image/cand.jpg'),
  },
  {
    id: "5",
    username: "Ayush",
    message: "Let's meet tomorrow",
    time: "1d",
    unread: 3,
    online: true,
    img:  require('../../assets/image/beans.jpg'),
  },
];

const DMScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");

  const filteredChats = chats.filter((item) =>
    item.username.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() =>
        navigation.navigate("ChatScreen", {
          user: item,
        })
      }
    >
      <View>
        <Image
          source={item.img}
          style={styles.avatar}
        />

        {item.online && (
          <View style={styles.onlineDot} />
        )}
      </View>

      <View style={styles.chatInfo}>
        <Text style={styles.username}>
          {item.username}
        </Text>

        <Text
          numberOfLines={1}
          style={styles.message}
        >
          {item.message}
        </Text>
      </View>

      <View style={styles.rightSide}>
        <Text style={styles.time}>
          {item.time}
        </Text>

        {item.unread > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {item.unread}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={()=> navigation.goBack()} >
          <Ionicons
            name="arrow-back"
            size={28}
            color="#fff"
            
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          ashusingh19
        </Text>

        <TouchableOpacity>
          <Feather
            name="edit"
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#999"
        />

        <TextInput
          placeholder="Search"
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
      </View>

      {/* Notes */}
      <View style={styles.notesSection}>
        <TouchableOpacity
          style={styles.noteCircle}
        >
          <Ionicons
            name="add"
            size={28}
            color="#fff"
          />
        </TouchableOpacity>

        <View>
          <Text style={styles.noteTitle}>
            Your Note
          </Text>

          <Text style={styles.noteSub}>
            Share a thought...
          </Text>
        </View>
      </View>

      {/* Messages Header */}
      <View style={styles.messageHeader}>
        <Text style={styles.messageText}>
          Messages
        </Text>

        <TouchableOpacity>
          <Text style={styles.requestText}>
            Requests
          </Text>
        </TouchableOpacity>
      </View>

      {/* Chat List */}
      <FlatList
        data={filteredChats}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />

    </SafeAreaView>
  );
};

export default DMScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#262626",
    marginHorizontal: 15,
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 15,
  },

  searchInput: {
    flex: 1,
    color: "#fff",
    paddingVertical: 10,
    marginLeft: 8,
  },

  notesSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 20,
  },

  noteCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  noteTitle: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  noteSub: {
    color: "#999",
    marginTop: 4,
  },

  messageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 10,
  },

  messageText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },

  requestText: {
    color: "#0095F6",
    fontWeight: "600",
  },

  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 12,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  onlineDot: {
    position: "absolute",
    right: 2,
    bottom: 2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#22c55e",
    borderWidth: 2,
    borderColor: "#121212",
  },

  chatInfo: {
    flex: 1,
    marginLeft: 12,
  },

  username: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  message: {
    color: "#9ca3af",
    marginTop: 4,
  },

  rightSide: {
    alignItems: "flex-end",
  },

  time: {
    color: "#9ca3af",
    fontSize: 12,
  },

  badge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#0095F6",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
  },

  badgeText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 11,
  },
});