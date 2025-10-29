export default function useOpenAI() {
  const getHabitSuggestion = async () => {
    try {
      const response = await fetch("http://192.168.1.7:5000/api/habit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (response.ok && data.suggestion) {
        return data.suggestion;
      } else {
        console.error("Backend error:", data);
        return "Error fetching suggestions. Check your API key or backend.";
      }
    } catch (err) {
      console.error("Frontend error:", err);
      return "Error connecting to backend. Make sure it's running.";
    }
  };

  return { getHabitSuggestion };
}
