// backend/server.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();

// Allow all origins (for Expo frontend access)
app.use(cors({ origin: "*" }));
app.use(express.json());

const PORT = 5000;

// Health check route
app.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});

// ✅ Habit suggestion route
app.post("/api/habit", async (req, res) => {
  console.log("📩 Received request at /api/habit");

  try {
    // --- OpenAI API Request ---
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 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`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant suggesting good daily habits.",
          },
          {
            role: "user",
            content: "Suggest one productive daily habit.",
          },
        ],
      }),
    });

    const data = await response.json();

    // --- Handle OpenAI Errors ---
    if (!response.ok) {
      console.error("❌ OpenAI API Error:", data);
      return res
        .status(response.status)
        .json({ error: "OpenAI API Error", details: data });
    }

    // --- Log and Respond ---
    const suggestion = data.choices?.[0]?.message?.content || "No suggestion found.";
    console.log("✅ Sending suggestion:", suggestion);

    res.json({ suggestion });
  } catch (error) {
    console.error("🔥 Server error:", error);
    res.status(500).json({
      error: "Internal Server Error",
      details: error.message,
    });
  }
});

// ✅ Start the backend server
app.listen(PORT, () =>
  console.log(`🚀 Server running on: http://localhost:${PORT}`)
);
