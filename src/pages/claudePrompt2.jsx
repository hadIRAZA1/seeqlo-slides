import React, { useState, useEffect } from 'react';

const claudeprompt2 = () => {
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
      title: "The Million-Dollar Question! 💰",
      hook: "Imagine you just won a contest! The prize could be twelve thousand dollars OR 21,000 dollars. Which would you choose? Think about it... are these the same amount or different? Pause and discuss with a partner: What do you think and why?",
      Idea: "Two money bags, one labeled '$12,000' and the other '$21,000'.",
      bgColor: '#4F46E5',
      textColor: '#FFFFFF'
    },
    {
      slide: 2,
      title: "Our Learning Adventure Begins! 🎯",
      learningGoal: (
        <>
          By the end of this lesson, you'll be able to:
          <ul>
            <li>Read and write whole numbers up to 100,000 in different ways</li>
            <li>Understand what each digit means in its place</li>
            <li>Break apart big numbers and put them back together</li>
            <li>Spot these numbers in your everyday life</li>
          </ul>
          Get ready to become a number detective!
        </>
      ),
      Idea: "A magnifying glass over a large number '100,000' with diverse elements around it.",
      bgColor: '#059669',
      textColor: '#FFFFFF'
    },
    {
      slide: 3,
      title: "Numbers Are Everywhere! 🌍",
      realWorldConnection: [
        "Your school might have 1,247 students",
        "A new video game costs 89,999 coins",
        "The local stadium holds 45,000 people",
        "Your favorite YouTuber has 78,542 subscribers"
      ],
      pauseAndTry: "Can you think about: What big numbers have you seen today?",
      Idea: "Images representing school, video games, a stadium, and a YouTube play button with numbers.",
      bgColor: '#DC2626',
      textColor: '#FFFFFF'
    },
    {
      slide: 4,
      title: "Meet the Place Value Family 👨‍👩‍👧‍👦",
      concept: "Every digit in a number has a special job, just like family members! Let's look at the number 34,187:",
      example: (
        <>
          Ten Thousands: 3 (worth 30,000!)
          Thousands: 4 (worth 4,000)
          Hundreds: 1 (worth 100)
          Tens: 8 (worth 80)
          Ones: 7 (worth 7)
        </>
      ),
      Idea: "A place value chart with the number 34,187, highlighting each digit's value.",
      bgColor: '#7C3AED',
      textColor: '#FFFFFF'
    },
    {
      slide: 5,
      title: "The Magic of Place Value ✨",
      concept: "The SAME digit can be worth different amounts!",
      example: (
        <>
          Look at the number 55,555:
          The first 5 = 50,000 (fifty thousand!)
          The second 5 = 5,000 (five thousand)
          The third 5 = 500 (five hundred)
          The fourth 5 = 50 (fifty)
          The last 5 = 5 (five)
        </>
      ),
      tryIt: "What would each 2 be worth in the number 22,222?",
      Idea: "The number 55,555 with arrows pointing to each digit showing its value.",
      bgColor: '#EA580C',
      textColor: '#FFFFFF'
    },
    {
      slide: 6,
      title: "Check Your Understanding 🤔",
      questions: [
        "What is the 6 worth?",
        "What is the 7 worth?",
        "Why is there a 0 in the tens place?"
      ],
      concept: "Pause and think... The 0 is like a placeholder holding everyone in the right spot!",
      Idea: "The number 67,340 with question marks on the 6, 7, and 0.",
      bgColor: '#0891B2',
      textColor: '#FFFFFF'
    },
    {
      slide: 7,
      title: "Reading Numbers Like a Pro 📖",
      concept: (
        <>
          When we see 78,037, we read it as "seventy-eight thousand, thirty-seven."
          Here's the trick: Listen for the word "thousand" - it tells you where to put the comma!
          Seventy-eight thousand (that's 78,000)
          Thirty-seven (that's 37)
          Put them together: 78,037
        </>
      ),
      pauseAndTry: "How would you say 45,208 out loud?",
      Idea: "The number 78,037 broken down with text showing how it's read.",
      bgColor: '#BE185D',
      textColor: '#FFFFFF'
    },
    {
      slide: 8,
      title: "Breaking Numbers Apart (Decomposing) 🧩",
      concept: "Sometimes it helps to break big numbers into smaller pieces. The number 53,125 can be broken apart like this:",
      example: (
        <>
          Standard way: 53,125 = 50,000 + 3,000 + 100 + 20 + 5
          Multiplication way: 53,125 = 5×10,000 + 3×1,000 + 1×100 + 2×10 + 5×1
          Both ways show us what each digit is really worth!
        </>
      ),
      Idea: "Blocks representing numbers being broken apart (e.g., 53,125 into 50,000, 3,000, etc.).",
      bgColor: '#059669',
      textColor: '#FFFFFF'
    },
    {
      slide: 9,
      title: "Building Numbers Back Up (Composing) 🔨",
      concept: "Now let's go the other way! If we have these pieces:",
      example: "20,000 + 6,000 + 400 + 50 + 8 = 26,458!",
      tryIt: "What number do you get from 40,000 + 3,000 + 90 + 2?",
      Idea: "Building blocks being assembled to form a large number.",
      bgColor: '#7C3D12',
      textColor: '#FFFFFF'
    },
    {
      slide: 10,
      title: "Check Your Understanding 🎯",
      scenario: [
        "A school is ordering new books. They have:",
        "30,000 fiction books",
        "8,000 non-fiction books",
        "500 picture books",
        "60 reference books",
        "7 special collections"
      ],
      questions: "How many books total? Write it as one big number!",
      Idea: "A stack of books with different categories.",
      bgColor: '#166534',
      textColor: '#FFFFFF'
    },
    {
      slide: 11,
      title: "The Number Line Highway 🛣️",
      concept: (
        <>
          Imagine numbers living on a giant highway. On our number line from 0 to 100,000:
          25,000 lives right in the middle of 20,000 and 30,000
          67,500 is halfway between 67,000 and 68,000
          99,999 is just one step away from 100,000!
        </>
      ),
      Idea: "A number line with markers for 0, 20,000, 25,000, 30,000, 67,000, 67,500, 68,000, 99,999, and 100,000.",
      pauseAndTry: "Ideaize this: Where would 85,000 live on this highway?",
      bgColor: '#991B1B',
      textColor: '#FFFFFF'
    },
    {
      slide: 12,
      title: "Zero - The Silent Hero 🦸‍♀️",
      concept: "The digit 0 might seem like nothing, but it's actually a superhero! Zero holds the place so other digits stay where they belong!",
      example: (
        <>
          1,089 (one thousand, eighty-nine)
          1,809 (one thousand, eight hundred nine)
          10,089 (ten thousand, eighty-nine)
        </>
      ),
      Idea: "A cartoon zero wearing a superhero cape, holding up place value columns.",
      bgColor: '#5B21B6',
      textColor: '#FFFFFF'
    },
    {
      slide: 13,
      title: "Check Your Understanding 💡",
      scenario: [
        "Real-world connection: Your city's population is growing!",
        "Last year: 45,678 people",
        "This year: 48,902 people"
      ],
      questions: [
        "Which number is larger?",
        "How can you tell without calculating?",
        "What does the 4 represent in each number?"
      ],
      Idea: "Two city skylines with population numbers for last year and this year.",
      bgColor: '#0F766E',
      textColor: '#FFFFFF'
    },
    {
      slide: 14,
      title: "The Times 10 Pattern 🔟",
      keyIdea: "As we move left in a number, each place is 10 times bigger. Going right, it's the opposite - 10 times smaller!",
      example: (
        <>
          5 ones
          50 (that's 5 × 10)
          500 (that's 50 × 10)
          5,000 (that's 500 × 10)
          50,000 (that's 5,000 × 10)
        </>
      ),
      Idea: "Arrows showing multiplication by 10 when moving left in a place value chart, and division by 10 when moving right.",
      bgColor: '#C2410C',
      textColor: '#FFFFFF'
    },
    {
      slide: 15,
      title: "What We've Discovered! 🎉",
      summary: [
        "Read massive numbers up to 100,000",
        "Understand what each digit's job is",
        "Break numbers apart and build them up",
        "Spot the patterns that make math easier",
        "Find these numbers in real life everywhere!"
      ],
      concept: "Remember: Every digit has a place, and every place has power!",
      Idea: "A 'toolbox' of strategies learned, including a place value chart, expanded form, and a number line.",
      bgColor: '#7E22CE',
      textColor: '#FFFFFF'
    },
    {
      slide: 16,
      title: "Practice Challenge #1 📝",
      questions: "Multiple Choice: Which number represents 'forty-three thousand, six hundred five'?",
      options: [
        "A) 43,650",
        "B) 43,605",
        "C) 40,365",
        "D) 436,005"
      ],
      concept: "Think about place value before you answer!",
      Idea: "A multiple-choice question with the options listed.",
      bgColor: '#BE123C',
      textColor: '#FFFFFF'
    },
    {
      slide: 17,
      title: "Practice Challenge #2 🤸‍♀️",
      questions: "Short Answer: Break apart the number 67,429 using addition.",
      example: "Example format: 67,429 = _____ + _____ + _____ + _____ + _____",
      concept: "Remember to think about what each digit is worth!",
      Idea: "A number (67,429) being pulled apart into its expanded form.",
      bgColor: '#0369A1',
      textColor: '#FFFFFF'
    },
    {
      slide: 18,
      title: "Practice Challenge #3 🏗️",
      scenario: [
        "The school is collecting cans for recycling. Here's what each grade collected:",
        "Grade 3: 12,000 cans",
        "Grade 4: 8,500 cans",
        "Grade 5: 15,750 cans",
        "Grade 6: 9,000 cans"
      ],
      questions: [
        "Which grade collected the most cans?",
        "Write the total in expanded form",
        "If they need 50,000 cans to win a prize, how close are they?"
      ],
      Idea: "Different piles of cans labeled with grade levels.",
      bgColor: '#059669',
      textColor: '#FFFFFF'
    },
    {
      slide: 19,
      title: "Practice Challenge #4 🎲",
      questions: (
        <>
          Critical Thinking: I'm thinking of a 5-digit number where:
          <ul>
            <li>The ten thousands digit is 6</li>
            <li>The hundreds digit is 0</li>
            <li>The thousands digit is half of 8</li>
            <li>The tens digit is 3 more than 4</li>
            <li>The ones digit is the same as the thousands digit</li>
          </ul>
          What's my mystery number?
        </>
      ),
      Idea: "A detective's notepad with clues for the mystery number.",
      bgColor: '#4F46E5',
      textColor: '#FFFFFF'
    },
    {
      slide: 20,
      title: "Practice Challenge #5 🌟",
      questions: "Creative Challenge: Create your own 'big number' story! Use a number between 50,000 and 99,999.",
      guidelines: [
        "Include the number written in words",
        "Show it in expanded form",
        "Explain why this number matters in real life"
      ],
      concept: "Get creative - maybe it's concert tickets, video game scores, or city populations!",
      Idea: "A blank storybook waiting to be filled with a 'big number' adventure.",
      bgColor: '#DC2626',
      textColor: '#FFFFFF'
    },
    {
      slide: 21,
      title: "Practice Challenge #6 🔍",
      scenario: "Number Detective: Look at these three numbers: 78,405 | 87,450 | 78,450",
      questions: [
        "Put them in order from smallest to largest",
        "Explain how you can tell without doing math",
        "What's the value of the 4 in each number?",
        "Which two numbers have digits that add up to the same total?"
      ],
      Idea: "A magnifying glass examining the three numbers.",
      bgColor: '#7C3AED',
      textColor: '#FFFFFF'
    },
    {
      slide: 22,
      title: "Next Steps - Your Number Journey Continues! 🚀",
      nextSteps: (
        <>
          Coming up next, you'll explore:
          <ul>
            <li>Comparing and ordering even bigger numbers</li>
            <li>Rounding large numbers to make estimates</li>
            <li>Adding and subtracting with these powerful numbers</li>
            <li>Patterns that help us work with millions and beyond!</li>
          </ul>
          Keep being curious about the numbers around you - they're everywhere, telling amazing stories!
          Great job completing this lesson! You're now ready to tackle any big number that comes your way! 🌟
        </>
      ),
      Idea: "A number line stretching into the horizon, indicating future learning.",
      bgColor: '#EA580C',
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
        paddingTop: isMobile ? '10px' : '20px',
        textAlign: 'center',
        overflowY: 'auto',
      }}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          padding: isMobile ? '20px' : '40px',
          maxWidth: isMobile ? '95%' : '800px',
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
              <h2 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', color: currentSlide.bgColor || '#4F46E5', margin: '0', fontWeight: '600' }}>
                Learning Goal: {currentSlide.learningGoal}
              </h2>
            </div>
          )}

          {currentSlide.realWorldConnection && (
            <div style={{ backgroundColor: '#E0E0E0', padding: isMobile ? '15px' : '20px', borderRadius: '10px', marginBottom: '25px', color: '#444', textAlign: 'left' }}>
              <h3 style={{ marginTop: 0, color: currentSlide.bgColor || '#4F46E5' }}>Real-World Connections:</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: isMobile ? '1rem' : '1.2rem' }}>
                {currentSlide.realWorldConnection.map((item, index) => (
                  <li key={index} style={{ marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {currentSlide.pauseAndTry && (
            <div style={{ backgroundColor: '#C8C8C8', padding: isMobile ? '15px' : '20px', borderRadius: '15px', border: `2px solid ${currentSlide.bgColor || '#4F46E5'}`, marginBottom: '20px' }}>
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
              <h2 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', color: currentSlide.bgColor || '#4F46E5', margin: '0', fontWeight: '600' }}>
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
              <h2 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', color: currentSlide.bgColor || '#4F46E5', margin: '0', fontWeight: '600', marginBottom: '10px' }}> Key Concepts: </h2>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: isMobile ? '1rem' : '1.2rem', color: '#333' }}>
                {currentSlide.concept.map((item, index) => (
                  <li key={index} style={{ marginBottom: '5px' }}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {currentSlide.example && typeof currentSlide.example === 'string' && (
            <div style={{ backgroundColor: '#F0F0F0', padding: isMobile ? '15px' : '20px', borderRadius: '10px', marginBottom: '25px', fontSize: isMobile ? '1rem' : '1.2rem', color: '#444', border: `1px solid ${currentSlide.bgColor ? currentSlide.bgColor + '30' : 'rgba(102,126,234,0.2)'}`, whiteSpace: 'pre-line', textAlign: 'left' }}>
              <h3 style={{ marginTop: 0, color: currentSlide.bgColor || '#4F46E5' }}>Example:</h3>
              {currentSlide.example}
            </div>
          )}

          {currentSlide.example && Array.isArray(currentSlide.example) && (
            <div style={{ backgroundColor: '#F0F0F0', padding: isMobile ? '15px' : '20px', borderRadius: '10px', marginBottom: '25px', fontSize: isMobile ? '1rem' : '1.2rem', color: '#444', border: `1px solid ${currentSlide.bgColor ? currentSlide.bgColor + '30' : 'rgba(102,126,234,0.2)'}`, whiteSpace: 'pre-line', textAlign: 'left' }}>
              <h3 style={{ marginTop: 0, color: currentSlide.bgColor || '#4F46E5' }}>Examples:</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: isMobile ? '1rem' : '1.2rem', color: '#333' }}>
                {currentSlide.example.map((item, index) => (
                  <li key={index} style={{ marginBottom: '5px' }}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {currentSlide.questions && typeof currentSlide.questions === 'string' && (
            <div style={{ backgroundColor: '#F8F8F8', padding: isMobile ? '15px' : '20px', borderRadius: '10px', marginBottom: '25px', color: '#333', textAlign: 'left', border: `1px dashed ${currentSlide.bgColor || '#4F46E5'}` }}>
              <h3 style={{ marginTop: 0, color: currentSlide.bgColor || '#4F46E5' }}>Question:</h3>
              <p style={{ fontSize: isMobile ? '1.1rem' : '1.3rem', margin: '0' }}>{currentSlide.questions}</p>
            </div>
          )}

          {currentSlide.questions && Array.isArray(currentSlide.questions) && (
            <div style={{ backgroundColor: '#F8F8F8', padding: isMobile ? '15px' : '20px', borderRadius: '10px', marginBottom: '25px', color: '#333', textAlign: 'left', border: `1px dashed ${currentSlide.bgColor || '#4F46E5'}` }}>
              <h3 style={{ marginTop: 0, color: currentSlide.bgColor || '#4F46E5' }}>Questions:</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: isMobile ? '1.1rem' : '1.3rem' }}>
                {currentSlide.questions.map((item, index) => (
                  <li key={index} style={{ marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {currentSlide.options && (
            <div style={{ backgroundColor: '#F0F8FF', padding: isMobile ? '15px' : '20px', borderRadius: '10px', marginBottom: '25px', textAlign: 'left', border: `1px solid ${currentSlide.bgColor || '#4F46E5'}` }}>
              <h3 style={{ marginTop: 0, color: currentSlide.bgColor || '#4F46E5' }}>Options:</h3>
              <ul style={{ listStyleType: 'none', padding: '0', fontSize: isMobile ? '1rem' : '1.2rem' }}>
                {currentSlide.options.map((item, index) => (
                  <li key={index} style={{ marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {currentSlide.summary && (
            <div style={{ backgroundColor: '#E8F5E9', padding: isMobile ? '15px' : '20px', borderRadius: '15px', marginBottom: '30px', border: `2px solid ${currentSlide.bgColor || '#4F46E5'}` }}>
              <h2 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', color: currentSlide.bgColor || '#4F46E5', margin: '0', fontWeight: '600', marginBottom: '10px' }}>Summary:</h2>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: isMobile ? '1rem' : '1.2rem', color: '#333' }}>
                {currentSlide.summary.map((item, index) => (
                  <li key={index} style={{ marginBottom: '5px' }}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {currentSlide.guidelines && (
            <div style={{ backgroundColor: '#FFF3E0', padding: isMobile ? '15px' : '20px', borderRadius: '10px', marginBottom: '25px', textAlign: 'left', border: `1px solid ${currentSlide.bgColor || '#4F46E5'}` }}>
              <h3 style={{ marginTop: 0, color: currentSlide.bgColor || '#4F46E5' }}>Guidelines:</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: isMobile ? '1rem' : '1.2rem' }}>
                {currentSlide.guidelines.map((item, index) => (
                  <li key={index} style={{ marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {currentSlide.nextSteps && (
            <div style={{ backgroundColor: '#E3F2FD', padding: isMobile ? '15px' : '20px', borderRadius: '15px', marginTop: '30px', border: `2px solid ${currentSlide.bgColor || '#4F46E5'}` }}>
              <h2 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', color: currentSlide.bgColor || '#4F46E5', margin: '0', fontWeight: '600', marginBottom: '10px' }}>Next Steps:</h2>
              <p style={{ fontSize: isMobile ? '1rem' : '1.2rem', margin: '0', color: '#333' }}>{currentSlide.nextSteps}</p>
            </div>
          )}

        </div>
      </div>

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

export default claudeprompt2;