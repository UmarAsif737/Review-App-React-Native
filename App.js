import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/home";
import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReviewDetails from "./screens/reviewDetails";
import About from "./screens/about";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
        "nunito-semiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
        "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
      });
      setFontLoaded(true);
    };
    loadFont();
  }, []);

  if (!fontLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home">
          {() => (
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
            </Stack.Navigator>
          )}
        </Drawer.Screen>
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
