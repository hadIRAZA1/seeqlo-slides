// C:/Users/HP/ui/src/pages/claude.jsx
import React, { useState, useEffect } from 'react'; // Import useEffect for window resize

const ClaudeLesson = ({ onToggleAI }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedAI, setSelectedAI] = useState('claude'); // Start with Claude selected
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // State for mobile detection

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Define your mobile breakpoint
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Test data for Claude slides
  const slidesData = [
    {
      slideNumber: 1,
      title: 'Welcome to Number Detective School!',
      concept: 'Numbers up to 100,000 are all around us and each digit has a special job!',
      content: "Every digit is a clue, and every position tells us something important!",
      visual: 'Big number 87,245 displayed like a detective case file with magnifying glass',
      tryThis: 'Look around your classroom - can you spot any numbers bigger than 1,000?',
      bgColor: '#4F46E5',
    },
    {
      slideNumber: 2,
      title: 'Meet the Building Blocks - Digits!',
      concept: 'All numbers are made from just 10 digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9',
      content: 'Just like the 26 letters make all words, these 10 digits make ALL numbers!',
      visual: 'The 10 digits arranged like colorful building blocks, with arrows showing how they combine to make 45,107',
      tryThis: 'In the number 45,107, count how many different digits you see. (Answer: 5 digits!)',
      bgColor: '#059669',
    },
    {
      slideNumber: 3,
      title: 'The Magic of Place Value!',
      concept: 'Each place in a number has a special value - like each seat in a theater has a different view!',
      content: 'The 4 in 45,107 isn\'t worth 4 - it\'s worth 40,000 because of WHERE it sits!',
      visual: 'Place value chart showing 45,107 with columns:\nTen Thousands | Thousands | Hundreds | Tens | Ones\n      4       |     5     |    1     |  0   |  7',
      tryThis: 'What\'s the value of the digit 5 in 45,107? (Hint: It\'s in the thousands place!)',
      bgColor: '#DC2626',
    },
    {
      slideNumber: 4,
      title: 'Reading Big Numbers Like a Story!',
      concept: 'Reading big numbers follows a pattern - listen for the word "thousand"',
      content: 'The comma helps us see where "thousands" ends and regular numbers begin',
      example: 'Number 78,037 = "seventy-eight thousand thirty-seven"',
      tryThis: 'How would you read 92,456 out loud? Practice saying it: "ninety-two thousand four hundred fifty-six"',
      bgColor: '#7C3AED',
    },
    {
      slideNumber: 5,
      title: 'Zero - The Superhero Placeholder!',
      concept: 'Zero might look like nothing, but it\'s a powerful placeholder that keeps other digits in the right spot',
      content: 'Without zero, we couldn\'t tell the difference between 45 and 405! 🦸',
      example: 'Compare: 189 vs 1,089 - see how zero changes everything!',
      tryThis: 'What happens if we remove the zero from 20,304? We\'d get 2,034 - a completely different number!',
      bgColor: '#EA580C',
    },
    {
      slideNumber: 6,
      title: 'Breaking Numbers Apart - Expanded Form!',
      concept: 'Expanded form shows the value of each digit separately, like taking apart a puzzle',
      content: 'Two ways to show expanded form:',
      example: 'Addition way: 30,000 + 4,000 + 100 + 80 + 7\nMultiplication way: 3×10,000 + 4×1,000 + 1×100 + 8×10 + 7×1',
      visual: 'Number 34,187 "exploding" into: 30,000 + 4,000 + 100 + 80 + 7',
      tryThis: 'Write 56,243 in expanded form using addition!',
      bgColor: '#0891B2',
    },
    {
      slideNumber: 7,
      title: 'The Amazing Times 10 Pattern!',
      concept: 'Each place value is 10 times bigger than the place to its right',
      content: 'Moving left = ×10, Moving right = ÷10',
      visual: 'Stepping stones showing: 5 → 50 → 500 → 5,000 → 50,000 (each step ×10)',
      tryThis: 'If 3 is in the hundreds place (300), what happens when it moves to the thousands place?',
      bgColor: '#BE185D',
    },
    {
      slideNumber: 8,
      title: 'Building Numbers - Composition!',
      concept: 'Composing means putting smaller numbers together to make bigger ones',
      content: 'We can make numbers in many different ways!',
      example: 'We can make 1,500 by: 1,000 + 500, OR 15 × 100, OR 1,499 + 1',
      visual: 'Number blocks showing 100 + 2 = 102, and 100 × 2 = 200',
      tryThis: 'How many ways can you make 2,000? (Hint: 1,000 + 1,000 is just one way!)',
      bgColor: '#059669',
    },
    {
      slideNumber: 9,
      title: 'Taking Numbers Apart - Decomposition!',
      concept: 'Decomposing breaks big numbers into smaller, easier pieces',
      content: 'Numbers can be broken apart in multiple ways, like opening a present! 🎁',
      example: '53,125 = 50,000 + 3,000 + 100 + 20 + 5\nOR 53,125 = 50,000 + 3,125\nOR 53,125 = 53,000 + 125',
      tryThis: 'Decompose 67,892 in two different ways!',
      bgColor: '#7C2D12',
    },
    {
      slideNumber: 10,
      title: 'Numbers in Our World!',
      concept: 'Big numbers aren\'t just for math - they\'re everywhere in real life!',
      content: 'Numbers are all around us in the real world!',
      example: '• Toronto population: 2,794,356 people\n• Your daily steps: 12,500 steps\n• School library books: 15,847 books\n• Video game high score: 99,999 points',
      tryThis: 'Detective Mission: Tonight, find 3 numbers larger than 1,000 in your home!',
      bgColor: '#166534',
    },
    {
      slideNumber: 11,
      title: 'Number Lines - Where Numbers Live!',
      concept: 'Number lines show us where numbers live and how they relate to each other',
      content: '75,000 is closer to 100,000 than to 50,000 - we can see this on the number line!',
      visual: 'Horizontal line from 0 to 100,000 with marks at 25,000, 50,000, 75,000',
      tryThis: 'Where would 30,000 sit on our number line? Between which two marks?',
      bgColor: '#991B1B',
    },
    {
      slideNumber: 12,
      title: 'Comparing Number Giants!',
      concept: 'When comparing big numbers, start from the left (biggest place value) and work right',
      content: 'Comparison Trick: Look at the biggest place values first!',
      example: '67,845 vs 68,234\n6 = 6 (ten thousands), but 8 > 7 (thousands), so 68,234 wins! ⚖️',
      tryThis: 'Which is bigger: 45,321 or 45,678? Look at the hundreds place for your answer!',
      bgColor: '#5B21B6',
    },
    {
      slideNumber: 13,
      title: 'Mental Math Magic!',
      concept: 'Place value makes mental math easier - break numbers apart!',
      content: 'Brain Trick: Instead of adding big numbers, add the smaller parts and rebuild! 🧠',
      example: '34,000 + 25,000 = "34 thousands + 25 thousands = 59 thousands"',
      tryThis: 'What\'s 42,000 + 31,000? Think: 42 + 31 = 73, so 73,000!',
      bgColor: '#0F766E',
    },
    {
      slideNumber: 14,
      title: 'Rounding to Make Friends!',
      concept: 'Rounding helps us work with friendlier numbers that are close to the original',
      content: 'Rounding Rules: Look at the digit to the right. If it\'s 5 or more, round up. If it\'s 4 or less, round down.',
      example: 'Number line showing 67,341 is closer to 67,000 than 68,000',
      tryThis: 'Round 23,678 to the nearest thousand. Is it closer to 23,000 or 24,000?',
      bgColor: '#C2410C',
    },
    {
      slideNumber: 15,
      title: 'Cultural Connections!',
      concept: 'Numbers can have special meanings in different cultures around the world',
      content: 'Numbers connect us to cultures and traditions! 🌍',
      example: '• Chinese culture: 8 is lucky (sounds like "prosperity")\n• Many cultures: 7 is lucky\n• Sports: Jersey numbers have special meaning\n• Indigenous cultures have unique counting systems',
      tryThis: 'Ask family members if any numbers are special in your family\'s culture!',
      bgColor: '#7E22CE',
    },
    {
      slideNumber: 16,
      title: 'Number Patterns Everywhere!',
      concept: 'The place value pattern repeats: ones-tens-hundreds, then thousands-ten thousands-hundred thousands',
      content: 'Pattern blocks show how hundreds-tens-ones repeats in each "period"',
      example: 'Period Names: Ones period, Thousands period, Millions period (and beyond!)',
      tryThis: 'In 456,789, identify the ones period (789) and thousands period (456)!',
      bgColor: '#BE123C',
    },
    {
      slideNumber: 17,
      title: 'Putting It All Together!',
      concept: 'You\'re now a Place Value Detective! Let\'s solve the mystery of 89,476',
      content: 'Graduation: You can now decode ANY number up to 100,000! 🎓',
      example: 'Detective breakdown of 89,476:\n• Read: "eighty-nine thousand four hundred seventy-six"\n• Expanded: 80,000 + 9,000 + 400 + 70 + 6\n• Place values: 8 (ten thousands), 9 (thousands), 4 (hundreds), 7 (tens), 6 (ones)',
      tryThis: 'Pick any 5-digit number and be a detective - break it down completely!',
      bgColor: '#0369A1',
    },
    {
      slideNumber: 18,
      title: 'Quick Review Challenge!',
      concept: 'You\'ve learned about digits, place value, reading, writing, composing, decomposing, and comparing big numbers!',
      content: 'Master Detective Skills: 🏆',
      example: '• Every digit has a place and value\n• Zero is a powerful placeholder\n• Patterns help us understand big numbers\n• Numbers are everywhere in our world!',
      practice: [
        'What is the value of the digit 7 in 47,823? a) 7 b) 70 c) 700 d) 7,000',
        'Write 60,000 + 3,000 + 400 + 50 + 2 in standard form: a) 63,452 b) 60,3452',
        'Which number is larger: 78,901 or 78,910? a) 78,901 b) 78,910',
        'Round 45,678 to the nearest thousand: a) 45,000 b) 46,000',
        'How do you read 50,307? a) Fifty thousand three hundred seven b) Five thousand three hundred seven'
      ],
      tryThis: 'Work through each practice question step by step!',
      bgColor: '#059669',
    },
  ];

  const handleToggle = (aiType) => {
    setSelectedAI(aiType);
    if (onToggleAI) {
      onToggleAI(aiType);
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
      background: 'linear-gradient(135deg, #d4a373 0%, #a27b5c 100%)', // Claude-like gradient
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      padding: 0,
      margin: 0,
      overflowX: 'hidden', // Prevent horizontal scroll
    }}>
      {/* AI Toggle Section */}
      <div style={{
        position: 'absolute',
        top: isMobile ? '10px' : '20px', // Adjusted for mobile
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '25px',
        padding: isMobile ? '2px' : '4px', // Adjusted for mobile
        display: 'flex',
        zIndex: 15,
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        width: isMobile ? '90%' : 'auto', // Occupy more width on mobile
        justifyContent: 'center', // Center buttons on mobile
      }}>
        <button
          onClick={() => handleToggle('chatgpt')}
          style={{
            padding: isMobile ? '8px 12px' : '10px 20px', // Adjusted for mobile
            borderRadius: '20px',
            border: 'none',
            fontWeight: 'bold',
            fontSize: isMobile ? '12px' : '14px', // Adjusted for mobile
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backgroundColor: selectedAI === 'chatgpt' ? '#667eea' : 'transparent',
            color: selectedAI === 'chatgpt' ? 'white' : '#667eea',
            boxShadow: selectedAI === 'chatgpt' ? '0 2px 8px rgba(102, 126, 234, 0.3)' : 'none',
            flex: isMobile ? 1 : 'none', // Make buttons take equal width on mobile
          }}
        >
          ChatGPT
        </button>
        <button
          onClick={() => handleToggle('claude')}
          style={{
            padding: isMobile ? '8px 12px' : '10px 20px', // Adjusted for mobile
            borderRadius: '20px',
            border: 'none',
            fontWeight: 'bold',
            fontSize: isMobile ? '12px' : '14px', // Adjusted for mobile
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backgroundColor: selectedAI === 'claude' ? '#FF6B6B' : 'transparent', // Claude specific color
            color: selectedAI === 'claude' ? 'white' : '#FF6B6B',
            boxShadow: selectedAI === 'claude' ? '0 2px 8px rgba(255, 107, 107, 0.3)' : 'none',
            flex: isMobile ? 1 : 'none', // Make buttons take equal width on mobile
          }}
        >
          Claude
        </button>
        <button
          onClick={() => handleToggle('gemini')}
          style={{
            padding: isMobile ? '8px 12px' : '10px 20px', // Adjusted for mobile
            borderRadius: '20px',
            border: 'none',
            fontWeight: 'bold',
            fontSize: isMobile ? '12px' : '14px', // Adjusted for mobile
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backgroundColor: selectedAI === 'gemini' ? '#4285F4' : 'transparent',
            color: selectedAI === 'gemini' ? 'white' : '#4285F4',
            boxShadow: selectedAI === 'gemini' ? '0 2px 8px rgba(66, 133, 244, 0.3)' : 'none',
            flex: isMobile ? 1 : 'none', // Make buttons take equal width on mobile
          }}
        >
          Gemini
        </button>
      </div>

      {/* AI Prompt Label */}
      <div style={{
        position: 'absolute',
        top: isMobile ? '60px' : '20px', // Adjusted position for mobile
        right: '20px',
        backgroundColor: 'black',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: 'bold',
        zIndex: 10,
        display: isMobile && selectedAI === 'claude' ? 'none' : 'block' // Hide on mobile if Claude
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
        padding: isMobile ? '10px' : '20px', // Smaller padding for mobile
        paddingTop: isMobile ? '120px' : '20px', // Add more top padding on mobile to avoid overlap
        textAlign: 'center',
        overflowY: 'auto', // Allow scrolling if content overflows
      }}>
        {/* Slide Card */}
        <div style={{
          backgroundColor: 'rgba(255, 250, 245, 0.95)', // Slightly warmer white for Claude
          borderRadius: '20px',
          padding: isMobile ? '20px' : '40px', // Smaller padding for mobile
          maxWidth: isMobile ? '95%' : '600px', // Use percentage for mobile width
          width: '100%',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: `4px solid ${currentSlide.bgColor || '#A27B5C'}`, // Default border if bgColor missing
          position: 'relative',
          minHeight: isMobile ? 'calc(100vh - 180px)' : 'auto', // Ensure some height on mobile
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            style={{
              backgroundColor: currentSlideIndex === 0 ? '#ccc' : (currentSlide.bgColor || '#A27B5C'),
              color: 'white',
              border: 'none',
              width: isMobile ? '40px' : '50px', // Smaller button for mobile
              height: isMobile ? '40px' : '50px', // Smaller button for mobile
              borderRadius: '50%',
              fontSize: isMobile ? '1.2rem' : '1.5rem', // Smaller font for mobile
              cursor: currentSlideIndex === 0 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              opacity: currentSlideIndex === 0 ? 0.5 : 1,
              position: 'absolute',
              top: '50%',
              left: isMobile ? '5px' : '-25px', // Adjusted position for mobile
              transform: 'translateY(-50%)',
              zIndex: 20
            }}
            aria-label="Previous slide"
          >
            ←
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={currentSlideIndex === slidesData.length - 1}
            style={{
              backgroundColor: currentSlideIndex === slidesData.length - 1 ? '#ccc' : (currentSlide.bgColor || '#A27B5C'),
              color: 'white',
              border: 'none',
              width: isMobile ? '40px' : '50px', // Smaller button for mobile
              height: isMobile ? '40px' : '50px', // Smaller button for mobile
              borderRadius: '50%',
              fontSize: isMobile ? '1.2rem' : '1.5rem', // Smaller font for mobile
              cursor: currentSlideIndex === slidesData.length - 1 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              opacity: currentSlideIndex === slidesData.length - 1 ? 0.5 : 1,
              position: 'absolute',
              top: '50%',
              right: isMobile ? '5px' : '-25px', // Adjusted position for mobile
              transform: 'translateY(-50%)',
              zIndex: 20
            }}
            aria-label="Next slide"
          >
            →
          </button>

          {/* Slide Number */}
          <div style={{
            position: 'absolute',
            top: isMobile ? '-10px' : '-15px', // Adjusted for mobile
            left: isMobile ? '15px' : '30px', // Adjusted for mobile
            backgroundColor: currentSlide.bgColor || '#A27B5C',
            color: 'white',
            padding: isMobile ? '6px 15px' : '8px 20px', // Adjusted for mobile
            borderRadius: '15px',
            fontSize: isMobile ? '14px' : '16px', // Adjusted for mobile
            fontWeight: 'bold'
          }}>
            Slide {currentSlide.slideNumber}
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: isMobile ? '1.8rem' : '3rem', // Smaller font for mobile
            color: currentSlide.bgColor || '#A27B5C',
            marginBottom: '20px',
            fontWeight: 'bold',
            textShadow: '1px 1px 3px rgba(0,0,0,0.1)'
          }}>
            {currentSlide.title}
          </h1>

          {/* Concept */}
          <div style={{
            backgroundColor: `${currentSlide.bgColor ? currentSlide.bgColor + '20' : 'rgba(162,123,92,0.1)'}`,
            padding: isMobile ? '15px' : '20px', // Smaller padding for mobile
            borderRadius: '15px',
            marginBottom: '30px',
            border: `2px solid ${currentSlide.bgColor ? currentSlide.bgColor + '40' : 'rgba(162,123,92,0.25)'}`
          }}>
            <h2 style={{
              fontSize: isMobile ? '1.2rem' : '1.5rem', // Smaller font for mobile
              color: currentSlide.bgColor || '#A27B5C',
              margin: '0',
              fontWeight: '600'
            }}>
              {currentSlide.concept}
            </h2>
          </div>

          {/* Content */}
          <div style={{
            fontSize: isMobile ? '1rem' : '1.3rem', // Smaller font for mobile
            color: '#4A3B31',
            lineHeight: '1.6',
            marginBottom: '25px',
          }}>
             {currentSlide.content}
          </div>

          {/* Visual Example */}
          {currentSlide.visual && (
            <div style={{
              backgroundColor: '#FDF5EF',
              padding: isMobile ? '15px' : '20px', // Smaller padding for mobile
              borderRadius: '10px',
              marginBottom: '25px',
              fontSize: isMobile ? '0.9rem' : '1.1rem', // Smaller font for mobile
              color: '#5D4037',
              fontFamily: 'serif',
              whiteSpace: 'pre-line'
            }}>
              Visual: {currentSlide.visual}
            </div>
          )}

          {/* Example */}
          {currentSlide.example && (
            <div style={{
              backgroundColor: '#EFEBE9',
              padding: isMobile ? '10px' : '15px', // Smaller padding for mobile
              borderRadius: '10px',
              marginBottom: '25px',
              fontSize: isMobile ? '0.9rem' : '1.1rem', // Smaller font for mobile
              color: '#3E2723',
              border: `2px solid ${currentSlide.bgColor ? currentSlide.bgColor + '30' : 'rgba(162,123,92,0.2)'}`,
              whiteSpace: 'pre-line'
            }}>
              {currentSlide.example}
            </div>
          )}

          {/* Try This */}
          <div style={{
            backgroundColor: '#D7CCC8',
            padding: isMobile ? '15px' : '20px', // Smaller padding for mobile
            borderRadius: '15px',
            border: `2px solid ${currentSlide.bgColor || '#A27B5C'}`,
            marginBottom: '20px'
          }}>
            <div style={{
              fontSize: isMobile ? '1.1rem' : '1.2rem', // Smaller font for mobile
              color: '#260F08',
              fontWeight: 'bold'
            }}>
              {currentSlide.tryThis}
            </div>
            {currentSlide.practice && (
              <ul style={{
                listStyle: 'none',
                padding: 0,
                marginTop: '10px',
                textAlign: 'left',
                fontSize: isMobile ? '0.9rem' : '1rem', // Smaller font for mobile
              }}>
                {currentSlide.practice.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '5px' }}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Navigation - Progress Indicator only */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '15px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        position: 'relative', // Ensure it stays at the bottom
        bottom: 0,
        width: '100%',
        boxSizing: 'border-box', // Include padding in width
      }}>
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
                width: isMobile ? '8px' : '12px', // Smaller dots for mobile
                height: isMobile ? '8px' : '12px', // Smaller dots for mobile
                borderRadius: '50%',
                backgroundColor: index === currentSlideIndex ? (currentSlide.bgColor || '#A27B5C') : 'rgba(255, 255, 255, 0.4)',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
          <span style={{
            color: 'white',
            fontSize: isMobile ? '0.9rem' : '1.1rem', // Smaller font for mobile
            fontWeight: 'bold',
            marginLeft: '10px', // Reduced margin for mobile
          }}>
            {currentSlideIndex + 1} / {slidesData.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ClaudeLesson;