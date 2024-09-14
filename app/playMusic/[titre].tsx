import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import { Audio } from "expo-av";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import Durration from "@/components/durration";

const { width, height } = Dimensions.get("window");

export default function App() {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [position, setPosition] = useState<number>(0);

  const { titre } = useLocalSearchParams();

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;
    if (isPlaying) {
      intervalId = setInterval(async () => {
        const status = await sound?.getStatusAsync();
        if (status?.isLoaded && status?.durationMillis) {
          setPosition((status.positionMillis / status.durationMillis) * 100);
        }
      }, 800);
    } else {
      clearInterval(intervalId!);
    }
    return () => clearInterval(intervalId!);
  }, [isPlaying, sound]);

  async function playSound() {
    if (sound === null) {
      console.log("Loading Sound");
      const { sound } = await Audio.Sound.createAsync(
        require("@/assets/Music/test.mp3")
      );
      setSound(sound);
      await sound.playAsync();
      setIsPlaying(true);
    } else {
      await sound.playAsync();
      setIsPlaying(true);
    }
  }

  async function pauseSound() {
    if (isPlaying) {
      await sound?.pauseAsync();
      setIsPlaying(false);
    } else {
      await sound?.playAsync();
      setIsPlaying(true);
    }
  }

  async function stopSound() {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
      setPosition(0);
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require("@/assets/images/bac2.jpg")}
          style={styles.fond}
        />
      </View>

      <View>
        <View>
          <Image
            style={styles.logos}
            source={require("@/assets/images/logo2.jpeg")}
          ></Image>
        </View>
        <View style={styles.durration}>
          <Durration value={position} />
        </View>
        <View style={styles.containerVoalohany}>
          <View>
            <Text style={styles.textes}> {titre}</Text>
          </View>

          <View style={styles.bouttonContainer}>
            <TouchableOpacity onPress={playSound}>
              <Entypo name="controller-play" size={42} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={stopSound}>
              <Entypo name="controller-stop" size={42} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={pauseSound}>
              <Entypo
                name={isPlaying ? "controller-paus" : "controller-play"}
                size={42}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.get}>
        <View>
          <Text style={styles.textess}>Start</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  durration: {
    top: "30%",
  },
  container: {
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  fond: {
    position: "absolute",
    width: width,
    height: height,
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
    color: "white",
    fontWeight: "600",
    fontSize: 40,
    textAlign: "center",
  },
  textess: {
    color: "green",
    fontWeight: "600",
    fontSize: 40,
    textAlign: "center",
  },
  bouttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  logos: {
    width: 200,
    height: 200,
    top: "30%",
    left: "20%",
  },
  containerVoalohany: {
    top: "35%",
  },
});
