import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={require("./assets/apt.jpeg")} style={styles.image}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}> Register </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}> Enter </Text>
      </TouchableOpacity>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    width: 250,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "powderblue",
    borderRadius: 25,
    marginBottom: 10,
    backgroundColor: "rebeccapurple",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: 1280,
    width: 720,
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default App;
