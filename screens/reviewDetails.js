import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Card from "../shared/card";

export default function ReviewDetails({ route }) {
  const rating = route.params.rating;
  const images = {
    ratings: {
      1: require("../assets/rating-1.png"),
      2: require("../assets/rating-2.png"),
      3: require("../assets/rating-3.png"),
      4: require("../assets/rating-4.png"),
      5: require("../assets/rating-5.png"),
    },
  };
  return (
    <View style={GlobalStyles.container}>
      <Card>
        <Text style={GlobalStyles.titleText}>{route.params.title}</Text>
        <Text>{route.params.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
