import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

const Profilemenu = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>

      {/* Open Menu Button */}
      <TouchableOpacity
        style={styles.openButton}
        onPress={() => setMenuVisible(true)}
      >
        <Ionicons
          name="menu"
          size={30}
          color="#fff"
        />
      </TouchableOpacity>

      {/* Menu Modal */}
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
              Instagram Menu
            </Text>

            {/* Settings */}
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate("SettingsScreen");
              }}
            >
              <Ionicons
                name="settings-outline"
                size={24}
                color="#fff"
              />
              <Text style={styles.menuText}>
                Settings & Privacy
              </Text>
            </TouchableOpacity>

            {/* Activity */}
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate("ActivityScreen");
              }}
            >
              <Ionicons
                name="bar-chart-outline"
                size={24}
                color="#fff"
              />
              <Text style={styles.menuText}>
                Your Activity
              </Text>
            </TouchableOpacity>

            {/* Archive */}
            <TouchableOpacity
              style={styles.menuItem}
            >
              <Ionicons
                name="archive-outline"
                size={24}
                color="#fff"
              />
              <Text style={styles.menuText}>
                Archive
              </Text>
            </TouchableOpacity>

            {/* Saved */}
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate("SavedScreen");
              }}
            >
              <Ionicons
                name="bookmark-outline"
                size={24}
                color="#fff"
              />
              <Text style={styles.menuText}>
                Saved
              </Text>
            </TouchableOpacity>

            {/* Discover People */}
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate("DiscoverPeopleScreen");
              }}
            >
              <Ionicons
                name="people-outline"
                size={24}
                color="#fff"
              />
              <Text style={styles.menuText}>
                Discover People
              </Text>
            </TouchableOpacity>

            {/* Logout */}
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

export default Profilemenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
  },

  openButton: {
    padding: 12,
    backgroundColor: "#222",
    borderRadius: 10,
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
    marginBottom: 20,
    textAlign: "center",
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },

  menuText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 15,
  },
});