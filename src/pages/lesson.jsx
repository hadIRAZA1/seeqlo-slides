// C:/Users/HP/ui/src/pages/lesson.jsx
import React, { useState } from 'react';

const ChatGPTLesson = ({ onToggleAI }) => { // Renamed from Lesson for clarity
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedAI, setSelectedAI] = useState('chatgpt');

  // Mock slidesData for demonstration - replace with your actual data
  const slidesData = [
    {
      slideNumber: 1,
      title: 'Welcome to Numberland!',
      concept: 'Numbers are everywhere — and we use them every single day!',
      content: "Imagine you're on a spaceship dashboard… You see numbers glowing all around: 15,000 km/h, 98,300 oxygen units, countdown: 10!",
      tryThis: 'Where do you see numbers every day? Think of at least 3 places!',
      bgColor: '#4F46E5',
    },
    {
      slideNumber: 2,
      title: 'What is a Whole Number?',
      concept: 'Whole numbers are counting numbers — no fractions or decimals!',
      content: "1 coin, 10 apples, 100 stickers — all are whole numbers.",
      tryThis: 'Is 52.5 a whole number? What about 0?',
      bgColor: '#059669',
    },
    {
      slideNumber: 3,
      title: 'Meet the Digits!',
      concept: 'Every number is made up of digits 0 to 9.',
      content: "Digits are like LEGO bricks. You snap them together to build numbers!",
      visual: '4, 7, 1, 0 → used to make 47, 710.',
      tryThis: 'How many digits are in 98,532?',
      bgColor: '#DC2626',
    },
    {
      slideNumber: 4,
      title: 'Place Value Palace',
      concept: 'The position of a digit tells us its value!',
      content: "53,182 = 5 × 10,000 + 3 × 1,000 + 1 × 100 + 8 × 10 + 2 × 1",
      visual: 'Ten Thousands | Thousands | Hundreds | Tens | Ones\n        5      |     3     |    1     |  8   |  2',
      tryThis: 'What is the value of the digit 3 in 53,182?',
      bgColor: '#7C3AED',
    },
    {
      slideNumber: 5,
      title: 'The Power of Zeros',
      concept: 'Zeros are placeholders — they keep digits in the correct spots!',
      content: "Think of zeros as empty boxes that still take up space!",
      example: '10,085 = 1 ten thousand, 0 thousands, 0 hundreds, 8 tens, and 5 ones.',
      tryThis: "What's the value of zero in 40,021?",
      bgColor: '#EA580C',
    },
    {
      slideNumber: 6,
      title: 'Expanded Form Fun',
      concept: 'Show a number\'s parts using expanded form.',
      content: '62,314 = 60,000 + 2,000 + 300 + 10 + 4',
      visual: 'Stretching the number like a slinky! 🛠️',
      tryThis: 'Write 45,087 in expanded form.',
      bgColor: '#0891B2',
    },
    {
      slideNumber: 7,
      title: 'Different Ways to Say It',
      concept: 'Numbers can be written in words, standard form, or expanded form.',
      content: '"Thirty-four thousand, two hundred and nine"',
      example: 'Standard form: 34,209 → Expanded: 30,000 + 4,000 + 200 + 9',
      tryThis: 'Write "seventy-eight thousand, thirty-seven" in standard form.',
      bgColor: '#BE185D',
    },
    {
      slideNumber: 8,
      title: 'Number Line Adventures',
      concept: 'Numbers live on a number line — like houses on a street!',
      content: 'Numbers have addresses on the number line, just like houses on a street.',
      visual: '0 -------- 20,000 -------- 40,000 -------- 60,000 -------- 80,000 -------- 100,000\n                              X (35,000)',
      tryThis: 'Estimate where 82,500 would go.',
      bgColor: '#059669',
    },
    {
      slideNumber: 9,
      title: 'Composing Numbers',
      concept: 'We can build numbers by adding parts.',
      content: 'Like building a LEGO tower from blocks.',
      example: '60,000 + 2,000 + 10 = 62,010',
      tryThis: 'Compose a number using: 40,000 + 900 + 5',
      bgColor: '#7C2D12',
    },
    {
      slideNumber: 10,
      title: 'Decomposing Numbers',
      concept: 'We can break down numbers into parts.',
      content: 'Numbers can be taken apart in different ways!',
      example: '53,125 → 50,000 + 3,000 + 100 + 20 + 5 OR 53,125 → 25 + 100 + 3,000 + 50,000 (in any order!)',
      tryThis: 'Decompose 80,032 into its place value parts.',
      bgColor: '#166534',
    },
    {
      slideNumber: 11,
      title: 'Numbers in Real Life',
      concept: 'Big numbers help us talk about how much.',
      content: 'Numbers are everywhere around us!',
      example: '• A concert stadium holds 78,000 people.\n• A tree is 92,000 days old (about 250 years)!\n• You have 4,209 digital photos.',
      tryThis: 'What\'s a big number you\'ve heard recently?',
      bgColor: '#991B1B',
    },
    {
      slideNumber: 12,
      title: 'Digit Order Matters',
      concept: '53,182 is very different from 23,581!',
      content: 'Swapping digits is like swapping ingredients in a recipe.',
      example: 'The position of each digit completely changes the number\'s value!',
      tryThis: 'Which is bigger: 82,153 or 21,385?',
      bgColor: '#5B21B6',
    },
    {
      slideNumber: 13,
      title: 'Multiply to Find Place Value',
      concept: 'Multiply the digit by its place to find the value.',
      content: 'Each digit has a job based on where it sits!',
      example: '15,236 → 5 = 5 × 1,000 = 5,000 and 2 = 2 × 100 = 200',
      tryThis: 'What is the value of the 7 in 72,438?',
      bgColor: '#0F766E',
    },
    {
      slideNumber: 14,
      title: 'The Magic of Tens',
      concept: 'Each place is 10× bigger than the one to its right!',
      content: 'It\'s like a "zoom out" pattern!',
      visual: '10 → 100 → 1,000 → 10,000 → 100,000 🪄',
      tryThis: 'What\'s 10 times more than 6,000?',
      bgColor: '#C2410C',
    },
    {
      slideNumber: 15,
      title: 'Period Power',
      concept: 'Each group of 3 digits makes a "period" — like thousands.',
      content: 'Periods help us read big numbers correctly.',
      example: 'Number: 78,037 → "Seventy-eight thousand, thirty-seven"\nRemember: Don\'t write "78 000 37"!',
      tryThis: 'Say 91,004 out loud. What\'s the thousands period?',
      bgColor: '#7E22CE',
    },
    {
      slideNumber: 16,
      title: 'Zero Is Important!',
      concept: 'Without zero, the whole number shifts!',
      content: 'Zero holds the place so other digits stay in position.',
      example: '1089 ≠ 189 (1 thousand vs. 1 hundred!)',
      tryThis: 'Which number is larger: 2,405 or 2,045?',
      bgColor: '#BE123C',
    },
    {
      slideNumber: 17,
      title: 'Flexible Math Thinking',
      concept: 'Breaking apart numbers helps with mental math!',
      content: 'Try different ways to build and break numbers.',
      example: '23,000 + 4,000 = 27,000 OR 25,000 - 2,000 = 23,000',
      tryThis: 'How many ways can you make 50,000 using place values?',
      bgColor: '#0369A1',
    },
    {
      slideNumber: 18,
      title: 'Recap – What Did We Learn?',
      concept: 'Let\'s review our number journey!',
      content: 'You\'re a number master now! 🎉',
      example: '• Every digit has a job (place value)\n• Numbers can be stretched (expanded) or snapped (composed)\n• Place matters — 123 is not the same as 321!\n• Zero is a hero placeholder\n• Numbers are EVERYWHERE in life!',
      tryThis: 'Can you explain place value to a friend?',
      bgColor: '#059669',
    },
    {
      slideNumber: 19,
      title: 'Let\'s Practice!',
      concept: 'Time to test your number skills!',
      content: 'Challenge yourself with these questions:',
      example: '1. What is the expanded form of 42,106?\n2. What does the digit 9 represent in 19,384?\n3. Write "eighty-five thousand, two hundred and one" in standard form.\n4. Decompose 60,040 into 3 parts.\n5. Which number is larger: 73,820 or 78,320?',
      tryThis: 'Work through each problem step by step!',
      bgColor: '#DC2626',
    },
  ];

  const handleToggle = (aiType) => {
    setSelectedAI(aiType);
    if (onToggleAI) {
      onToggleAI(aiType); // Call the prop function to inform parent
    }
  };

  const currentSlide = slidesData[currentSlideIndex];

  const nextSlide = () => {
    if (currentSlideIndex < slidesData.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      padding: 0,
      margin: 0,
      overflow: 'hidden'
    }}>
      {/* AI Toggle Section */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '25px',
        padding: '4px',
        display: 'flex',
        zIndex: 15,
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        <button
          onClick={() => handleToggle('chatgpt')}
          style={{
            padding: '10px 20px',
            borderRadius: '20px',
            border: 'none',
            fontWeight: 'bold',
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backgroundColor: selectedAI === 'chatgpt' ? '#667eea' : 'transparent',
            color: selectedAI === 'chatgpt' ? 'white' : '#667eea',
            boxShadow: selectedAI === 'chatgpt' ? '0 2px 8px rgba(102, 126, 234, 0.3)' : 'none'
          }}
        >
          ChatGPT
        </button>
        <button
          onClick={() => handleToggle('claude')}
          style={{
            padding: '10px 20px',
            borderRadius: '20px',
            border: 'none',
            fontWeight: 'bold',
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backgroundColor: selectedAI === 'claude' ? '#FF6B6B' : 'transparent', // Claude color
            color: selectedAI === 'claude' ? 'white' : '#FF6B6B',
            boxShadow: selectedAI === 'claude' ? '0 2px 8px rgba(255, 107, 107, 0.3)' : 'none'
          }}
        >
          Claude
        </button>
        <button
          onClick={() => handleToggle('gemini')}
          style={{
            padding: '10px 20px',
            borderRadius: '20px',
            border: 'none',
            fontWeight: 'bold',
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backgroundColor: selectedAI === 'gemini' ? '#4285F4' : 'transparent', // Gemini color
            color: selectedAI === 'gemini' ? 'white' : '#4285F4',
            boxShadow: selectedAI === 'gemini' ? '0 2px 8px rgba(66, 133, 244, 0.3)' : 'none'
          }}
        >
          Gemini
        </button>
      </div>

      {/* ChatGPT/Claude Prompt Label */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        backgroundColor: 'black',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: 'bold',
        zIndex: 10
      }}>
        {selectedAI === 'chatgpt' ? 'ChatGPT' : (selectedAI === 'claude' ? 'Claude' : 'Gemini')} Prompt
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        textAlign: 'center'
      }}>
        {/* Slide Card */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          padding: '60px',
          maxWidth: '800px',
          width: '100%',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: `4px solid ${currentSlide.bgColor}`,
          position: 'relative'
        }}>
          {/* Slide Number */}
          <div style={{
            position: 'absolute',
            top: '-15px',
            left: '30px',
            backgroundColor: currentSlide.bgColor,
            color: 'white',
            padding: '8px 20px',
            borderRadius: '15px',
            fontSize: '16px',
            fontWeight: 'bold'
          }}>
            Slide {currentSlide.slideNumber}
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: '3rem',
            color: currentSlide.bgColor,
            marginBottom: '20px',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}>
            {currentSlide.title}
          </h1>

          {/* Concept */}
          <div style={{
            backgroundColor: `${currentSlide.bgColor}20`,
            padding: '20px',
            borderRadius: '15px',
            marginBottom: '30px',
            border: `2px solid ${currentSlide.bgColor}40`
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              color: currentSlide.bgColor,
              margin: '0',
              fontWeight: '600'
            }}>
              📖 {currentSlide.concept}
            </h2>
          </div>

          {/* Content */}
          <div style={{
            fontSize: '1.3rem',
            color: '#333',
            lineHeight: '1.6',
            marginBottom: '25px',
            fontStyle: 'italic'
          }}>
            💬 "{currentSlide.content}"
          </div>

          {/* Visual Example */}
          {currentSlide.visual && (
            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '20px',
              borderRadius: '10px',
              marginBottom: '25px',
              fontSize: '1.1rem',
              color: '#555',
              fontFamily: 'monospace',
              whiteSpace: 'pre-line'
            }}>
              👀 Visual: {currentSlide.visual}
            </div>
          )}

          {/* Example */}
          {currentSlide.example && (
            <div style={{
              backgroundColor: '#e8f5e8',
              padding: '15px',
              borderRadius: '10px',
              marginBottom: '25px',
              fontSize: '1.1rem',
              color: '#2d5a3d',
              border: '2px solid #90c695',
              whiteSpace: 'pre-line'
            }}>
              🌟 {currentSlide.example}
            </div>
          )}

          {/* Try This */}
          <div style={{
            backgroundColor: '#fff3cd',
            padding: '20px',
            borderRadius: '15px',
            border: '2px solid #ffc107',
            marginBottom: '20px'
          }}>
            <div style={{
              fontSize: '1.2rem',
              color: '#856404',
              fontWeight: 'bold'
            }}>
              🎯 Try This: {currentSlide.tryThis}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '30px 60px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          disabled={currentSlideIndex === 0}
          style={{
            backgroundColor: currentSlideIndex === 0 ? '#ccc' : currentSlide.bgColor,
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '25px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: currentSlideIndex === 0 ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'all 0.3s ease',
            opacity: currentSlideIndex === 0 ? 0.5 : 1
          }}
        >
          ← Previous
        </button>

        {/* Progress Indicator */}
        <div style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center'
        }}>
          {slidesData.map((_, index) => (
            <div
              key={index}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: index === currentSlideIndex ? currentSlide.bgColor : 'rgba(255, 255, 255, 0.4)',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
          <span style={{
            color: 'white',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            marginLeft: '15px'
          }}>
            {currentSlideIndex + 1} / {slidesData.length}
          </span>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          disabled={currentSlideIndex === slidesData.length - 1}
          style={{
            backgroundColor: currentSlideIndex === slidesData.length - 1 ? '#ccc' : currentSlide.bgColor,
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '25px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: currentSlideIndex === slidesData.length - 1 ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'all 0.3s ease',
            opacity: currentSlideIndex === slidesData.length - 1 ? 0.5 : 1
          }}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default ChatGPTLesson;