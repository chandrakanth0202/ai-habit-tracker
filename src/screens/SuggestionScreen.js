import React, { useState } from "react";
import { View, Text, Button, ActivityIndicator, StyleSheet, ScrollView } from "react-native";

export default function SuggestionScreen() {
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState("");

  const getSuggestions = async () => {
    setLoading(true);
    setSuggestions("");

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.EXPO_PUBLIC_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content:
                "Suggest 5 daily healthy habits for improving productivity and focus.",
            },
          ],
        }),
      });

      const data = await res.json();
      const text = data.choices[0].message.content;
      setSuggestions(text);
    } catch (error) {
      setSuggestions("Error fetching suggestions. Check your API key.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🤖 AI Habit Suggestions</Text>

      <Button title="Generate Habits" onPress={getSuggestions} />

      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" style={{ marginTop: 20 }} />
      ) : (
        <ScrollView style={styles.scroll}>
          <Text style={styles.text}>{suggestions}</Text>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  scroll: { marginTop: 20 },
  text: { fontSize: 16, lineHeight: 24 },
});
