import React from "react";
import { StyleSheet, View } from "react-native";

const Card = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>{props.children}</View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: "0.3",
    shadowRadius: 2,
    marginVertical: 6,
    marginHorizontal: 4,
  },
  card: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});
