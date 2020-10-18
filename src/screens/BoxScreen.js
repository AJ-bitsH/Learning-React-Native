import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.text1Style}>Box Screen 1</Text>
      <Text style={styles.text2Style}>Box Screen 2</Text>
      <Text style={styles.text3Style}>Box Screen 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
  },

  text1Style: {
    height: 80,
    width: 80,
    borderWidth: 3,
    borderColor: "red",
    alignSelf: "flex-start",
  },
  text2Style: {
    height: 80,
    width: 80,
    borderWidth: 3,
    borderColor: "purple",
    position: "absolute",
    alignSelf: "flex-end",
  },
  text3Style: {
    height: 80,
    width: 80,
    borderWidth: 3,
    borderColor: "red",
    alignSelf: "center",
  },
});

export default BoxScreen;
