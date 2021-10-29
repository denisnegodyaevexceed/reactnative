import React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "react-native";
const PageTwo = () => {
  return (
    <View style={styles.container}>
      <Text>Вторая страница</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
export default PageTwo;
