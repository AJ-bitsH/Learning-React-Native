import React, { Component } from "react";
import {
  Alert,
  Button,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
} from "react-native";

export default class App extends Component {
  state = {
    email: "",
    password: "",
  };

  onLogin() {
    const { email, password } = this.state;

    Alert.alert("Credentials", `email: ${email} + password: ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText1}>Hi, </Text>
        <Text style={styles.titleText}>Welcome Back</Text>
        <TextInput
          value={this.state.email}
          keyboardType="email-address"
          onChangeText={(email) => this.setState({ email })}
          placeholder="Email"
          placeholderTextColor="grey"
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={"Password"}
          secureTextEntry={true}
          placeholderTextColor="grey"
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={this.onLogin.bind(this)}
        >
          <Text style={styles.buttonText}> LOGIN </Text>
        </TouchableOpacity>
        <Text style={styles.littleText}> Or Login With </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "peachpuff",
  },
  titleText: {
    fontFamily: "sans-serif-medium",
    fontSize: 50,
    textAlign: "left",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText1: {
    fontFamily: "sans-serif-medium",
    fontSize: 50,
    textAlign: "left",
    paddingRight: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  littleText: {
    fontFamily: "Roboto",
    fontSize: 10,
    textAlign: "left",
    color: "grey",
  },
  button: {
    alignItems: "center",
    backgroundColor: "black",
    width: 250,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText: {
    fontFamily: "Roboto",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  input: {
    width: 300,
    fontFamily: "Roboto",
    fontSize: 20,
    height: 44,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginVertical: 10,
  },
});
