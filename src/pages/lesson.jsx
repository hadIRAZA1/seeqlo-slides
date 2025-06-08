import React, { useState, useEffect } from 'react';

const ChatGPTLesson = ({ onToggleAI, onSelectPrompt }) => {
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
      concept: 'Every number is made up of just 10 digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9',
      content: 'These 10 digits are like the alphabet for numbers! We use them to build any number, big or small!',
      tryThis: 'Can you list 3 different numbers using only the digits 1, 2, and 3?',
      bgColor: '#DC2626',
    },
    {
      slideNumber: 4,
      title: 'Place Value Power!',
      concept: 'The position of a digit in a number gives it its value.',
      content: 'In the number 3,456, the "3" means 3 thousands, not just 3 ones! Its place gives it power!',
      visual: 'Chart showing 3,456 broken down into thousands, hundreds, tens, ones.',
      tryThis: 'What is the value of the "7" in 17,200? (Hint: It is in the thousands place!)',
      bgColor: '#7C3AED',
    },
    {
      slideNumber: 5,
      title: 'Numbers Up to 100,000',
      concept: 'We use commas to help us read large numbers easily.',
      content: 'A comma separates the thousands period from the ones period. Example: 45,678.',
      visual: 'A comma in 45,678 to help divide. "Forty-five thousand, six hundred seventy-eight."',
      tryThis: 'How would you read 92,345 out loud?',
      bgColor: '#EA580C',
    },
    {
      slideNumber: 6,
      title: 'Expanded Form Fun!',
      concept: 'Expanded form shows the value of each digit added together.',
      content: 'For 23,456: it is 20,000 + 3,000 + 400 + 50 + 6. Each digit tells its true worth!',
      visual: 'Number "exploding" into its expanded form components.',
      tryThis: 'Write 78,901 in expanded form.',
      bgColor: '#0891B2',
    },
    {
      slideNumber: 7,
      title: 'Standard Form',
      concept: 'Standard form is the usual way we write numbers.',
      content: 'It is the compact way of writing a number, like 45,678. It’s what you see most often!',
      tryThis: 'What is the standard form of 90,000 + 5,000 + 200 + 10 + 3?',
      bgColor: '#BE185D',
    },
    {
      slideNumber: 8,
      title: 'Word Form',
      concept: 'Word form is writing numbers using words, as you would say them.',
      content: '45,678 in word form is "forty-five thousand, six hundred seventy-eight."',
      tryThis: 'Write "sixty-three thousand, one hundred twelve" in standard form.',
      bgColor: '#059669',
    },
    {
      slideNumber: 9,
      title: 'Comparing Numbers',
      concept: 'When comparing numbers, start from the leftmost digit (the largest place value).',
      content: 'Is 54,321 greater than or less than 54,123? The hundreds place decides! 300 > 100, so 54,321 is greater!',
      tryThis: 'Which number is smaller: 87,654 or 87,645?',
      bgColor: '#7C3D12',
    },
    {
      slideNumber: 10,
      title: 'Ordering Numbers',
      concept: 'Ordering numbers means arranging them from smallest to largest, or largest to smallest.',
      content: 'To order 23,000; 2,300; 230: First, look at the number of digits. Then, compare place values.',
      tryThis: 'Order these numbers from smallest to largest: 15,678; 15,876; 15,687.',
      bgColor: '#166534',
    },
    {
      slideNumber: 11,
      title: 'Rounding Numbers',
      concept: 'Rounding makes numbers easier to work with by finding a nearby "friendly" number.',
      content: 'To round 4,678 to the nearest thousand: Look at the hundreds digit (6). Is it 5 or more? Yes! So, round up to 5,000.',
      tryThis: 'Round 3,499 to the nearest thousand. Is it 3,000 or 4,000?',
      bgColor: '#991B1B',
    },
    {
      slideNumber: 12,
      title: 'Zero as a Placeholder',
      concept: 'Zero is crucial! It holds a place value when there are no other digits there.',
      content: 'In 507, the zero holds the tens place. Without it, 57 is a very different number!',
      visual: 'Comparing 507 vs 57 to show zero\'s importance.',
      tryThis: 'How does the zero in 20,345 affect its value compared to 23,45?',
      bgColor: '#5B21B6',
    },
    {
      slideNumber: 13,
      title: 'Using Numbers in Context',
      concept: 'Numbers help us understand quantities, measurements, and data in the real world.',
      content: 'Think about populations, distances, costs, or scores. Numbers tell us a story!',
      tryThis: 'Find a large number (over 1,000) in a book, news article, or on a product label and explain what it means.',
      bgColor: '#0F766E',
    },
    {
      slideNumber: 14,
      title: 'Patterns with Powers of 10',
      concept: 'Each place value is 10 times greater than the place to its right.',
      content: 'Moving a digit one place to the left multiplies its value by 10. Moving right divides by 10.',
      visual: 'Arrow showing 5 -> 50 -> 500 (multiplying by 10).',
      tryThis: 'What is 10 times 600? What is 10 times 6,000?',
      bgColor: '#C2410C',
    },
    {
      slideNumber: 15,
      title: 'Estimating with Large Numbers',
      concept: 'Estimating helps us make quick, close-enough calculations without exact answers.',
      content: 'If a school has 1,280 students, you can estimate it has "about 1,300" students.',
      tryThis: 'Estimate the number of pages in your favorite book to the nearest hundred.',
      bgColor: '#7E22CE',
    },
    {
      slideNumber: 16,
      title: 'The Number Line Revisited',
      concept: 'Number lines help us visualize the position and relative value of numbers.',
      content: 'You can place large numbers on a number line to see how far apart they are and which is greater.',
      visual: 'Number line with 0, 50,000, 100,000 marked, with a number like 75,000 indicated.',
      tryThis: 'Draw a number line from 0 to 10,000 and mark where 2,500 and 7,500 would be.',
      bgColor: '#BE123C',
    },
    {
      slideNumber: 17,
      title: 'Putting It All Together',
      concept: 'You are now a master of numbers up to 100,000!',
      content: 'You can read, write, compare, order, and understand the value of digits in large numbers. Great job, mathematician!',
      tryThis: 'Create a "challenge number" for a friend (e.g., a 5-digit number) and ask them to explain its place values and expanded form.',
      bgColor: '#0369A1',
    },
    {
      slideNumber: 18,
      title: 'Quiz Time! 🎉',
      concept: 'Test your knowledge on numbers up to 100,000!',
      content: 'Complete the following questions to prove your mastery!',
      practice: [
        '1. What is the value of the digit 5 in 15,300? (a) 5 (b) 500 (c) 5,000 (d) 50,000',
        '2. Write "seventy-two thousand, eight hundred six" in standard form.',
        '3. Which number is greater: 43,210 or 43,120?',
        '4. Round 67,890 to the nearest thousand.',
        '5. Write 90,000 + 4,000 + 200 + 10 + 7 in standard form.',
      ],
      tryThis: 'Review any questions you found tricky!',
      bgColor: '#059669',
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

          {currentSlide.concept && (
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

          {currentSlide.content && (
            <p style={{ fontSize: isMobile ? '1.1rem' : '1.5rem', lineHeight: '1.6', marginBottom: '30px', color: '#333' }}>
              {currentSlide.content}
            </p>
          )}

          {currentSlide.visual && (
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
              Visual: {currentSlide.visual}
            </div>
          )}
          
          {currentSlide.practice && (
            <div style={{
              backgroundColor: '#E0E0E0',
              padding: isMobile ? '15px' : '20px',
              borderRadius: '10px',
              marginBottom: '25px',
              color: '#444',
              textAlign: 'left'
            }}>
              <h3 style={{ marginTop: 0, color: currentSlide.bgColor || '#4F46E5' }}>Practice Questions:</h3>
              <ul style={{ listStyleType: 'none', paddingLeft: '10px', fontSize: isMobile ? '1rem' : '1.2rem' }}>
                {currentSlide.practice.map((item, index) => (
                  <li key={index} style={{ marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {currentSlide.tryThis && (
            <div style={{
              backgroundColor: '#FFFBEB',
              padding: isMobile ? '15px' : '20px',
              borderRadius: '15px',
              border: `2px solid #FBBF24`,
              marginBottom: '20px'
            }}>
              <p style={{ fontSize: isMobile ? '1.1rem' : '1.2rem', fontWeight: 'bold', color: '#B45309', margin: 0 }}>
                💡 Try This: {currentSlide.tryThis}
              </p>
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

export default ChatGPTLesson;