import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧠 AI Habit Tracker</Text>
      <View style={styles.buttons}>
        <Button
          title="AI Habit Suggestions"
          onPress={() => navigation.navigate("Suggestions")}
        />
        <Button
          title="View Habit Logs"
          onPress={() => navigation.navigate("Logs")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 40,
  },
  buttons: {
    width: "60%",
    gap: 20,
  },
});
