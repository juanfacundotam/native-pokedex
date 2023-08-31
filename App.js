import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/context/AuthContext";
import Navigation from "./src/navigation/Navigation";
import 'expo-dev-client';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
      <Navigation />
      </AuthProvider>
    </NavigationContainer>
  );
}



