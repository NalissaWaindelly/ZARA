import { AntDesign, FontAwesome, Fontisto, Ionicons } from "@expo/vector-icons";
import { Video } from "expo-av";
import React, { useState, useRef, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from "react-native";

const { width, height } = Dimensions.get("window");

interface interfaceItems {
  color: string;
  nom: string;
  titre: any;
  image: any;
  durete: any;
}

function Items2({ color, nom, titre, image, durete }: interfaceItems) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<Video>(null);
  const [likes, setLikes] = useState(0); // État pour le compteur de "J'aime"
  const handlePlayPause = async () => {
    if (isPlaying) {
      await videoRef.current?.pauseAsync();
      console.log("Video paused");
    } else {
      await videoRef.current?.playAsync();
      console.log("Video playing");
    }
    setIsPlaying(!isPlaying);
    setShowControls(true); // Affiche les contrôles après le changement d'état de lecture
    // Démarre le minuteur pour masquer les contrôles après 5 secondes
    setTimeout(() => {
      setShowControls(false);
    }, 5000);
  };

  const handleScreenTouch = () => {
    setShowControls(true); // Affiche les contrôles lorsque l'utilisateur touche l'écran
    // Réinitialise le minuteur pour masquer les contrôles après 5 secondes
    clearTimeout(); // Efface le minuteur actuel pour éviter les conflits
    setTimeout(() => {
      setShowControls(false);
    }, 5000);
  };
  const handleLike = () => {
    setLikes(likes + 1); // Incrémente le compteur de "J'aime"
  };

  useEffect(() => {
    console.log("Current state of isPlaying:", isPlaying);
  }, [isPlaying]);

  return (
    <TouchableWithoutFeedback onPress={handleScreenTouch}>
      <View>
        <View style={styles.container}>
          <View style={styles.videos}>
            <Video
              ref={videoRef}
              style={styles.video}
              source={image}
              rate={1.0}
              volume={1.0}
              resizeMode="cover"
              shouldPlay={false}
              isMuted={false}
            />
            {showControls && ( // Affiche les contrôles seulement si showControls est vrai
              <TouchableOpacity
                style={styles.playPauseButton}
                onPress={handlePlayPause}
              >
                <Ionicons
                  name={isPlaying ? "pause" : "play"}
                  size={48}
                  color="green"
                />
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.telo}>
            <View style={styles.tee}>
              <Text style={styles.vue}>0</Text>
              <AntDesign name="eye" size={24} color="green" />
            </View>

            <TouchableOpacity onPress={handleLike} style={styles.likeButton}>
              <FontAwesome name="heart" size={24} color="red" />
            </TouchableOpacity>
            <View style={styles.te}>
              <Text style={styles.likeCount}>{likes}</Text>
              <Text style={styles.texti}>J'adore</Text>
            </View>

            <View style={styles.te}>
              <View>
                <Text style={styles.texte}>{nom}</Text>
              </View>
              <View style={styles.viewTitre}>
                <Text style={styles.texte2}>{titre}</Text>
              </View>
              <View>
                <Text style={styles.texte}>{durete}</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Fontisto name="favorite" size={24} color="green" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Items2;

const styles = StyleSheet.create({
  vue: {
    color: "green",
  },
  container: {
    fontSize: 100,
  },
  videos: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  video: {
    width: width,
    height: height / 3,
  },
  texte: {
    color: "green",
    fontSize: 15,
  },
  texte2: {
    color: "green",
    fontSize: 15,
  },
  texteTitre: {
    color: "green",
    fontSize: 10,
  },
  textes: {
    fontSize: 10,
    backgroundColor: "green",
    color: "red",
  },
  tex: {
    color: "green",
  },
  horizontale: {
    width: 0, // Pour prendre toute la largeur de l'écran
    borderBottomColor: "#ffff", // Couleur de la ligne
    borderBottomWidth: 1.5, // Épaisseur de la ligne
    marginVertical: 20, // Espacement vertical autour de la ligne
    justifyContent: "center",
    alignItems: "center",
    right: 10,
  },
  viewTitre: {},
  textess: {
    color: "green",
    fontSize: 40,
  },
  telo: {
    padding: 7,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  teloo: {
    padding: 7,
  },
  playPauseButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -24 }, { translateY: -24 }],
    zIndex: 1,
  },
  texti: {
    fontSize: 15,
    color: "green",
  },
  te: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 5,
    gap: 8,
  },
  tee: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 5,
    gap: 2,
  },
  likeCount: {
    color: "green",
    fontSize: 14,
    marginLeft: 5, // Espace entre le compteur et l'icône de cœur
  },
  likeButton: {
    flexDirection: "row",
    alignItems: "center",
    top: 4,
  },
});
