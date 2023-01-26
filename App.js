import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
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
  const [home, setHome] = useState(true);
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
  const homeHeader = (item) => {
    setHome(item);
  };
  const logo = require("./assets/logo.png");
  const defaultNavigationOptions = {
    headerTitleAlign: "center",
    headerLeftContainerStyle: { marginLeft: 0 },
    headerRight: () => (
      <Image
        source={logo}
        style={{ width: 30, height: 30, marginRight: 15 }}
        resizeMode="contain"
      />
    ),
  };
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={defaultNavigationOptions}
      >
        <Drawer.Screen name="Review App" options={{ headerShown: home }}>
          {() => (
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={Home}
                initialParams={{
                  message: "Hello from the Stack",
                  homeHeader: homeHeader,
                }}
                options={{ headerShown: false, homeHeader: { homeHeader } }}
              />
              <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetails}
                options={defaultNavigationOptions}
              />
            </Stack.Navigator>
          )}
        </Drawer.Screen>
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
