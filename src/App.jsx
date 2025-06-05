// C:/Users/HP/ui/src/App.jsx
import React, { useState } from 'react';
import ChatGPTLesson from "./pages/lesson.jsx"; // Updated path for consistency
import ClaudeLesson from "./pages/claude.jsx";   // Updated path
import GeminiLesson from "./pages/gemini.jsx";   // New import

const App = () => {
  const [currentAI, setCurrentAI] = useState('chatgpt'); // State to track selected AI

  const handleToggleAI = (aiType) => {
    setCurrentAI(aiType);
  };

  return (
    <div>
      {currentAI === 'chatgpt' && <ChatGPTLesson onToggleAI={handleToggleAI} />}
      {currentAI === 'claude' && <ClaudeLesson onToggleAI={handleToggleAI} />}
      {currentAI === 'gemini' && <GeminiLesson onToggleAI={handleToggleAI} />}
    </div>
  );
};

export default App;