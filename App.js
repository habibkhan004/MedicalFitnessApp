import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import FitnessTipsScreen from "./screens/FitnessTipsScreen";
import ViewDoctorsScreen from "./screens/ViewDoctorsScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="View Doctors" component={ViewDoctorsScreen} />
        <Drawer.Screen name="Fitness Tips" component={FitnessTipsScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="login" component={LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
