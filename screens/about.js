import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";

const AboutUs = () => {
  return (
    <View style={GlobalStyles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.body}>
        <Text>
          We are a team of dedicated developers committed to building
          high-quality mobile apps.
        </Text>
        <Text>
          Our goal is to create user-friendly and visually appealing apps that
          meet the needs of our clients.
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    marginBottom: 20,
    alignSelf: "center",
    color: "black",
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default AboutUs;
