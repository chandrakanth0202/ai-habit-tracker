import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { padding: 12, borderBottomWidth: 1, borderColor: '#eee', backgroundColor: '#fff' },
  title: { fontSize: 18, fontWeight: '700' }
});
