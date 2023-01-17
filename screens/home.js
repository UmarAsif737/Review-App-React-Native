import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home asaffdssh</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  text: {
    fontFamily: "nunito-semiBold",
    fontSize: 24,
  },
});
