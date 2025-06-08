// C:/Users/HP/ui/src/App.jsx
import React, { useState, useEffect } from 'react';

// Import all Prompt 1 components
import ChatGPTLesson from "./pages/lesson.jsx";
import ClaudeLesson from "./pages/claude.jsx";
import GeminiLesson from "./pages/gemini.jsx";

// Import all Prompt 2 components
import ChatGPTPrompt2Lesson from "./pages/chatgptPrompt2.jsx";
import ClaudePrompt2Lesson from "./pages/claudePrompt2.jsx";
import GeminiPrompt2Lesson from "./pages/geminiPrompt2.jsx";

const App = () => {
  const [currentAI, setCurrentAI] = useState('chatgpt');
  const [currentPrompt, setCurrentPrompt] = useState('prompt1');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggleAI = (aiType) => {
    setCurrentAI(aiType);
    // REMOVE THIS LINE: setCurrentPrompt('prompt1');
    // By removing the above line, the currentPrompt state will persist when switching AIs.
  };

  const handleSelectPrompt = (prompt) => {
    setCurrentPrompt(prompt);
  };

  const renderActiveLesson = () => {
    const isPrompt2 = currentPrompt === 'prompt2';

    switch (currentAI) {
      case 'claude':
        return isPrompt2 ? (
          <ClaudePrompt2Lesson onToggleAI={handleToggleAI} onSelectPrompt={handleSelectPrompt} />
        ) : (
          <ClaudeLesson onToggleAI={handleToggleAI} onSelectPrompt={handleSelectPrompt} />
        );

      case 'gemini':
        return isPrompt2 ? (
          <GeminiPrompt2Lesson onToggleAI={handleToggleAI} onSelectPrompt={handleSelectPrompt} />
        ) : (
          <GeminiLesson onToggleAI={handleToggleAI} onSelectPrompt={handleSelectPrompt} />
        );

      case 'chatgpt':
      default:
        return isPrompt2 ? (
          <ChatGPTPrompt2Lesson onToggleAI={handleToggleAI} onSelectPrompt={handleSelectPrompt} />
        ) : (
          <ChatGPTLesson onToggleAI={handleToggleAI} onSelectPrompt={handleSelectPrompt} />
        );
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100vw', overflow: 'hidden' }}>
      {/* AI Selection Buttons - Centrally managed in App.jsx */}
      <div style={{
        position: 'absolute',
        top: isMobile ? '10px' : '20px',
        right: isMobile ? '10px' : '20px',
        display: 'flex',
        gap: isMobile ? '5px' : '10px',
        zIndex: 100,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '15px',
        padding: isMobile ? '5px 10px' : '8px 15px',
      }}>
        <button
          onClick={() => handleToggleAI('chatgpt')}
          style={{
            padding: isMobile ? '8px 12px' : '10px 20px',
            borderRadius: '20px',
            border: 'none',
            backgroundColor: currentAI === 'chatgpt' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            cursor: 'pointer',
            fontSize: isMobile ? '0.8rem' : '1rem',
            transition: 'background-color 0.3s ease',
            outline: 'none',
          }}
        >
          ChatGPT
        </button>
        <button
          onClick={() => handleToggleAI('gemini')}
          style={{
            padding: isMobile ? '8px 12px' : '10px 20px',
            borderRadius: '20px',
            border: 'none',
            backgroundColor: currentAI === 'gemini' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            cursor: 'pointer',
            fontSize: isMobile ? '0.8rem' : '1rem',
            transition: 'background-color 0.3s ease',
            outline: 'none',
          }}
        >
          Gemini
        </button>
        <button
          onClick={() => handleToggleAI('claude')}
          style={{
            padding: isMobile ? '8px 12px' : '10px 20px',
            borderRadius: '20px',
            border: 'none',
            backgroundColor: currentAI === 'claude' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            cursor: 'pointer',
            fontSize: isMobile ? '0.8rem' : '1rem',
            transition: 'background-color 0.3s ease',
            outline: 'none',
          }}
        >
          Claude
        </button>
      </div>

      {/* Prompt Selection Buttons - Centrally managed in App.jsx */}
      <div style={{
        position: 'absolute',
        top: isMobile ? '55px' : '70px',
        right: isMobile ? '10px' : '20px',
        display: 'flex',
        gap: isMobile ? '5px' : '10px',
        zIndex: 100,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '15px',
        padding: isMobile ? '5px 10px' : '8px 15px',
      }}>
        <button
          onClick={() => handleSelectPrompt('prompt1')}
          style={{
            padding: isMobile ? '8px 12px' : '10px 20px',
            borderRadius: '20px',
            border: 'none',
            backgroundColor: currentPrompt === 'prompt1' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            cursor: 'pointer',
            fontSize: isMobile ? '0.8rem' : '1rem',
            transition: 'background-color 0.3s ease',
            outline: 'none',
          }}
        >
          Prompt 1
        </button>
        <button
          onClick={() => handleSelectPrompt('prompt2')}
          style={{
            padding: isMobile ? '8px 12px' : '10px 20px',
            borderRadius: '20px',
            border: 'none',
            backgroundColor: currentPrompt === 'prompt2' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            cursor: 'pointer',
            fontSize: isMobile ? '0.8rem' : '1rem',
            transition: 'background-color 0.3s ease',
            outline: 'none',
          }}
        >
          Prompt 2
        </button>
      </div>

      {renderActiveLesson()}
    </div>
  );
};

export default App;