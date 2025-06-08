import React, { useState, useEffect } from 'react';

const GeminiLesson = ({ onToggleAI, onSelectPrompt }) => {
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
    title: 'Welcome to the World of Big Numbers! 🚀',
    concept: 'Explore numbers up to 100,000 and learn how to read, write, and understand them!',
    Idea: 'Cartoon kid with magnifying glass looking at big numbers or rocket flying to number planet.',
    sayIt: 'Get ready, Super Mathematicians, for an exciting journey into big numbers!',
    tryThis: 'Think of the biggest number you know! What is it?',
    bgColor: '#4F46E5',
  },
  {
    slideNumber: 2,
    title: 'What are Whole Numbers Anyway? 🤔',
    concept: 'Whole numbers are everyday counting numbers without fractions or decimals.',
    Idea: 'Calendar showing 30 days, price tag $25, bus #10, scoreboard: Home 50 - Visitors 35.',
    sayIt: 'Whole numbers help us count things in real life like scores and prices!',
    tryThis: 'Can you spot three whole numbers around you right now?',
    bgColor: '#059669',
  },
  {
    slideNumber: 3,
    title: 'The Super Digits! 🧱',
    concept: 'Digits 0–9 are the building blocks of every number!',
    Idea: 'Colorful digits 0–9 floating like LEGO bricks.',
    sayIt: 'You can build any number using just these 10 digits!',
    tryThis: 'How many digits are in 7? What about 42?',
    bgColor: '#DC2626',
  },
  {
    slideNumber: 4,
    title: 'Place Value Power! (Up to Ten Thousands) 💪',
    concept: 'Each digit has a place that gives it value—ones, tens, hundreds, thousands, ten thousands!',
    Idea: 'Place value chart showing 23,451 with labeled columns.',
    sayIt: 'Digits get their value based on where they are in the number!',
    tryThis: 'In the number 6,789, what is the value of the digit 7?',
    bgColor: '#7C3AED',
  },
  {
    slideNumber: 5,
    title: 'Going Bigger! The Hundred Thousands Place! 🌟',
    concept: 'Add a new column: Hundred Thousands! Patterns continue as we grow bigger.',
    Idea: 'Place value chart extended to 100,000 showing the digit 1 in hundred thousands.',
    sayIt: 'Every new group is 10 times the one before!',
    tryThis: 'How would you write a number with 1 hundred thousand and all other digits as 0?',
    bgColor: '#EA580C',
  },
  {
    slideNumber: 6,
    title: 'How to Read Big Numbers Aloud 🗣️',
    concept: 'We read numbers by grouping into periods and saying “thousand” at the comma.',
    Idea: 'Speech bubble saying "Seventy-eight thousand, thirty-seven" for 78,037.',
    sayIt: 'Commas help us read big numbers easily!',
    tryThis: 'How would you read the number 92,600?',
    bgColor: '#0891B2',
  },
  {
    slideNumber: 7,
    title: 'Writing Numbers in Words ✍️',
    concept: 'Write numbers in words to match how we say them aloud.',
    Idea: '53,082 shown as "Fifty-three thousand, eighty-two", highlighting the zero.',
    sayIt: 'Zeros are placeholders and help keep digits in their correct spots!',
    tryThis: 'Write the number 17,345 in words.',
    bgColor: '#BE185D',
  },
  {
    slideNumber: 8,
    title: 'Standard Form vs. Word Form 🔢📝',
    concept: 'Standard form uses digits; word form uses words. Both show the same number!',
    Idea: 'Two columns: one with digits (12,345), one with words (Twelve thousand, three hundred forty-five).',
    sayIt: 'Two ways to show numbers: digits or words!',
    tryThis: 'Match 62,009 to its correct word form.',
    bgColor: '#059669',
  },
  {
    slideNumber: 9,
    title: 'Expanded Form: Stretching Numbers Out! ↔️',
    concept: 'Expanded form shows a number as the sum of its parts!',
    Idea: 'Number 34,187 shown stretched out like a slinky: 30,000+4,000+100+80+7.',
    sayIt: 'Expanded form shows us what each digit is worth!',
    tryThis: 'Write 25,603 in expanded form using addition.',
    bgColor: '#7C3D12',
  },
  {
    slideNumber: 10,
    title: 'Expanded Form: Super Stretchy! ✨',
    concept: 'We can also use multiplication to show place value!',
    Idea: '(3×10,000)+(4×1,000)+(1×100)+(8×10)+(7×1) for 34,187.',
    sayIt: 'Multiplying helps us see each digit’s place value clearly!',
    tryThis: 'Write 7,654 in expanded form using multiplication.',
    bgColor: '#166534',
  },
  {
    slideNumber: 11,
    title: 'Composing Numbers: Putting Them Together! 🧩',
    concept: 'Composing means building a number from smaller parts.',
    Idea: 'Blocks labeled 50,000 + 6,000 + 200 + 50 + 4 = 56,254.',
    sayIt: 'We build big numbers by adding up their place value parts!',
    tryThis: 'What number is made from 60,000 + 300 + 9?',
    bgColor: '#991B1B',
  },
  {
    slideNumber: 12,
    title: 'Decomposing Numbers: Breaking Them Apart! 💥',
    concept: 'Decomposing breaks a number into parts to help us understand it better.',
    Idea: '73,529 shown breaking into 70,000 + 3,000 + 500 + 20 + 9.',
    sayIt: 'Break it down! Decomposing helps us see what numbers are made of.',
    tryThis: 'Decompose 48,062 into place value parts.',
    bgColor: '#5B21B6',
  },
  {
    slideNumber: 13,
    title: 'The Mighty Zero! 🦸‍♂️',
    concept: 'Zero is a placeholder that keeps digits in the right spots!',
    Idea: '408 vs 48 – showing how missing zero changes the number.',
    sayIt: 'Zero doesn’t mean nothing—it holds important places!',
    tryThis: 'What’s the difference between 502 and 52? Where is zero in 502?',
    bgColor: '#0F766E',
  },
  {
    slideNumber: 14,
    title: 'Numbers on a Line! 📏',
    concept: 'Number lines help us Ideaize and estimate where numbers belong.',
    Idea: 'Number line from 0 to 50,000, marking 25,000 and asking about 18,000 or 41,000.',
    sayIt: 'Number lines show the order and distance between numbers.',
    tryThis: 'Draw a line from 0 to 10,000. Mark 5,000, 2,000, and 8,500.',
    bgColor: '#C2410C',
  },
  {
    slideNumber: 15,
    title: 'Numbers in Our World! 🌎',
    concept: 'Big numbers are all around us – from towns to tech to games!',
    Idea: 'Population sign, odometer, gaming score, social media likes.',
    sayIt: 'Math is everywhere – just look at the world around you!',
    tryThis: 'Find 3 numbers over 1,000 around you and describe what they mean.',
    bgColor: '#7E22CE',
  },
  {
    slideNumber: 16,
    title: 'Recap: You’re a Number Whiz! 🧠💡',
    concept: 'Review of everything learned about numbers up to 100,000!',
    Idea: 'Checklist of topics with a flexing cartoon brain.',
    sayIt: 'Digits, place value, forms, and more – you’ve got number power!',
    tryThis: 'Which topic do you want to practice more? Why?',
    bgColor: '#BE123C',
  },
  {
    slideNumber: 17,
    title: 'Practice Time! Test Your Skills! 🧩❓',
    concept: 'Challenge questions to review what you’ve learned.',
    Idea: 'Fun worksheet-style layout or quiz cards.',
    sayIt: 'Let’s put your skills to the test!',
    tryThis: '1. Write 67,034 in words. 2. What’s the value of 8 in 98,215? 3. What’s 42,109 in standard form? 4. Expand 25,473. 5. Which is bigger: 70,560 or 70,065?',
    bgColor: '#0369A1',
  }
];


  const currentSlide = slidesData[currentSlideIndex];
  const currentProgressBarColor = currentSlide.bgColor || '#4F46E5';

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
          border: `4px solid ${currentSlide.bgColor || '#4F46E5'}`,
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
              backgroundColor: currentSlideIndex === 0 ? '#ccc' : (currentSlide.bgColor || '#4F46E5'),
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
              backgroundColor: currentSlideIndex === slidesData.length - 1 ? '#ccc' : (currentSlide.bgColor || '#4F46E5'),
              color: 'white', border: 'none', width: isMobile ? '40px' : '50px', height: isMobile ? '40px' : '50px', borderRadius: '50%', fontSize: isMobile ? '1.2rem' : '1.5rem', cursor: currentSlideIndex === slidesData.length - 1 ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', opacity: currentSlideIndex === slidesData.length - 1 ? 0.5 : 1, position: 'absolute', top: '50%', right: isMobile ? '5px' : '-25px', transform: 'translateY(-50%)', zIndex: 20
            }}
            aria-label="Next slide"
          >
            →
          </button>

          <div style={{
            position: 'absolute', top: isMobile ? '-10px' : '-15px', left: isMobile ? '15px' : '30px', backgroundColor: currentSlide.bgColor || '#4F46E5', color: 'white', padding: isMobile ? '6px 15px' : '8px 20px', borderRadius: '15px', fontSize: isMobile ? '14px' : '16px', fontWeight: 'bold', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', zIndex: 10,
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

          {currentSlide.sayIt && (
             <div style={{
                backgroundColor: '#F0F4F8', padding: '15px', borderRadius: '10px', marginBottom: '15px', textAlign: 'left', borderLeft: `5px solid ${currentSlide.bgColor || '#4F46E5'}`
              }}>
                <strong style={{ color: currentSlide.bgColor || '#4F46E5' }}>Say It:</strong>
                <span style={{ marginLeft: '8px', color: '#333' }}>{currentSlide.sayIt}</span>
              </div>
          )}

          {currentSlide.tryThis && (
            <div style={{
              backgroundColor: '#FFFBEB', padding: '15px', borderRadius: '15px', border: `2px solid #FBBF24`, margin: '20px 0', whiteSpace: 'pre-line'
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

export default GeminiLesson;