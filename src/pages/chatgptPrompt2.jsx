// C:/Users/HP/ui/src/pages/chatgptPrompt2.jsx
import React, { useState, useEffect } from 'react';

const ChatGPTPrompt2Lesson = () => {
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
      slide: 1,
      title: "How Many Stars in the Sky?",
      hook: "Have you ever tried counting something HUGE—like the number of grains of sand on a beach or stars in the sky?",
      Idea: "A cartoon night sky with countless stars, some grouped in clusters.",
      bgColor: '#4F46E5', // Example color
      textColor: '#FFFFFF'
    },
    {
      slide: 2,
      title: "Our Big Math Mission",
      learningGoal: "By the end of this lesson, you’ll be able to read, write, break apart, and build big numbers—up to 100,000! You’ll also see how numbers are all around us, every day.",
      Idea: "A giant “100,000” with images of money, sports, and classroom objects.",
      bgColor: '#059669', // Example color
      textColor: '#FFFFFF'
    },
    {
      slide: 3,
      title: "Where Do We See Big Numbers?",
      realWorldConnection: [
        "Population of your city",
        "Distance from Earth to the Moon (in kilometers)",
        "Points scored in video games"
      ],
      pauseAndTry: "Can you think of something in your life that uses a BIG number?",
      Idea: "Speech bubbles from kids: “My town has 23,000 people!” “I scored 12,340 points!”",
      bgColor: '#DC2626', // Example color
      textColor: '#FFFFFF'
    },
    {
      slide: 4,
      title: "The Power of Place Value",
      concept: "Every number is made of digits—0 to 9. The value of each digit depends on its place.",
      example: "In 45,107: the 4 means 40,000, the 5 means 5,000, the 1 means 100, the 0 means 0 tens, and the 7 means 7 ones.",
      Idea: "Place value chart with 45,107, highlighting each digit’s value.",
      bgColor: '#7C3AED', // Example color
      textColor: '#FFFFFF'
    },
    {
      slide: 5,
      title: "Meet the Place Value Chart",
      tool: "A place value chart helps you SEE each digit’s job.",
      tryIt: "Place 23,689 in a place value chart. What does the 6 stand for?",
      Idea: "Blank chart, then filled in as a reveal.",
      bgColor: '#EA580C', // Example color
      textColor: '#FFFFFF'
    },
    {
      slide: 6,
      title: "Writing Numbers: Words, Symbols, and Expanded Form",
      concept: [
        "Standard form: 34,187",
        "Words: thirty-four thousand one hundred eighty-seven",
        "Expanded: 30,000 + 4,000 + 100 + 80 + 7"
      ],
      pauseAndTry: "How would you say “21,385” in words?",
      Idea: "Side-by-side representations.",
      bgColor: '#0891B2', // Example color
      textColor: '#FFFFFF'
    },
    {
      slide: 7,
      title: "Build and Break Apart Numbers",
      compose: "Put numbers together: 100 + 2 = 102",
      decompose: "Break apart: 53,125 = 50,000 + 3,000 + 100 + 25",
      pauseAndTry: "What are two ways to break apart 40,205?",
      Idea: "Two “number builder” robots assembling/disassembling blocks.",
      bgColor: '#BE185D', // Example color
      textColor: '#FFFFFF'
    },
    {
      slide: 8,
      title: "Zero—the Place Holder Hero!",
      concept: "A zero in a number isn’t just “nothing.” It holds the other digits in place!",
      example: "1,089 (the zero means there are no hundreds, but it’s needed so the 8 and 9 are in the right spots).",
      Idea: "Cartoon zero holding up “hundreds” column.",
      bgColor: '#059669', // Example color
      textColor: '#FFFFFF'
    },
    {
      slide: 9,
      title: "Patterns in Place Value",
      keyIdea: "Moving left, each place is 10 times bigger. Moving right, each place is 10 times smaller.",
      example: "500 is 10 times bigger than 50.",
      pauseAndTry: "What’s 10 times more than 7,000?",
      Idea: "Number line or arrows showing ×10 and ÷10 relationships.",
      bgColor: '#7C3D12', // Example color
      textColor: '#FFFFFF'
    },
    {
      slide: 10,
      title: "Spot the Mistake!",
      mistakeMoment: "A friend writes “78 000 37” for seventy-eight thousand thirty-seven. What’s wrong?",
      pauseAndDiscuss: "How should this number be written?",
      Idea: "“Wrong” and “right” examples.",
      bgColor: '#166534', // Example color
      textColor: '#FFFFFF'
    },
    {
      slide: 11,
      title: "Check Your Understanding: Mini Quiz #1",
      questions: [
        "What is the value of the 3 in 13,247?",
        "Write 60,904 in expanded form."
      ],
      pauseAndTry: "Check your answer with a partner or the teacher!",
      Idea: "Speech bubbles for self-check.",
      bgColor: '#991B1B', // Example color
      textColor: '#FFFFFF'
    },
    {
      slide: 12,
      title: "Numbers in Our World",
      everydayExamples: [
        "Temperature: 42,000 degrees in the sun’s core!",
        "Steps on a pedometer",
        "Number of books in a big library"
      ],
      thinkAbout: "Why do we need numbers this big?",
      Idea: "Real-life objects with numbers.",
      bgColor: '#5B21B6', // Example color
      textColor: '#FFFFFF'
    },
    {
      slide: 13,
      title: "Flexible Thinking with Numbers",
      concept: "You can break numbers in different ways to help with mental math.",
      example: [
        "87,450 = 80,000 + 7,000 + 400 + 50",
        "OR 87,450 = 87,000 + 450"
      ],
      tryIt: "Break 29,100 in two different ways.",
      Idea: "Sticky notes showing multiple ways to break apart a number.",
      bgColor: '#0F766E', // Example color
      textColor: '#FFFFFF'
    },
    {
      slide: 14,
      title: "Check Your Understanding: Mini Quiz #2",
      questions: [
        "Place the number 56,213 on a number line between 50,000 and 60,000.",
        "Which digit in 82,594 has the greatest value?"
      ],
      pauseAndTry: "Discuss or check with your group!",
      Idea: "Partial number line and number chart.",
      bgColor: '#C2410C', // Example color
      textColor: '#FFFFFF'
    },
    {
      slide: 15,
      title: "Big Numbers—What Did We Learn?",
      summary: [
        "Digits have different values based on their place",
        "Numbers can be read, written, built, and broken apart in many ways",
        "Zero is important for holding place",
        "Place value helps us understand “how muchness”"
      ],
      Idea: "“Toolbox” of strategies learned (place value chart, expanded form, number line)",
      bgColor: '#7E22CE', // Example color
      textColor: '#FFFFFF'
    },
    {
      slide: 16,
      title: "Practice Makes Powerful Math!",
      practiceQuestions: [
        "Write 65,034 in expanded form.",
        "What is the value of the 7 in 17,042?",
        "Write the number sixty-eight thousand, four hundred twenty in standard form.",
        "Decompose 42,150 in two ways.",
        "Is there a zero in 31,098? What does it show?"
      ],
      Idea: "Notebooks and pencils.",
      bgColor: '#BE123C', // Example color
      textColor: '#FFFFFF'
    },
    {
      slide: 17,
      title: "Can You Solve This? (Application Challenge)",
      scenario: [
        "A library just received 24,670 new books.",
        "How many books is that in expanded form?",
        "If 4,000 books are fiction, how many are not?"
      ],
      pauseAndTry: "Solve, then explain your thinking!",
      Idea: "Bookshelves filling up.",
      bgColor: '#0369A1', // Example color
      textColor: '#FFFFFF'
    },
    {
      slide: 18,
      title: "What’s Next in Numbers?",
      nextSteps: "You’re ready to compare, order, and round BIG numbers. Next time, we’ll learn how to figure out which number is greatest, and how to estimate using place value!",
      Idea: "Number line stretching into the future.",
      bgColor: '#059669', // Example color
      textColor: '#FFFFFF'
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

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: 'linear-gradient(135deg, #A7BFEB 0%, #87A9EB 100%)', // Applied from uixx.txt
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

          {currentSlide.hook && (
            <p style={{ fontSize: isMobile ? '1.1rem' : '1.5rem', lineHeight: '1.6', marginBottom: '30px', color: '#333' }}>
              {currentSlide.hook}
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

          {currentSlide.learningGoal && (
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
                Learning Goal: {currentSlide.learningGoal}
              </h2>
            </div>
          )}

          {currentSlide.realWorldConnection && (
            <div style={{
              backgroundColor: '#E0E0E0',
              padding: isMobile ? '15px' : '20px',
              borderRadius: '10px',
              marginBottom: '25px',
              color: '#444',
              textAlign: 'left'
            }}>
              <h3 style={{ marginTop: 0, color: currentSlide.bgColor || '#4F46E5' }}>Real-World Connections:</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: isMobile ? '1rem' : '1.2rem' }}>
                {currentSlide.realWorldConnection.map((item, index) => (
                  <li key={index} style={{ marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {currentSlide.pauseAndTry && (
            <div style={{
              backgroundColor: '#C8C8C8',
              padding: isMobile ? '15px' : '20px',
              borderRadius: '15px',
              border: `2px solid ${currentSlide.bgColor || '#4F46E5'}`,
              marginBottom: '20px'
            }}>
              <p style={{ fontSize: isMobile ? '1.1rem' : '1.2rem', fontWeight: 'bold', color: '#222', margin: 0 }}>
                Pause and Try: {currentSlide.pauseAndTry}
              </p>
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

          {currentSlide.concept && Array.isArray(currentSlide.concept) && (
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
                fontWeight: '600',
                marginBottom: '10px'
              }}>
                Key Concepts:
              </h2>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: isMobile ? '1rem' : '1.2rem', color: '#333' }}>
                {currentSlide.concept.map((item, index) => (
                  <li key={index} style={{ marginBottom: '5px' }}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {currentSlide.example && typeof currentSlide.example === 'string' && (
            <div style={{
              backgroundColor: '#F0F0F0',
              padding: isMobile ? '15px' : '20px',
              borderRadius: '10px',
              marginBottom: '25px',
              fontSize: isMobile ? '1rem' : '1.2rem',
              color: '#444',
              border: `1px solid ${currentSlide.bgColor ? currentSlide.bgColor + '30' : 'rgba(102,126,234,0.2)'}`,
              whiteSpace: 'pre-line',
              textAlign: 'left'
            }}>
              <h3 style={{ marginTop: 0, color: currentSlide.bgColor || '#4F46E5' }}>Example:</h3>
              {currentSlide.example}
            </div>
          )}

          {currentSlide.example && Array.isArray(currentSlide.example) && (
            <div style={{
              backgroundColor: '#F0F0F0',
              padding: isMobile ? '15px' : '20px',
              borderRadius: '10px',
              marginBottom: '25px',
              color: '#444',
              border: `1px solid ${currentSlide.bgColor ? currentSlide.bgColor + '30' : 'rgba(102,126,234,0.2)'}`,
              textAlign: 'left'
            }}>
              <h3 style={{ marginTop: 0, color: currentSlide.bgColor || '#4F46E5' }}>Example:</h3>
              <ul style={{ listStyleType: 'none', padding: 0, fontSize: isMobile ? '1rem' : '1.2rem' }}>
                {currentSlide.example.map((item, index) => (
                  <li key={index} style={{ marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>
            </div>
          )}


          {currentSlide.tool && (
            <p style={{ fontSize: isMobile ? '1rem' : '1.3rem', lineHeight: '1.6', marginBottom: '25px', color: '#333' }}>
              Tool: {currentSlide.tool}
            </p>
          )}

          {currentSlide.tryIt && (
            <div style={{
              backgroundColor: '#C8C8C8',
              padding: isMobile ? '15px' : '20px',
              borderRadius: '15px',
              border: `2px solid ${currentSlide.bgColor || '#4F46E5'}`,
              marginBottom: '20px'
            }}>
              <p style={{ fontSize: isMobile ? '1.1rem' : '1.2rem', fontWeight: 'bold', color: '#222', margin: 0 }}>
                Try It: {currentSlide.tryIt}
              </p>
            </div>
          )}

          {currentSlide.compose && (
            <p style={{ fontSize: isMobile ? '1rem' : '1.3rem', lineHeight: '1.6', marginBottom: '15px', color: '#333' }}>
              Compose: {currentSlide.compose}
            </p>
          )}

          {currentSlide.decompose && (
            <p style={{ fontSize: isMobile ? '1rem' : '1.3rem', lineHeight: '1.6', marginBottom: '25px', color: '#333' }}>
              Decompose: {currentSlide.decompose}
            </p>
          )}

          {currentSlide.keyIdea && (
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
                Key Idea: {currentSlide.keyIdea}
              </h2>
            </div>
          )}

          {currentSlide.mistakeMoment && (
            <p style={{ fontSize: isMobile ? '1rem' : '1.3rem', lineHeight: '1.6', marginBottom: '15px', color: '#333' }}>
              Mistake Moment: {currentSlide.mistakeMoment}
            </p>
          )}

          {currentSlide.pauseAndDiscuss && (
            <div style={{
              backgroundColor: '#C8C8C8',
              padding: isMobile ? '15px' : '20px',
              borderRadius: '15px',
              border: `2px solid ${currentSlide.bgColor || '#4F46E5'}`,
              marginBottom: '20px'
            }}>
              <p style={{ fontSize: isMobile ? '1.1rem' : '1.2rem', fontWeight: 'bold', color: '#222', margin: 0 }}>
                Pause and Discuss: {currentSlide.pauseAndDiscuss}
              </p>
            </div>
          )}

          {currentSlide.questions && (
            <div style={{
              backgroundColor: '#E0E0E0',
              padding: isMobile ? '15px' : '20px',
              borderRadius: '10px',
              marginBottom: '25px',
              color: '#444',
              textAlign: 'left'
            }}>
              <h3 style={{ marginTop: 0, color: currentSlide.bgColor || '#4F46E5' }}>Questions:</h3>
              <ul style={{ listStyleType: 'decimal', paddingLeft: '20px', fontSize: isMobile ? '1rem' : '1.2rem' }}>
                {currentSlide.questions.map((item, index) => (
                  <li key={index} style={{ marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {currentSlide.everydayExamples && (
            <div style={{
              backgroundColor: '#E0E0E0',
              padding: isMobile ? '15px' : '20px',
              borderRadius: '10px',
              marginBottom: '25px',
              color: '#444',
              textAlign: 'left'
            }}>
              <h3 style={{ marginTop: 0, color: currentSlide.bgColor || '#4F46E5' }}>Everyday Examples:</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: isMobile ? '1rem' : '1.2rem' }}>
                {currentSlide.everydayExamples.map((item, index) => (
                  <li key={index} style={{ marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {currentSlide.thinkAbout && (
            <div style={{
              backgroundColor: '#C8C8C8',
              padding: isMobile ? '15px' : '20px',
              borderRadius: '15px',
              border: `2px solid ${currentSlide.bgColor || '#4F46E5'}`,
              marginBottom: '20px'
            }}>
              <p style={{ fontSize: isMobile ? '1.1rem' : '1.2rem', fontWeight: 'bold', color: '#222', margin: 0 }}>
                Think About: {currentSlide.thinkAbout}
              </p>
            </div>
          )}

          {currentSlide.summary && (
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
                fontWeight: '600',
                marginBottom: '10px'
              }}>
                Summary:
              </h2>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: isMobile ? '1rem' : '1.2rem', color: '#333' }}>
                {currentSlide.summary.map((item, index) => (
                  <li key={index} style={{ marginBottom: '5px' }}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {currentSlide.practiceQuestions && (
            <div style={{
              backgroundColor: '#E0E0E0',
              padding: isMobile ? '15px' : '20px',
              borderRadius: '10px',
              marginBottom: '25px',
              color: '#444',
              textAlign: 'left'
            }}>
              <h3 style={{ marginTop: 0, color: currentSlide.bgColor || '#4F46E5' }}>Practice Questions:</h3>
              <ul style={{ listStyleType: 'decimal', paddingLeft: '20px', fontSize: isMobile ? '1rem' : '1.2rem' }}>
                {currentSlide.practiceQuestions.map((item, index) => (
                  <li key={index} style={{ marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {currentSlide.scenario && (
            <div style={{
              backgroundColor: '#F0F0F0',
              padding: isMobile ? '15px' : '20px',
              borderRadius: '10px',
              marginBottom: '25px',
              color: '#444',
              border: `1px solid ${currentSlide.bgColor ? currentSlide.bgColor + '30' : 'rgba(102,126,234,0.2)'}`,
              textAlign: 'left'
            }}>
              <h3 style={{ marginTop: 0, color: currentSlide.bgColor || '#4F46E5' }}>Scenario:</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: isMobile ? '1rem' : '1.2rem' }}>
                {currentSlide.scenario.map((item, index) => (
                  <li key={index} style={{ marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {currentSlide.nextSteps && (
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
                Next Steps: {currentSlide.nextSteps}
              </h2>
            </div>
          )}
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

export default ChatGPTPrompt2Lesson;