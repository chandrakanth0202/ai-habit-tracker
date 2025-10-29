import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import SuggestionScreen from "./src/screens/SuggestionScreen";
import LogScreen from "./src/screens/LogScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Suggestions" component={SuggestionScreen} />
        <Stack.Screen name="Logs" component={LogScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
