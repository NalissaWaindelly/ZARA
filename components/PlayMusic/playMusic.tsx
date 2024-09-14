import { useEffect, useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av";

export default function App() {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlay, setIsplay] = useState<boolean>(false);


  

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/Music/test.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }
  async function pauseSound() {
    if (isPlay) {
      await sound?.pauseAsync();
      setIsplay(false);
    } else {
      await sound?.playAsync();
      setIsplay(true);
    }
  }
  async function stopSound() {
    await sound?.stopAsync();
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
    <View style={styles.container}>
      <Button title="Play Sound" onPress={playSound} />
      <Button title="Pause Sound" onPress={pauseSound} />
      <Button title="Stop Sound" onPress={stopSound} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
});
