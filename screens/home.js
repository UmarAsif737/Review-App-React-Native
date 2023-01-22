import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import { useFocusEffect } from "@react-navigation/native";
import Card from "../shared/card";

export default function Home({ navigation, route }) {
  const { homeHeader } = route.params;

  useFocusEffect(
    React.useCallback(() => {
      if (navigation) {
        homeHeader(true);
      }
    }, [navigation])
  );

  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);
  const pressHandler = (item) => {
    homeHeader(false);
    navigation.navigate("ReviewDetails", item);
  };

  return (
    <View style={GlobalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item)}>
            <Card>
              <Text style={GlobalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
