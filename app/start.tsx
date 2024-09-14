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

      <View style={styles.tex}>
        <Text style={styles.text}>Veuiller choisir : </Text>
      </View>
      <TouchableOpacity style={styles.get}>
        <Link href={"(tabs)"}>
          <View>
            <Text style={styles.textes}>Separation </Text>
          </View>
        </Link>
      </TouchableOpacity>
      <TouchableOpacity style={styles.get2}>
        <Link href={"(start)"}>
          <View>
            <Text style={styles.textes}>Karaoke</Text>
          </View>
        </Link>
      </TouchableOpacity>
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
    color: "green",
    fontSize: 55,
    fontWeight: "800",
    alignItems: "center",
    justifyContent: "center",
  },

  get: {
    alignItems: "center",
    justifyContent: "center",
    top: 250,
    backgroundColor: "white",
    width: 280,
    height: 60,
    borderRadius: 50,
    left: "11%",
  },
  get2: {
    alignItems: "center",
    justifyContent: "center",
    top: 300,
    backgroundColor: "white",
    width: 280,
    height: 60,
    borderRadius: 50,
    left: "11%",
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
});
