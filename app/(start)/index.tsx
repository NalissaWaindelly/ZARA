import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Items2 from "@/components/items";
import { karaoke } from "../Data/video";

const { width, height } = Dimensions.get("window");

function Index() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Image
          style={styles.fond}
        />
      </View>
      <View style={styles.titres}>
        <Text style={styles.titre}>karaoke</Text>
        <View style={styles.titrees}>
          <FontAwesome5
            style={styles.titrees1}
            name="user-alt"
            size={30}
            color="green"
          />
          <FontAwesome
            style={styles.titrees2}
            name="search"
            size={30}
            color="green"
          />
          <TouchableOpacity onPress={toggleMenu}>
            <MaterialCommunityIcons
              style={styles.titrees3}
              name="menu"
              size={30}
              color="green"
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.fruitContainer}>
        <View style={styles.fruitContainer}>
          {karaoke.map((e) => {
            return (
              <Items2
                key={e.id}
                color="red"
                nom={e.nom}
                titre={e.titre}
                image={e.image}
                durete={e.durete}
              />
            );
          })}
        </View>
      </ScrollView>
      {menuVisible && (
        <View style={styles.menuOptions}>
          <Text style={styles.menuOption}>Artistes</Text>
          <Text style={styles.menuOption}>Titre</Text>
          <Text style={styles.menuOption}>Playlist</Text>
          <Text style={styles.menuOption}>Favoris</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

export default Index;

const styles = StyleSheet.create({
  titre: {
    color: "green",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 45,
  },
  titres: {
    alignItems: "center",
    justifyContent: "center",
    right: 50,
    flexDirection: "row",
  },
  titrees: {
    left: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titrees1: {
    left: 20,
  },
  titrees2: {
    left: 40,
  },
  titrees3: {
    left: 50,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "red",
    padding: 10,
  },
  fruitContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
  },
  fond: {
    position: "absolute",
    width: width,
    height: height,
  },
  menuOptions: {
    position: "absolute",
    top: 70, // Adjust this value based on where you want to position the menu options
    right: 20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    elevation: 5, // Adds shadow for Android
    shadowColor: "#000", // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Adds shadow for iOS
    shadowOpacity: 0.8, // Adds shadow for iOS
    shadowRadius: 2, // Adds shadow for iOS
    zIndex: 1, // Ensures the menu appears above other elements
  },
  menuOption: {
    padding: 10,
    borderBottomColor: "green",
    borderBottomWidth: 1,
    color: "green",
  },
});
