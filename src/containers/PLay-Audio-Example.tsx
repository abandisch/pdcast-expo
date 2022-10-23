import { useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";

export default function App() {
  const soundRef = useRef<Audio.Sound | null>(null);

  async function playSound() {
    try {
      // const sound = new Audio.Sound();
      console.log("Loading Sound from URL");
      await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

      const { sound } = await Audio.Sound.createAsync(
        {
          uri: "https://file-examples.com/storage/fe4b4c6261634c76e91986b/2017/11/file_example_MP3_700KB.mp3",
        },
        { shouldPlay: true }
      );

      console.log("Playing Sound");
      await sound.setPositionAsync(0);
      await sound.playAsync();
      soundRef.current = sound;
    } catch (err: any) {
      console.error("Error:", err.message);
    }
  }

  useEffect(() => {
    return soundRef
      ? () => {
          console.log("Unloading Sound");
          soundRef?.current?.unloadAsync();
        }
      : undefined;
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <View>
        <TouchableOpacity onPress={playSound}>
          <View style={{ padding: 10, backgroundColor: "purple" }}>
            <Text style={{ color: "white" }}>Play Sound</Text>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
