import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HabitCard({ text }) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', padding: 12, marginVertical: 6, borderRadius: 8, borderWidth: 1, borderColor: '#eee', shadowColor: '#000', shadowOpacity: 0.03, elevation: 1 },
  text: { fontSize: 16, color: '#111' }
});
