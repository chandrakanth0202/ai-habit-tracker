import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const dummyLogs = [
  { id: "1", habit: "Morning Walk", status: "✅ Done" },
  { id: "2", habit: "Meditation", status: "✅ Done" },
  { id: "3", habit: "Reading 10 Pages", status: "❌ Missed" },
];

export default function LogScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📅 Habit Log</Text>

      <FlatList
        data={dummyLogs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.logItem}>
            <Text style={styles.habit}>{item.habit}</Text>
            <Text style={styles.status}>{item.status}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  logItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  habit: { fontSize: 16 },
  status: { fontSize: 16, fontWeight: "bold" },
});
