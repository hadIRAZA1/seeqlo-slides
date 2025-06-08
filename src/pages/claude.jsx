import React, { useState, useEffect } from 'react';

const ClaudeLesson = ({ onToggleAI, onSelectPrompt }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


const slidesData = [
  {
    slideNumber: 1,
    title: 'Welcome to Number Detective School!',
    concept: 'Numbers up to 100,000 are all around us and each digit has a special job!',
    Idea: 'Big number 87,245 displayed like a detective case file with magnifying glass',
    sayIt: 'Every digit is a clue, and every position tells us something important!',
    tryThis: 'Look around your classroom - can you spot any numbers bigger than 1,000?',
    bgColor: '#0D9488'
  },
  {
    slideNumber: 2,
    title: 'Meet the Building Blocks - Digits!',
    concept: 'All numbers are made from just 10 digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9',
    Idea: 'The 10 digits arranged like colorful building blocks, with arrows showing how they combine to make 45,107',
    realLife: 'Just like the 26 letters make all words, these 10 digits make ALL numbers!',
    tryThis: 'In the number 45,107, count how many different digits you see. (Answer: 5 digits!)',
    bgColor: '#BE123C'
  },
  {
    slideNumber: 3,
    title: 'The Magic of Place Value!',
    concept: 'Each place in a number has a special value - like each seat in a theater has a different view!',
    Idea: 'Place value chart showing 45,107 with columns labeled: Ten Thousands | Thousands | Hundreds | Tens | Ones',
    sayIt: "The 4 in 45,107 isn't worth 4 - it's worth 40,000 because of WHERE it sits!",
    tryThis: "What's the value of the digit 5 in 45,107? (Hint: It's in the thousands place!)",
    bgColor: '#7C3AED'
  },
  {
    slideNumber: 4,
    title: 'Reading Big Numbers Like a Story!',
    concept: 'Reading big numbers follows a pattern - listen for the word "thousand"',
    Idea: 'Number 78,037 with speech bubble showing "seventy-eight thousand thirty-seven"',
    tip: 'The comma helps us see where "thousands" ends and regular numbers begin',
    tryThis: 'How would you read 92,456 out loud? Practice saying it: "ninety-two thousand four hundred fifty-six"',
    bgColor: '#EA580C'
  },
  {
    slideNumber: 5,
    title: 'Zero - The Superhero Placeholder!',
    concept: "Zero might look like nothing, but it's a powerful placeholder that keeps other digits in the right spot",
    Idea: 'Compare 189 vs 1,089 in two columns showing how zero changes everything',
    fact: "Without zero, we couldn't tell the difference between 45 and 405!",
    tryThis: "What happens if we remove the zero from 20,304? We'd get 2,034 - a completely different number!",
    bgColor: '#059669'
  },
  {
    slideNumber: 6,
    title: 'Breaking Numbers Apart - Expanded Form!',
    concept: 'Expanded form shows the value of each digit separately, like taking apart a puzzle',
    Idea: 'Number 34,187 "exploding" into: 30,000 + 4,000 + 100 + 80 + 7',
    ways: {
      addition: '30,000 + 4,000 + 100 + 80 + 7',
      multiplication: '3×10,000 + 4×1,000 + 1×100 + 8×10 + 7×1'
    },
    tryThis: 'Write 56,243 in expanded form using addition!',
    bgColor: '#5B21B6'
  },
  {
    slideNumber: 7,
    title: 'The Amazing Times 10 Pattern!',
    concept: 'Each place value is 10 times bigger than the place to its right',
    Idea: 'Stepping stones showing: 5 → 50 → 500 → 5,000 → 50,000 (each step ×10)',
    patternMagic: 'Moving left = ×10, Moving right = ÷10',
    tryThis: 'If 3 is in the hundreds place (300), what happens when it moves to the thousands place?',
    bgColor: '#C2410C'
  },
  {
    slideNumber: 8,
    title: 'Building Numbers - Composition!',
    concept: 'Composing means putting smaller numbers together to make bigger ones',
    Idea: 'Number blocks showing 100 + 2 = 102, and 100 × 2 = 200',
    example: 'We can make 1,500 by: 1,000 + 500, OR 15 × 100, OR 1,499 + 1',
    tryThis: 'How many ways can you make 2,000? (Hint: 1,000 + 1,000 is just one way!)',
    bgColor: '#0369A1'
  },
  {
    slideNumber: 9,
    title: 'Taking Numbers Apart - Decomposition!',
    concept: 'Decomposing breaks big numbers into smaller, easier pieces',
    Idea: 'Number 53,125 breaking apart like opening a present: 50,000 + 3,000 + 100 + 20 + 5',
    ways: ['50,000 + 3,125', '53,000 + 125', '40,000 + 13,125'],
    tryThis: 'Decompose 67,892 in two different ways!',
    bgColor: '#4F46E5'
  },
  {
    slideNumber: 10,
    title: 'Numbers in Our World!',
    concept: ".Big numbers aren't just for math - they're everywhere in real life!",
    examples: [
      'Toronto population: 2,794,356 people',
      'Your daily steps: 12,500 steps',
      'School library books: 15,847 books',
      'Video game high score: 99,999 points'
    ],
    tryThis: 'Estimate how many students are in your entire school - is it closer to 1,000 or 100?',
    bgColor: '#065F46'
  },
  {
    slideNumber: 11,
    title: 'Place Value Chart Fun!',
    concept: 'Use a place value chart to break down big numbers quickly',
    Idea: 'Chart filled in for 84,263 with labeled columns',
    activity: 'Write a number on your board and label each digit’s place value',
    tryThis: 'Make a chart for 65,409. What’s in the thousands place?',
    bgColor: '#991B1B'
  },
  {
    slideNumber: 12,
    title: 'Comparing Big Numbers!',
    concept: 'Start comparing digits from left to right to find which number is bigger',
    Idea: 'Side-by-side comparison of 56,492 and 56,391 with highlights on different digits',
    rule: 'First different digit tells us which number is greater',
    tryThis: 'Which is bigger: 45,103 or 45,301?',
    bgColor: '#7C3D12'
  },
  {
    slideNumber: 13,
    title: 'Ordering Numbers!',
    concept: 'Line numbers up from greatest to least or least to greatest by comparing place values',
    Idea: 'Number line or arrows with 32,456 < 33,401 < 34,010',
    example: 'Small to big: 42,103, 42,130, 42,301',
    tryThis: 'Put these in order: 55,001, 54,999, 55,010',
    bgColor: '#166534'
  },
  {
    slideNumber: 14,
    title: 'Estimating with Place Value!',
    concept: 'Use place value to round numbers and estimate faster',
    Idea: 'Numbers like 47,892 rounded to 50,000 or 47,900',
    tip: 'Look at the digit to the right of the place you’re rounding to!',
    tryThis: 'Round 23,589 to the nearest thousand. What did you get?',
    bgColor: '#5B21B6'
  },
  {
    slideNumber: 15,
    title: 'Using Number Lines!',
    concept: 'Place numbers on a number line to see where they belong and compare easily',
    Idea: 'Number line with marks at 10,000, 20,000...100,000',
    connection: 'It’s like a ruler for big numbers!',
    tryThis: 'Plot 34,500 on a number line between 30,000 and 40,000',
    bgColor: '#0F766E'
  },
  {
    slideNumber: 16,
    title: 'Word Form vs Standard Form!',
    concept: 'Numbers can be written in words or digits - both mean the same thing!',
    Idea: 'Match-up activity showing "sixty-two thousand one hundred eight" = 62,108',
    tip: 'Say it out loud to help write it in word form!',
    tryThis: 'Write 45,019 in word form. Then try 71,402!',
    bgColor: '#C2410C'
  },
  {
    slideNumber: 17,
    title: 'What’s Missing?',
    concept: 'Sometimes you’ll see a number with a missing digit - use clues to solve the mystery!',
    Idea: '45_07 shown with possible answers (45007, 45507, 45607)',
    puzzle: 'The number is greater than 45,500 but less than 45,600. What’s the missing digit?',
    tryThis: 'Find the missing digit in 3_2,145 if the number is between 32,000 and 33,000',
    bgColor: '#7E22CE'
  },
  {
    slideNumber: 18,
    title: 'You’re a Place Value Pro!',
    concept: 'You’ve mastered reading, writing, and understanding big numbers!',
    Idea: 'Certificate with “Place Value Detective” title and a magnifying glass',
    celebrate: 'Give yourself a round of applause and show off your skills!',
    tryThis: 'Create your own 5-digit number and explain its place value like a teacher!',
    bgColor: '#BE123C'
  }
];

  const currentSlide = slidesData[currentSlideIndex];
  const currentProgressBarColor = currentSlide.bgColor || '#667eea';

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      (prevIndex - 1 + slidesData.length) % slidesData.length
    );
  };

  // Helper function to render styled info blocks
  const renderInfoBlock = (label, value) => (
    <div style={{
      backgroundColor: '#F0F4F8',
      padding: '15px',
      borderRadius: '10px',
      marginBottom: '15px',
      textAlign: 'left',
      borderLeft: `5px solid ${currentSlide.bgColor || '#667eea'}`
    }}>
      <strong style={{ color: currentSlide.bgColor || '#667eea' }}>{label}:</strong>
      <span style={{ marginLeft: '8px', color: '#333' }}>{value}</span>
    </div>
  );

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: 'linear-gradient(135deg, #A7BFEB 0%, #87A9EB 100%)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      padding: 0,
      margin: 0,
      overflowX: 'hidden',
      fontFamily: 'Arial, sans-serif',
    }}>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: isMobile ? '10px' : '20px',
        textAlign: 'center',
        overflowY: 'auto',
      }}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          padding: isMobile ? '20px' : '40px',
          maxWidth: isMobile ? '95%' : '600px',
          width: '100%',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: `4px solid ${currentSlide.bgColor || '#667eea'}`,
          position: 'relative',
          minHeight: isMobile ? 'calc(100vh - 180px)' : 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          color: '#333',
        }}>

          <button
            onClick={handlePrevSlide}
            disabled={currentSlideIndex === 0}
            style={{
              backgroundColor: currentSlideIndex === 0 ? '#ccc' : (currentSlide.bgColor || '#667eea'),
              color: 'white', border: 'none', width: isMobile ? '40px' : '50px', height: isMobile ? '40px' : '50px', borderRadius: '50%', fontSize: isMobile ? '1.2rem' : '1.5rem', cursor: currentSlideIndex === 0 ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', opacity: currentSlideIndex === 0 ? 0.5 : 1, position: 'absolute', top: '50%', left: isMobile ? '5px' : '-25px', transform: 'translateY(-50%)', zIndex: 20
            }}
            aria-label="Previous slide"
          >
            ←
          </button>

          <button
            onClick={handleNextSlide}
            disabled={currentSlideIndex === slidesData.length - 1}
            style={{
              backgroundColor: currentSlideIndex === slidesData.length - 1 ? '#ccc' : (currentSlide.bgColor || '#667eea'),
              color: 'white', border: 'none', width: isMobile ? '40px' : '50px', height: isMobile ? '40px' : '50px', borderRadius: '50%', fontSize: isMobile ? '1.2rem' : '1.5rem', cursor: currentSlideIndex === slidesData.length - 1 ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', opacity: currentSlideIndex === slidesData.length - 1 ? 0.5 : 1, position: 'absolute', top: '50%', right: isMobile ? '5px' : '-25px', transform: 'translateY(-50%)', zIndex: 20
            }}
            aria-label="Next slide"
          >
            →
          </button>

          <div style={{
            position: 'absolute', top: isMobile ? '-10px' : '-15px', left: isMobile ? '15px' : '30px', backgroundColor: currentSlide.bgColor || '#667eea', color: 'white', padding: isMobile ? '6px 15px' : '8px 20px', borderRadius: '15px', fontSize: isMobile ? '14px' : '16px', fontWeight: 'bold', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', zIndex: 10,
          }}>
            Slide {currentSlide.slideNumber}
          </div>

          {currentSlide.title && (
            <h1 style={{ fontSize: isMobile ? '1.8rem' : '3rem', marginBottom: '20px', color: currentSlide.bgColor || '#4F46E5', fontWeight: 'bold', textShadow: '1px 1px 3px rgba(0,0,0,0.1)' }}>
              {currentSlide.title}
            </h1>
          )}

          {currentSlide.concept && (
            <div style={{
              backgroundColor: `${currentSlide.bgColor ? currentSlide.bgColor + '20' : 'rgba(102,126,234,0.1)'}`, padding: '15px', borderRadius: '15px', marginBottom: '20px', border: `2px solid ${currentSlide.bgColor ? currentSlide.bgColor + '40' : 'rgba(102,126,234,0.25)'}`
            }}>
              <h2 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', color: currentSlide.bgColor || '#4F46E5', margin: 0, fontWeight: '600' }}>
                {currentSlide.concept}
              </h2>
            </div>
          )}

          {currentSlide.Idea && (
            <div style={{
              backgroundColor: '#F5F5F5', padding: '15px', borderRadius: '10px', marginBottom: '15px', fontSize: '1rem', color: '#555', fontFamily: 'serif'
            }}>
              <strong>Idea:</strong> {currentSlide.Idea}
            </div>
          )}

          {currentSlide.sayIt && renderInfoBlock('Say It', currentSlide.sayIt)}
          {currentSlide.realLife && renderInfoBlock('Real Life', currentSlide.realLife)}
          {currentSlide.tip && renderInfoBlock('Tip', currentSlide.tip)}
          {currentSlide.fact && renderInfoBlock('Fact', currentSlide.fact)}
          {currentSlide.patternMagic && renderInfoBlock('Pattern Magic', currentSlide.patternMagic)}
          {currentSlide.example && renderInfoBlock('Example', currentSlide.example)}
          {currentSlide.rule && renderInfoBlock('Rule', currentSlide.rule)}
          {currentSlide.activity && renderInfoBlock('Activity', currentSlide.activity)}
          {currentSlide.connection && renderInfoBlock('Connection', currentSlide.connection)}
          {currentSlide.puzzle && renderInfoBlock('Puzzle', currentSlide.puzzle)}
          {currentSlide.celebrate && renderInfoBlock('Celebrate', currentSlide.celebrate)}
          
          {currentSlide.examples && (
            <div style={{
              backgroundColor: '#E0E0E0', padding: '15px', borderRadius: '10px', marginBottom: '15px', color: '#444', textAlign: 'left'
            }}>
              <h3 style={{ marginTop: 0, color: currentSlide.bgColor || '#4F46E5' }}>Examples:</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                {currentSlide.examples.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
          )}

          {currentSlide.ways && (
            <div style={{ backgroundColor: '#E0E0E0', padding: '15px', borderRadius: '10px', marginBottom: '15px', color: '#444', textAlign: 'left' }}>
              <h3 style={{ marginTop: 0, color: currentSlide.bgColor || '#4F46E5' }}>Ways to Decompose:</h3>
              {Array.isArray(currentSlide.ways) ? (
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                  {currentSlide.ways.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
              ) : (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  {Object.entries(currentSlide.ways).map(([key, value]) => (
                    <li key={key}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {currentSlide.tryThis && (
            <div style={{
              backgroundColor: '#FFFBEB', padding: '15px', borderRadius: '15px', border: `2px solid #FBBF24`, margin: '20px 0'
            }}>
              <p style={{ fontSize: isMobile ? '1.1rem' : '1.2rem', fontWeight: 'bold', color: '#B45309', margin: 0 }}>
                💡 Try This: {currentSlide.tryThis}
              </p>
            </div>
          )}
        </div>
      </div>

      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '15px', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', position: 'relative', bottom: 0, width: '100%', boxSizing: 'border-box', gap: '20px',
      }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {slidesData.map((_, index) => (
            <div
              key={index}
              style={{
                width: isMobile ? '8px' : '12px', height: isMobile ? '8px' : '12px', borderRadius: '50%', backgroundColor: index === currentSlideIndex ? currentProgressBarColor : 'rgba(255, 255, 255, 0.4)', transition: 'all 0.3s ease'
              }}
            />
          ))}
          <span style={{ color: 'white', fontSize: isMobile ? '0.9rem' : '1.1rem', fontWeight: 'bold', marginLeft: '5px' }}>
            {currentSlideIndex + 1}/{slidesData.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ClaudeLesson;