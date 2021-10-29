import React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "react-native";
const PageOne = () => {
  
  return (
    <View style={styles.container}>
      <Text>Первая страница</Text>
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
export default PageOne;
