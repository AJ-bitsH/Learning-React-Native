import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const App = () => (
  <View style={styles.container}>
    <LinearGradient
      colors={["#09203f", "#537895"]}
      start={[0.9, 0.9]}
      style={styles.linearGradient}
    >
      <ImageBackground
        source={require("../../assets/apt2.jpeg")}
        style={styles.image}
      >
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}> Register </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}> Enter </Text>
        </TouchableOpacity>
      </ImageBackground>
    </LinearGradient>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "purple",
  },
  button: {
    //flex: 1,
    width: 250,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "powderblue",
    borderRadius: 25,
    marginBottom: 10,
    backgroundColor: "rebeccapurple",
    justifyContent: "center",
    top: 50,
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    height: 400,
    width: 400,
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
  },
  linearGradient: {
    width: "100%",
    height: "100%",
    opacity: 0.95,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
