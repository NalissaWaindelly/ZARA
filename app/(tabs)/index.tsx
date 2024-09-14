import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Audio } from "expo-av";
import * as DocumentPicker from "expo-document-picker";
import Items2 from "@/components/items";
import { fruits } from "../Data/image";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

function Index() {
  const navigation = useRouter(); // Utiliser le hook de navigation

  const [playbackObject, setPlaybackObject] = useState(null);
  const [status, setStatus] = useState(null);

  const pickAudioFile = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "*/*",
    });

    console.log(result.assets[0]);
    navigation.push({
      pathname: "playMusic/[titre]",
      params: { titre: result.assets[0].name.toString() },
    });
  };

  return (
    <SafeAreaView>
      <View>
        <Image
          source={require("@/assets/images/bac2.jpg")}
          style={styles.fond}
        ></Image>
      </View>
      <View style={styles.titres}>
        <Text style={styles.titre}>Separation vocale</Text>
      </View>
      <View>
        <View style={styles.containerb}>
          <ScrollView contentContainerStyle={styles.fruitContainers}>
            <TouchableOpacity
              style={[styles.buttonContainer, { backgroundColor: "white" }]}
              onPress={pickAudioFile}
            >
              <Text style={styles.buttonText}>Importer chanson</Text>
            </TouchableOpacity>
            {status && <Text>{`Status: ${JSON.stringify(status)}`}</Text>}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Index;

const styles = StyleSheet.create({
  titre: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    top: 80,

  },
  titres: {
    alignItems: "center",
    justifyContent: "center",


  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#red",
  },
  fruitContainer: {
    flexDirection: "row",

    flexWrap: "wrap",
    top: 10,
  },
  fruitContainers: {
    flexDirection: "row",

    flexWrap: "wrap",
    top: 42,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,
  },
  fond: {
    position: "absolute",
    width: width,
    height: height,
  },

  get: {
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "white",
    width: 280,
    height: 60,
    borderRadius: 50,
    left: "11%",
    top: 50,
  },
  textes: {
    color: "green",
    fontWeight: "600",
    fontSize: 30,

    justifyContent: "center",
    alignItems: "center",
  },
  containerb: {
    justifyContent: "center",
    alignItems: "center",
    top: "170%",
  },
  buttonContainer: {
    padding: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: "green",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
});
