import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

const users = [
  {
    id: "1",
    username: "nitin07",
    name: "Nitin tiwari",
    img: require("../../assets/image/cutlogo.png"),
  },
  {
    id: "2",
    username: "rish12",
    name: "Rishi",
    img: require("../../assets/image/Lumio.png"),
  },
  {
    id: "3",
    username: "Harshit",
    name: "Harshit Sharma",
    img: require("../../assets/image/remo.png"),
  },
];

const posts = [
  { id: "1",     img: require("../../assets/image/remo.png")},
  { id: "2",     img: require("../../assets/image/newlogo.png")},
  { id: "3",     img: require("../../assets/image/cutlogo.png"),},
  { id: "4",     img: require("../../assets/image/cutlogo.png")},
  { id: "5",     img: require("../../assets/image/Lumio.png")},
  { id: "6",     img: require("../../assets/image/beans.jpg")},
  { id: "7",     img: require("../../assets/image/ball.jpg")},
  { id: "8",     img: require("../../assets/image/remo.png")},
  { id: "9",     img: require("../../assets/image/cutlogo.png")},
];

const SearchScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    user.username
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const renderUser = ({ item }) => (
    <TouchableOpacity
      style={styles.userCard}
      onPress={() =>
        navigation.navigate("UserProfile", {
          user: item,
        })
      }
    >
      <Image
        source={item.img}
        style={styles.avatar}
      />

      <View>
        <Text style={styles.username}>
          {item.username}
        </Text>

        <Text style={styles.name}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderPost = ({ item }) => (
    <TouchableOpacity>
      <Image
        source={item.img }
        style={styles.gridImage}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>

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

      {/* User Results */}
      {search.length > 0 ? (
        <FlatList
          data={filteredUsers}
          keyExtractor={(item) => item.id}
          renderItem={renderUser}
        />
      ) : (
        <>
          {/* Explore Header */}
          <View style={styles.exploreHeader}>
            <Text style={styles.exploreText}>
              Explore
            </Text>
          </View>

          {/* Explore Grid */}
          <FlatList
            data={posts}
            renderItem={renderPost}
            keyExtractor={(item) => item.id}
            numColumns={3}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}

    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#262626",
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 12,
    paddingHorizontal: 12,
  },

  searchInput: {
    flex: 1,
    color: "#fff",
    marginLeft: 10,
    paddingVertical: 12,
  },

  userCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 12,
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
    marginRight: 12,
  },

  username: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  name: {
    color: "#999",
    marginTop: 3,
  },

  exploreHeader: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },

  exploreText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  gridImage: {
    width: 130,
    height: 130,
    margin: 1,
  },
});