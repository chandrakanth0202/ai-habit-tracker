AI Habit Tracker

An AI-powered habit suggestion app built with React Native (Expo) and a Node.js + Express backend that connects to the OpenAI API.
It helps users discover productive daily habits using natural language AI responses.

🚀 Features

✨ Suggests one productive daily habit using OpenAI.

🔄 Simple one-tap refresh to get new suggestions.

🧩 Frontend built with React Native + Expo.

⚙️ Backend built with Express for secure API handling.

🔐 API key hidden using environment variables.

📱 Works on web, Android, and iOS.

🏗️ Project Structure
ai-habit-tracker/
│
├── backend/
│   ├── server.js          # Express backend (OpenAI API calls)
│   ├── package.json
│
├── src/
│   ├── hooks/
│   │   └── useOpenAI.js   # Frontend logic for fetching habit suggestions
│   ├── screens/
│   │   └── HomeScreen.js  # Main UI screen
│   ├── App.js
│
├── .gitignore
├── README.md
└── package.json

⚙️ Setup Instructions
1. Clone the Repository
git clone https://github.com/<your-username>/ai-habit-tracker.git
cd ai-habit-tracker

2. Backend Setup
cd backend
npm install
node server.js


✅ You should see:

✅ Server running on http://localhost:5000

3. Frontend Setup

Open another terminal:

cd ..
npm install
npx expo start


Then press:

w → to open on web, or

scan QR code in Expo Go app to run on mobile.

🔑 Environment Variables

In your frontend, create a .env file (optional if using backend proxy):

OPENAI_API_KEY=your_openai_api_key_here


In your backend, replace the hardcoded key or use:

Authorization: `Bearer ${process.env.OPENAI_API_KEY}`

💡 How It Works

The React Native frontend calls the backend endpoint:

http://<your-local-ip>:5000/api/habit


The backend sends a POST request to OpenAI’s Chat Completion API.

The response text is sent back to the frontend and displayed as a daily habit suggestion.

🎥 Demo Recording

Record with Loom or OBS:

Show app in action.

Explain how AI generates habits.

Mention your use of OpenAI + Expo + Express.

🧰 Tech Stack

Frontend: React Native (Expo)

Backend: Node.js + Express

AI Engine: OpenAI GPT-4o-mini

Styling: React Native + Custom Styles

Version Control: Git & GitHub



