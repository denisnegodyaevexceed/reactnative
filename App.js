import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import Test from "./components/Test";
import Test2 from "./components/Test2";

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Link to="/test1" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text style={styles.link}>test1</Text>
        </Link>
        <Link to="/test2" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text style={styles.link}>test2</Text>
        </Link>
      </View>
      <Route exact path="/" />
      <Route path="/test1" component={Test} />
      <Route path="/test2" component={Test2} />
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    fontSize: 50,
  },
});
