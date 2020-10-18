import React from "react";
import { Text, StyleSheet , Button, View} from "react-native";

const HomeScreen = ({navigation} ) => {
  return <Button
   title="go to counter screen" 
   onPress= {() => navigation.navigate('Counter') }
   />;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;