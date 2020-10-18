import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import ImageComp from "../components/ImageComp";

const ImageScreen = () => {
  return (
    <View>
      <ImageComp
        title="forest"
        imageSource={require("../../assets/forest.jpg")}
      />
      <ImageComp
        title="mountain"
        imageSource={require("../../assets/mountain.jpg")}
      />
      <ImageComp
        title="beach"
        imageSource={require("../../assets/beach.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
