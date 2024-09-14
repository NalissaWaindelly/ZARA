import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
const { width, height } = Dimensions.get("window");

function Home() {
  return (
    <SafeAreaView>
      <View>
        <Image
          source={require("@/assets/images/bac2.jpg")}
          style={styles.fond}
        ></Image>
      </View>
      <View style={styles.logo}>
        <Image
          style={styles.logos}
          source={require("@/assets/images/logo.png")}
        ></Image>
      </View>

      <View style={styles.tex}>
        <Text style={styles.text}>ZARAFEO</Text>
      </View>
      <TouchableOpacity style={styles.get}>
        <Link href={"start"}>
          <View>
            <Text style={styles.textes}>Get Started</Text>
          </View>
        </Link>
      </TouchableOpacity>

      <View style={styles.texte}>
        <Text style={styles.textee}>Separation vocale & instrumenatle</Text>
        <Text style={styles.textee}>+ Karaoke</Text>
      </View>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  tex: {
    top: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "800",
    alignItems: "center",
    justifyContent: "center",
  },
  texte: {
    alignItems: "center",
    justifyContent: "center",
    top: 360,
  },
  textee: {
    color: "white",
    fontSize: 20,
  },
  get: {
    alignItems: "center",
    justifyContent: "center",
    top: 250,
    backgroundColor: "white",
    width: 230,
    height: 60,
    borderRadius: 50,
    left: "20%",
  },
  textes: {
    color: "green",
    fontWeight: "600",
    fontSize: 30,

    justifyContent: "center",
    alignItems: "center",
  },
  fond: {
    position: "absolute",
    width: width,
    height: height,
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    top: "20%",
  },
  logos: {
    justifyContent: "center",
    alignItems: "center",
    width: 130,
    height: 130,


  },
});
