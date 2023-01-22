import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Card from "../shared/card";

export default function ReviewDetails({ route }) {
  return (
    <View style={GlobalStyles.container}>
      <Card>
        <Text>{route.params.title}</Text>
        <Text>{route.params.body}</Text>
        <Text>{route.params.rating}</Text>
      </Card>
    </View>
  );
}
