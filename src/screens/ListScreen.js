import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ListScreen = ({ navigation }) => {
  //console.log(props.navigation);

  const friends = [
    { name: "this 1", age: 1 },
    { name: "this 2", age: 2 },
    { name: "this 3", age: 6 },
    { name: "this 4", age: 8 },
    { name: "this 5", age: 10 },
    { name: "this 6", age: 111 },
  ];

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.age}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
