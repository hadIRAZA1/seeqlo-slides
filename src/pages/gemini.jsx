// C:/Users/HP/ui/src/pages/gemini.jsx
import React, { useState, useEffect } from 'react'; // Import useEffect for window resize

const GeminiLesson = ({ onToggleAI }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedAI, setSelectedAI] = useState('gemini'); // Start with Gemini selected
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // State for mobile detection

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Define your mobile breakpoint
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Test data for Gemini slides
  const slidesData = [
    {
      slideNumber: 1,
      title: "Welcome to the World of Big Numbers! 🚀",
      concept: "Number Adventures Up To 100,000!",
      content: "Hey Super Mathematicians! 👋 Get ready for an exciting journey into the world of whole numbers! We're going to explore numbers up to 100,000 – that's like counting all the stars you can see, and then some!",
      bgColor: "#FF6B6B", // Bright red
      visual: "We'll learn how to:\n- Read and write big numbers\n- Understand place value\n- See numbers in everyday life\n- Work with digits and their positions",
      example: "Think of the biggest number you know! What is it?\n\nMaybe it's 1,000? Or 10,000? By the end of this lesson, you'll be comfortable with numbers up to 100,000!",
      tryThis: "Look around you - can you spot any numbers bigger than 100?"
    },
    {
      slideNumber: 2,
      title: "Decoding Digits: The Building Blocks! 🧱",
      concept: "Numbers are made of 10 digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9",
      content: "Just like the alphabet's letters form words, these 10 digits create ALL numbers! Think of them as your number LEGOs!",
      bgColor: "#6A5ACD", // Slate blue
      visual: "Imagine 74,205. It uses 5 different digits from our building blocks! Each digit is a clue!",
      example: "Can you list the digits used in the number 98,765?",
      tryThis: "Count how many digits are in your phone number (don't share the number!)"
    },
    {
      slideNumber: 3,
      title: "Place Value Power-Up! 🌟",
      concept: "The position of a digit changes its value! It's like VIP seating!",
      content: "In 45,107, the '4' isn't just 4! Because of its 'seat' in the ten thousands place, it's worth 40,000!",
      bgColor: "#20B2AA", // Light sea green
      visual: "A table showing 45,107:\nTen Thousands | Thousands | Hundreds | Tens | Ones\n      4       |     5     |    1     |  0   |  7\nEach digit gets its own house with its own value!",
      example: "In 83,091, what's the value of the digit '3'? (Hint: Look at its place!)",
      tryThis: "In the number 62,514, what is the place of the digit '2'? What is its value?"
    },
    {
      slideNumber: 4,
      title: "Reading Big Numbers: A Musical Note 🎶",
      concept: "Reading big numbers is like reading a song – listen for the 'thousand' beat!",
      content: "The comma is your musical break! It tells you when to say 'thousand'.",
      bgColor: "#FFD700", // Gold
      visual: "78,037 is read as 'seventy-eight thousand, thirty-seven'. The comma is after '78'!",
      example: "How do you say 92,456 out loud? 'Ninety-two thousand, four hundred fifty-six.'",
      tryThis: "Read the number 15,600 aloud. How does the comma help you?"
    },
    {
      slideNumber: 5,
      title: "Zero the Hero! 🦸",
      concept: "Zero might look like nothing, but it's a SUPER important placeholder!",
      content: "Without zero, 45,107 would look like 4517 – a totally different number! Zero holds the empty spots so other digits stay in their correct places.",
      bgColor: "#4682B4", // Steel blue
      visual: "Imagine a missing tooth in a smile! Zero fills that gap. 1,089 vs. 189 - see the difference zero makes!",
      example: "What happens if we remove the zeros from 20,304? It becomes 234!",
      tryThis: "Write a number where zero is in the hundreds place. What does that tell you?"
    },
    {
      slideNumber: 6,
      title: "Expanded Form: Unpacking Numbers! 📦",
      concept: "Expanded form shows the value of each digit individually, like opening a gift box!",
      content: "It's like taking a number apart to see all its pieces. You can do it with addition or multiplication!",
      bgColor: "#8A2BE2", // Blue violet
      visual: "For 34,187:\nAddition: 30,000 + 4,000 + 100 + 80 + 7\nMultiplication: (3 × 10,000) + (4 × 1,000) + (1 × 100) + (8 × 10) + (7 × 1)\n\nIt's like showing each digit's individual contribution!",
      example: "Write 56,243 in expanded form using addition.",
      tryThis: "What is the expanded form of 98,706?"
    },
    {
      slideNumber: 7,
      title: "The Amazing 'Times 10' Pattern! 💥",
      concept: "Each place value is 10 times bigger than the place to its right!",
      content: "When you move a digit one place to the left, its value multiplies by 10! Moving right, it divides by 10!",
      bgColor: "#FF4500", // Orange red
      visual: "Imagine stepping stones: 5 (ones) → 50 (tens) → 500 (hundreds) → 5,000 (thousands) → 50,000 (ten thousands). Each jump is a ×10!",
      example: "If you have 3 in the hundreds place (300), and move it to the thousands place, what's its new value? (3,000)",
      tryThis: "What happens to the value of the digit '2' in 24,000 if it moves to the hundreds place (200)?"
    },
    {
      slideNumber: 8,
      title: "Composing Numbers: Building Blocks Back! 🏗️",
      concept: "Composing numbers means putting smaller parts together to make a bigger number!",
      content: "It's like building your LEGO set back up after taking it apart! You're creating a whole from its values.",
      bgColor: "#3CB371", // Medium sea green
      visual: "You have 10,000 + 5,000 + 200 + 70 + 8. Put it together to get 15,278!",
      example: "What number do you get if you compose 60,000 + 7,000 + 300 + 10 + 4?",
      tryThis: "If you have 4 thousands, 8 hundreds, 2 tens, and 1 one, what number do you compose?"
    },
    {
      slideNumber: 9,
      title: "Decomposing Numbers: Breaking Apart! 🧩",
      concept: "Decomposing means breaking a big number into smaller, easier-to-handle pieces!",
      content: "This helps us understand the total value and can be done in many ways, not just by place value!",
      bgColor: "#BA55D3", // Medium orchid
      visual: "53,125 can be:\n- 50,000 + 3,000 + 100 + 20 + 5 (by place value)\n- OR 53,000 + 125 (easier for some calculations)\n- OR 50,000 + 3,125",
      example: "Decompose 67,892 into two different parts.",
      tryThis: "How can you decompose the number 25,000 in two different ways (e.g., 20,000 + 5,000)?"
    },
    {
      slideNumber: 10,
      title: "Numbers in the Real World! 🗺️",
      concept: "Big numbers are everywhere, not just in math class! They tell us amazing things!",
      content: "From populations to distances, money to scores, numbers help us understand our world!",
      bgColor: "#A0522D", // Sienna
      visual: "• Population of a city: 2,794,356\n• Distance to school: 12,500 meters\n• High score in a game: 99,999\n• Pages in a big book: 1,200",
      example: "If a sports stadium holds 50,000 people, is that a big number?",
      tryThis: "Detective Mission: Find a number bigger than 1,000 in your home today!"
    },
    {
      slideNumber: 11,
      title: "Number Lines: Finding Homes for Numbers! 🏡",
      concept: "Number lines show where numbers live and how far apart they are!",
      content: "They help us visualize magnitude and proximity. 75,000 is closer to 100,000 than to 50,000!",
      bgColor: "#5F9EA0", // Cadet blue
      visual: "A line from 0 to 100,000 with marks at 25,000, 50,000, 75,000. Point to where 60,000 would be!",
      example: "Where would 30,000 sit on our number line? Between which two main marks?",
      tryThis: "Draw a simple number line from 0 to 10,000. Mark where 5,000 and 7,500 would be."
    },
    {
      slideNumber: 12,
      title: "Comparing Number Giants! 🆚",
      concept: "When comparing big numbers, start from the left (the biggest place value) and go right!",
      content: "It's like judging a contest: look at the biggest, most important parts first!",
      bgColor: "#8B0000", // Dark red
      visual: "67,845 vs 68,234\n- Both have 6 in ten thousands.\n- Look at thousands: 7 vs 8. Since 8 > 7, then 68,234 is bigger!",
      example: "Which is bigger: 45,321 or 45,678? (Hint: The hundreds place is different!)",
      tryThis: "Compare 91,234 and 91,209. Which is larger and why?"
    },
    {
      slideNumber: 13,
      title: "Mental Math Magic! 🧠",
      concept: "Place value makes mental math a superpower! Break numbers apart to make them friendly!",
      content: "Don't be scared of big numbers! Add or subtract their place values separately, then put them back together!",
      bgColor: "#FF8C00", // Dark orange
      visual: "34,000 + 25,000:\nThink: 34 thousands + 25 thousands = 59 thousands! So, 59,000!",
      example: "What's 42,000 + 31,000? (Think: 42 + 31...)",
      tryThis: "Try to mentally subtract 10,000 from 75,000. What's the answer?"
    },
    {
      slideNumber: 14,
      title: "Rounding: Making Numbers Friendly! 🤗",
      concept: "Rounding helps us estimate and work with 'friendlier' numbers that are close to the original.",
      content: "Rule: Look at the digit to the right of the place you're rounding to. 5 or more? Round up! 4 or less? Round down!",
      bgColor: "#D2691E", // Chocolate
      visual: "Number line: 67,341 is closer to 67,000 than 68,000. So, round to 67,000 (if rounding to the nearest thousand).",
      example: "Round 23,678 to the nearest thousand. (Hint: Look at the hundreds digit!)",
      tryThis: "Round 5,499 to the nearest thousand. Is it 5,000 or 6,000?"
    },
    {
      slideNumber: 15,
      title: "Cultural Connections of Numbers! 🤝",
      concept: "Numbers aren't just math; they have special meanings and traditions in different cultures!",
      content: "From lucky numbers to counting systems, numbers connect us globally!",
      bgColor: "#8B4513", // Saddle brown
      visual: "• In China, '8' is lucky (sounds like prosperity).\n• In many cultures, '7' is considered lucky.\n• Some cultures have unique counting systems based on body parts or objects.",
      example: "Can you think of a number that is special in your family or culture?",
      tryThis: "Research a number that has cultural significance in a country different from your own."
    },
    {
      slideNumber: 16,
      title: "Number Patterns: The Repeating Melody! 🎶",
      concept: "The place value pattern repeats every three places: ones-tens-hundreds, then thousands-ten thousands-hundred thousands!",
      content: "Numbers are grouped into 'periods' of three digits. This makes reading huge numbers easier!",
      bgColor: "#4B0082", // Indigo
      visual: "Numbers like 456,789. The '456' is the thousands period. The '789' is the ones period.",
      example: "In 123,456,789, what are the digits in the thousands period?",
      tryThis: "Identify the 'ones period' and 'thousands period' in the number 98,765."
    },
    {
      slideNumber: 17,
      title: "You're a Number Explorer! 🎉",
      concept: "You've gained the skills to understand, read, write, and work with numbers up to 100,000!",
      content: "Now you can tackle any big number challenge! You're a true Number Explorer!",
      bgColor: "#2E8B57", // Sea green
      visual: "Congratulations! You can now:\n- Read numbers like 89,476\n- Write them in expanded form: 80,000 + 9,000 + 400 + 70 + 6\n- Identify place values: 8 (ten thousands), 9 (thousands), etc.",
      example: "Pick any 5-digit number and be an explorer – break it down completely!",
      tryThis: "Explain place value to a friend or family member using an example!"
    },
    {
      slideNumber: 18,
      title: "Final Challenge: Test Your Skills! 🏆",
      concept: "Let's review your amazing Number Explorer skills!",
      content: "You've learned digits, place value, reading, writing, composing, decomposing, comparing, rounding, and more!",
      bgColor: "#800000", // Maroon
      practice: [
        'What is the value of the digit 7 in 47,823? a) 7 b) 70 c) 700 d) 7,000',
        'Write 60,000 + 3,000 + 400 + 50 + 2 in standard form: a) 63,452 b) 60,3452',
        'Which number is larger: 78,901 or 78,910? a) 78,901 b) 78,910',
        'Round 45,678 to the nearest thousand: a) 45,000 b) 46,000',
        'How do you read 50,307? a) Fifty thousand three hundred seven b) Five thousand three hundred seven'
      ],
      tryThis: 'Work through each practice question and check your answers!'
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
      background: 'linear-gradient(135deg, #FF6B6B 0%, #4285F4 100%)', // Gemini-like gradient (red to blue)
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
            backgroundColor: selectedAI === 'claude' ? '#FF6B6B' : 'transparent',
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
        display: isMobile && selectedAI === 'gemini' ? 'none' : 'block' // Hide on mobile if Gemini
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
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          padding: isMobile ? '20px' : '40px', // Smaller padding for mobile
          maxWidth: isMobile ? '95%' : '600px', // Use percentage for mobile width
          width: '100%',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: `4px solid ${currentSlide.bgColor || '#4285F4'}`, // Default border if bgColor missing
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
              backgroundColor: currentSlideIndex === 0 ? '#ccc' : (currentSlide.bgColor || '#4285F4'),
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
              backgroundColor: currentSlideIndex === slidesData.length - 1 ? '#ccc' : (currentSlide.bgColor || '#4285F4'),
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
            backgroundColor: currentSlide.bgColor || '#4285F4',
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
            color: currentSlide.bgColor || '#4285F4',
            marginBottom: '20px',
            fontWeight: 'bold',
            textShadow: '1px 1px 3px rgba(0,0,0,0.1)'
          }}>
            {currentSlide.title}
          </h1>

          {/* Concept */}
          <div style={{
            backgroundColor: `${currentSlide.bgColor ? currentSlide.bgColor + '20' : 'rgba(66,133,244,0.1)'}`,
            padding: isMobile ? '15px' : '20px', // Smaller padding for mobile
            borderRadius: '15px',
            marginBottom: '30px',
            border: `2px solid ${currentSlide.bgColor ? currentSlide.bgColor + '40' : 'rgba(66,133,244,0.25)'}`
          }}>
            <h2 style={{
              fontSize: isMobile ? '1.2rem' : '1.5rem', // Smaller font for mobile
              color: currentSlide.bgColor || '#4285F4',
              margin: '0',
              fontWeight: '600'
            }}>
              {currentSlide.concept}
            </h2>
          </div>

          {/* Content */}
          <div style={{
            fontSize: isMobile ? '1rem' : '1.3rem', // Smaller font for mobile
            color: '#333',
            lineHeight: '1.6',
            marginBottom: '25px',
          }}>
             {currentSlide.content}
          </div>

          {/* Visual Example */}
          {currentSlide.visual && (
            <div style={{
              backgroundColor: '#F5F5F5',
              padding: isMobile ? '15px' : '20px', // Smaller padding for mobile
              borderRadius: '10px',
              marginBottom: '25px',
              fontSize: isMobile ? '0.9rem' : '1.1rem', // Smaller font for mobile
              color: '#555',
              fontFamily: 'serif',
              whiteSpace: 'pre-line'
            }}>
              Visual: {currentSlide.visual}
            </div>
          )}

          {/* Example */}
          {currentSlide.example && (
            <div style={{
              backgroundColor: '#E0E0E0',
              padding: isMobile ? '10px' : '15px', // Smaller padding for mobile
              borderRadius: '10px',
              marginBottom: '25px',
              fontSize: isMobile ? '0.9rem' : '1.1rem', // Smaller font for mobile
              color: '#444',
              border: `2px solid ${currentSlide.bgColor ? currentSlide.bgColor + '30' : 'rgba(66,133,244,0.2)'}`,
              whiteSpace: 'pre-line'
            }}>
              {currentSlide.example}
            </div>
          )}

          {/* Try This */}
          <div style={{
            backgroundColor: '#C8C8C8',
            padding: isMobile ? '15px' : '20px', // Smaller padding for mobile
            borderRadius: '15px',
            border: `2px solid ${currentSlide.bgColor || '#4285F4'}`,
            marginBottom: '20px'
          }}>
            <div style={{
              fontSize: isMobile ? '1.1rem' : '1.2rem', // Smaller font for mobile
              color: '#222',
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
                backgroundColor: index === currentSlideIndex ? (currentSlide.bgColor || '#4285F4') : 'rgba(255, 255, 255, 0.4)',
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

export default GeminiLesson;