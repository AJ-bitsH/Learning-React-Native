import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const INCREMENTER = 10;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <ColorCounter
        onIncrease={() => setRed(red + INCREMENTER)}
        onDecrease={() => setRed(red - INCREMENTER)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setGreen(green + INCREMENTER)}
        onDecrease={() => setGreen(green - INCREMENTER)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setBlue(blue + INCREMENTER)}
        onDecrease={() => setBlue(blue - INCREMENTER)}
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
