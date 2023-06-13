import { Video } from "expo-av";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const video = useRef(null);
  const secondVideo = useRef(null);
  const [status, setStatus] = useState({});
  const [statusSecondVideo, setStatusSecondVideo] = useState({});

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.buttons}>
        <Button
          title="Play from 5s"
          onPress={() => video.current.playFromPositionAsync(5000)}
        />
        <Button
          title={status.isLooping ? "Set to not loop" : "Set to loop"}
          onPress={() => video.current.setIsLoopingAsync(!status.isLooping)}
        />
      </View>
      <Video
        ref={secondVideo}
        style={styles.video}
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatusSecondVideo}
      />
      <View style={styles.buttons}>
        <Button
          title="Play from 50s"
          onPress={() => secondVideo.current.playFromPositionAsync(50000)}
        />
        <Button
          title={
            statusSecondVideo.isLooping ? "Set to not loop" : "Set to loop"
          }
          onPress={() =>
            secondVideo.current.setIsLoopingAsync(!statusSecondVideo.isLooping)
          }
        />
      </View>
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
  video: {
    flex: 1,
    alignSelf: "stretch",
  },
  buttons: {
    gap: 10,
  },
});
