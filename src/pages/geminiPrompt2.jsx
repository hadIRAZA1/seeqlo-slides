import React, { useState, useEffect } from 'react';

const GeminiPrompt2Lesson = ({ onToggleAI, onSelectPrompt }) => {
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
      title: "Number Detectives: Cracking the Code of Big Numbers!",
      concept: "Understanding whole numbers up to 100,000.",
      content: "A vibrant, cartoon-style graphic of two kid detectives looking through a giant magnifying glass. The magnifying glass is focused on the number '100,000', making it appear large and important. The background is filled with faint, overlapping numbers of various sizes.",
      Idea: "A vibrant, cartoon-style graphic of two kid detectives looking through a giant magnifying glass focused on '100,000'.",
      bgColor: "#FF6B6B",
    },
    {
      slideNumber: 2,
      title: "A Puzzling Prize!",
      concept: "The significance of zero in place value.",
      content: "Imagine you won a contest! The prize is either $1,500 or $10,050. Which one would you choose and why? One little digit, the zero, can make a huge difference in the amount of money you receive. Think about... Which prize is bigger? How do you know? Discuss with a partner what makes these numbers different.",
      Idea: "Interactive Element: 'Think about... Which prize is bigger? How do you know? Discuss with a partner what makes these numbers different.'",
      bgColor: "#FF6B6B",
    },
    {
      slideNumber: 3,
      title: "Our Learning Goal! 🎯",
      concept: "Lesson objectives for understanding large numbers.",
      content: "By the end of this lesson, you'll be able to: Read and write whole numbers up to 100,000 in different ways. Understand the value of each digit in a large number. Break down (decompose) and build up (compose) big numbers. See how these big numbers are used in your everyday life.",
      Idea: "List of learning objectives.",
      bgColor: "#5DADE2",
    },
    {
      slideNumber: 4,
      title: "Why Do We Need Such Big Numbers?",
      concept: "Real-world application of large numbers.",
      content: "Think about the number of people living in your town or city. Or the number of views your favourite YouTuber gets on a video! We need numbers bigger than 1,000 to talk about these things. Numbers help us answer the question, 'How much?'",
      Idea: "An illustration showing a progression: a house with a family (small number), a school with students (medium number), and a city skyline (large number). The number of people could be shown under each picture, like 4, 500, and then 85,342 for the city.",
      bgColor: "#5DADE2",
    },
    {
      slideNumber: 5,
      title: "The Secret Code: Place Value",
      concept: "Every Digit Has Its Place!",
      content: "Think of a number as a team. Each digit has a specific job based on its position. This is called place value. Let's look at the number 78,037. The comma helps us read the number easily. We say 'thousand' when we see the comma!",
      Idea: "A clear, colourful place value chart is shown. The number 78,037 is broken down into the chart:\nTen Thousands | Thousands | Hundreds | Tens | Ones\n7 | 8 | 0 | 3 | 7",
      bgColor: "#AF7AC5",
    },
    {
      slideNumber: 6,
      title: "What's a Digit Worth?",
      concept: "Unlocking a Number's Value",
      content: "The place of a digit tells you its value. In the number 78,037: The 7 isn't just a 7. It's in the Ten Thousands place, so its value is 70,000. The 8 is in the Thousands place. What's its value? That's right, 8,000! The 0 is a super important placeholder. It means there are zero hundreds. Without it, the number would be 7,837!",
      Idea: "Explanation of digit values in 78,037.",
      bgColor: "#AF7AC5",
    },
    {
      slideNumber: 7,
      title: "Check Your Understanding! 🤔",
      concept: "You're the Detective!",
      content: "Let's look at the number 94,251. What is the value of the digit 4? A) 40 B) 400 C) 4,000 D) 40,000. Pause and try to solve it! Point to the place value that helps you find the answer. Answer: C) 4,000",
      Idea: "Multiple choice question with interactive element.",
      bgColor: "#AF7AC5",
    },
    {
      slideNumber: 8,
      title: "Numbers in Different Outfits",
      concept: "Same Number, Different Looks!",
      content: "We can show the same number in a few different ways: Standard Form: The way we usually write it. 34,187. Word Form: How we say the number in words. Thirty-four thousand, one hundred eighty-seven. Expanded Form: Breaking it down by place value. 30,000 + 4,000 + 100 + 80 + 7",
      Idea: "Examples of standard, word, and expanded forms of 34,187.",
      bgColor: "#2ECC71",
    },
    {
      slideNumber: 9,
      title: "Building and Breaking Numbers",
      concept: "Let's Be Number Architects!",
      content: "We can compose (build) and decompose (break apart) numbers. This helps with mental math! Think of the number 53,125. We can decompose it in different ways: By strict place value: 50,000 + 3,000 + 100 + 20 + 5. In a different way: 50,000 + 3,000 + 125",
      Idea: "An image of LEGO blocks being put together (composing) and taken apart (decomposing). The blocks could have numbers like '50,000' and '3,000' written on them.",
      bgColor: "#2ECC71",
    },
    {
      slideNumber: 10,
      title: "Check Your Understanding! 💡",
      concept: "Your Turn to Decompose!",
      content: "How could you decompose the number 67,842 in two different ways? Way 1: Way 2: Think about how you can group the numbers. There are many right answers! Share your ideas with the person next to you. Possible Answers: Way 1: 60,000 + 7,000 + 800 + 40 + 2. Way 2: 67,000 + 800 + 42. Way 3: 50,000 + 17,000 + 842",
      Idea: "Interactive element for decomposing 67,842 with possible answers.",
      bgColor: "#2ECC71",
    },
    {
      slideNumber: 11,
      title: "Big Numbers in the Real World 🌎",
      concept: "Where Do We See Big Numbers?",
      content: "You see numbers up to 100,000 all the time! Social Media: A video with 12,540 likes 👍. Geography: The population of a city like Kingston, Ontario is over 93,000 people. Sports: A major hockey arena can hold 19,250 fans. 🏒 Gaming: Scoring 89,500 points in your favourite game! 🎮",
      Idea: "Examples with icons: social media likes, city population, sports arena capacity, game score.",
      bgColor: "#F4D03F",
    },
    {
      slideNumber: 12,
      title: "Finding Your Place on the Line",
      concept: "The Great Number Line-Up!",
      content: "A number line helps us see where a number belongs and how it compares to others. Where would you place the number 45,000? Think about... Is 45,000 closer to 0 or 100,000? How would you place 82,000 on this line?",
      Idea: "A closed number line shown, starting at 0 and ending at 100,000. It is marked in intervals of 10,000. An arrow points roughly to the spot for 45,000. 0 --- 10,000 --- ... --- 100,000",
      bgColor: "#F4D03F",
    },
    {
      slideNumber: 13,
      title: "Your Key Takeaways!",
      concept: "What We've Unlocked! 🔑",
      content: "Every digit in a number has a place and a value. A zero can be a placeholder and is very important! We can read, write, and show numbers up to 100,000 in different ways (standard, word, expanded form). Composing and decomposing numbers helps us understand them better. Big numbers are all around us, every single day!",
      Idea: "List of key takeaways.",
      bgColor: "#ECF0F1",
    },
    {
      slideNumber: 14,
      title: "Time to Practice!",
      concept: "Show What You Know!",
      content: "Multiple Choice: Which number is 'fifty-two thousand, sixty-one'? A) 52,610 B) 5,261 C) 52,061. Short Answer: Write the number 80,000 + 5,000 + 30 + 9 in standard form. Short Answer: What is the value of the 9 in 91,542?",
      Idea: "Multiple choice and short answer questions.",
      bgColor: "#D7BDE2",
    },
    {
      slideNumber: 15,
      title: "Apply Your Skills!",
      concept: "A Real-World Challenge",
      content: "The local animal shelter is trying to raise $25,000 for a new building. So far, they have raised $10,000 + 8,000 + 400 + 50. How much money have they raised in total? How much more do they need to reach their goal? Pause and try to solve this problem. You can use a number line, pictures, or expanded form to help you figure it out! Answer: They have raised $18,450. They need $6,550 more.",
      Idea: "Word problem with interactive element and answer.",
      bgColor: "#D7BDE2",
    },
    {
      slideNumber: 16,
      title: "What's Next on Our Journey?",
      concept: "Your Next Adventure... 🚀",
      content: "Great work today, Number Detectives! You've mastered reading and understanding big numbers. Next up: We'll start using these big numbers to solve problems. We will learn how to add and subtract numbers all the way up to 100,000! Get ready!",
      Idea: "Rocket icon for 'Next Adventure'.",
      bgColor: "#A9CCE3",
    },
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

  // handleSelectPrompt is kept as a prop but not called in this layout
  // const handleSelectPrompt = (prompt) => {
  //   onSelectPrompt(prompt);
  // };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: 'linear-gradient(135deg, #A7BFEB 0%, #87A9EB 100%)', // Applied from chatgptPrompt2.jsx
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      padding: 0,
      margin: 0,
      overflowX: 'hidden', // Prevent horizontal scroll
      fontFamily: 'Arial, sans-serif', // Added font-family for consistency
    }}>
      {/* Main Content Area - acts as the "slide card" */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: isMobile ? '10px' : '20px',
        paddingTop: isMobile ? '10px' : '20px',
        textAlign: 'center',
        overflowY: 'auto', // Allow scrolling if content overflows
      }}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          padding: isMobile ? '20px' : '40px',
          maxWidth: isMobile ? '95%' : '600px',
          width: '100%',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: `4px solid ${currentSlide.bgColor || '#667eea'}`, // Dynamic border color
          position: 'relative',
          minHeight: isMobile ? 'calc(100vh - 180px)' : 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          color: '#333', // Default text color for content inside the card
        }}>

          {/* Previous Button */}
          <button
            onClick={handlePrevSlide}
            disabled={currentSlideIndex === 0}
            style={{
              backgroundColor: currentSlideIndex === 0 ? '#ccc' : (currentSlide.bgColor || '#667eea'),
              color: 'white',
              border: 'none',
              width: isMobile ? '40px' : '50px',
              height: isMobile ? '40px' : '50px',
              borderRadius: '50%',
              fontSize: isMobile ? '1.2rem' : '1.5rem',
              cursor: currentSlideIndex === 0 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              opacity: currentSlideIndex === 0 ? 0.5 : 1,
              position: 'absolute',
              top: '50%',
              left: isMobile ? '5px' : '-25px',
              transform: 'translateY(-50%)',
              zIndex: 20
            }}
            aria-label="Previous slide"
          >
            ←
          </button>

          {/* Next Button */}
          <button
            onClick={handleNextSlide}
            disabled={currentSlideIndex === slidesData.length - 1}
            style={{
              backgroundColor: currentSlideIndex === slidesData.length - 1 ? '#ccc' : (currentSlide.bgColor || '#667eea'),
              color: 'white',
              border: 'none',
              width: isMobile ? '40px' : '50px',
              height: isMobile ? '40px' : '50px',
              borderRadius: '50%',
              fontSize: isMobile ? '1.2rem' : '1.5rem',
              cursor: currentSlideIndex === slidesData.length - 1 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              opacity: currentSlideIndex === slidesData.length - 1 ? 0.5 : 1,
              position: 'absolute',
              top: '50%',
              right: isMobile ? '5px' : '-25px',
              transform: 'translateY(-50%)',
              zIndex: 20
            }}
            aria-label="Next slide"
          >
            →
          </button>

          {/* Slide Number Indicator */}
          <div style={{
            position: 'absolute',
            top: isMobile ? '-10px' : '-15px',
            left: isMobile ? '15px' : '30px',
            backgroundColor: currentSlide.bgColor || '#667eea',
            color: 'white',
            padding: isMobile ? '6px 15px' : '8px 20px',
            borderRadius: '15px',
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: 'bold',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            zIndex: 10,
          }}>
            Slide {currentSlideIndex + 1}
          </div>

          {/* Dynamically Render Slide Content */}
          {currentSlide.title && (
            <h1 style={{ fontSize: isMobile ? '1.8rem' : '3rem', marginBottom: '20px', color: currentSlide.bgColor || '#4F46E5', fontWeight: 'bold', textShadow: '1px 1px 3px rgba(0,0,0,0.1)' }}>
              {currentSlide.title}
            </h1>
          )}

          {currentSlide.content && (
            <p style={{ fontSize: isMobile ? '1.1rem' : '1.5rem', lineHeight: '1.6', marginBottom: '30px', color: '#333' }}>
              {currentSlide.content}
            </p>
          )}

          {currentSlide.Idea && (
            <div style={{
              backgroundColor: '#F5F5F5',
              padding: isMobile ? '15px' : '20px',
              borderRadius: '10px',
              marginBottom: '25px',
              fontSize: isMobile ? '0.9rem' : '1.1rem',
              color: '#555',
              fontFamily: 'serif',
              whiteSpace: 'pre-line'
            }}>
              Idea: {currentSlide.Idea}
            </div>
          )}

          {currentSlide.concept && typeof currentSlide.concept === 'string' && (
            <div style={{
              backgroundColor: `${currentSlide.bgColor ? currentSlide.bgColor + '20' : 'rgba(102,126,234,0.1)'}`,
              padding: isMobile ? '15px' : '20px',
              borderRadius: '15px',
              marginBottom: '30px',
              border: `2px solid ${currentSlide.bgColor ? currentSlide.bgColor + '40' : 'rgba(102,126,234,0.25)'}`
            }}>
              <h2 style={{
                fontSize: isMobile ? '1.2rem' : '1.5rem',
                color: currentSlide.bgColor || '#4F46E5',
                margin: '0',
                fontWeight: '600'
              }}>
                Concept: {currentSlide.concept}
              </h2>
            </div>
          )}

          {/* Removed other dynamic content renders (hook, learningGoal, realWorldConnection, example, tool, tryIt, compose, decompose, keyIdea, mistakeMoment, pauseAndDiscuss, questions, everydayExamples, thinkAbout, summary, practiceQuestions, scenario, nextSteps) as they are not present in the provided slidesData for geminiPrompt2.jsx */}

        </div>
      </div>

      {/* Navigation and Progress at the bottom */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '15px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        position: 'relative',
        bottom: 0,
        width: '100%',
        boxSizing: 'border-box',
        gap: '20px',
      }}>
        <div style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center'
        }}>
          {slidesData.map((_, index) => (
            <div
              key={index}
              style={{
                width: isMobile ? '8px' : '12px',
                height: isMobile ? '8px' : '12px',
                borderRadius: '50%',
                backgroundColor: index === currentSlideIndex ? (currentProgressBarColor) : 'rgba(255, 255, 255, 0.4)',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
          <span style={{
            color: 'white',
            fontSize: isMobile ? '0.9rem' : '1.1rem',
            fontWeight: 'bold',
            marginLeft: '5px',
          }}>
            {currentSlideIndex + 1}/{slidesData.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GeminiPrompt2Lesson;