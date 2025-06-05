import React, { useState } from 'react';

const GeminiLesson = ({ onToggleAI }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedAI, setSelectedAI] = useState('gemini'); // Start with Gemini selected

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
      title: "What are Whole Numbers Anyway? 🤔",
      concept: "Whole Numbers: Our Counting Friends!",
      content: "Whole numbers are the basic counting numbers we use every day, starting from 0, 1, 2, 3, and going up, up, up! They don't have any fractions or decimals.",
      bgColor: "#4ECDC4", // Teal
      visual: "Examples of whole numbers in daily life:\n- Calendar: 30 days\n- Price tag: $25\n- Bus number: 10\n- Game score: Home 50 - Visitors 35",
      example: "We use whole numbers to:\n- Count our toys\n- See how many people live in our town\n- Check scores in video games\n- Tell time and dates",
      tryThis: "Can you spot three whole numbers around you right now?"
    },
    {
      slideNumber: 3,
      title: "The Super Digits! 🧱",
      concept: "Digits: The Building Blocks of Numbers!",
      content: "Every single number, no matter how big, is made from just ten special symbols called digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9.",
      bgColor: "#45B7D1", // Blue
      visual: "The 10 Digits:\n0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣\n5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣\n\nThese are like LEGO bricks - you can build any number!",
      example: "Examples:\n- The number 7 has 1 digit\n- The number 42 has 2 digits\n- The number 1,357 has 4 digits",
      tryThis: "How many digits are in your age? How about your house number?"
    },
    {
      slideNumber: 4,
      title: "Place Value Power! 💪",
      concept: "Every Digit Has a Home!",
      content: "Each digit in a number has a special 'place' that tells us its value. It's like an address for the digit! We have ones, tens, hundreds, thousands, and ten thousands.",
      bgColor: "#96CEB4", // Green
      visual: "Place Value Chart:\nTen Thousands | Thousands | Hundreds | Tens | Ones\n     2       |    3     |    4     |  5   |  1\n= 23,451",
      example: "In the number 15,823:\n- 3 is in ones place (value: 3)\n- 2 is in tens place (value: 20)\n- 8 is in hundreds place (value: 800)\n- 5 is in thousands place (value: 5,000)\n- 1 is in ten thousands place (value: 10,000)",
      tryThis: "In the number 6,789, what is the value of the digit 7?"
    },
    {
      slideNumber: 5,
      title: "Going Bigger! The Hundred Thousands Place! 🌟",
      concept: "Reaching for 100,000!",
      content: "Now, let's add one more place to our chart: the Hundred Thousands place! This is for really big numbers. See how the pattern repeats: ones, tens, hundreds... then thousands, ten thousands, hundred thousands!",
      bgColor: "#FFEAA7", // Yellow
      visual: "Extended Place Value Chart:\nHundred Thousands | Ten Thousands | Thousands | Hundreds | Tens | Ones\n        1         |       0       |     0     |    0     |  0   |  0\n= 100,000",
      example: "The number 100,000 has:\n- 1 in the hundred thousands place\n- 0 in all other places\n\nRemember: 54,321 is very different from 12,345, even though they use the same digits!",
      tryThis: "How would you write one hundred thousand using digits?"
    },
    {
      slideNumber: 6,
      title: "How to Read Big Numbers Aloud 🗣️",
      concept: "Reading Numbers Like a Pro!",
      content: "When we read big numbers, we group them into 'periods.' The comma helps us separate thousands from the rest. We say the thousands part, then 'thousand,' then the rest.",
      bgColor: "#DDA0DD", // Plum
      visual: "Reading 78,037:\n'Seventy-eight THOUSAND, thirty-seven'\n\n78 | , | 037\nThousands | | Units",
      example: "More examples:\n- 45,107 → 'forty-five thousand, one hundred seven'\n- 92,600 → 'ninety-two thousand, six hundred'\n- 60,005 → 'sixty thousand, five'",
      tryThis: "How would you read the number 83,420 out loud?"
    },
    {
      slideNumber: 7,
      title: "Writing Numbers in Words ✍️",
      concept: "From Digits to Words!",
      content: "Just like we read numbers aloud, we can write them in words. Remember to use 'thousand' when you get past the hundreds place. Zeros are important placeholders!",
      bgColor: "#FFB347", // Peach
      visual: "Examples:\n53,082 → 'Fifty-three thousand, eighty-two'\n60,005 → 'Sixty thousand, five'\n17,345 → 'Seventeen thousand, three hundred forty-five'",
      example: "Notice how we handle zeros:\n- In 60,005, we don't say 'zero hundred zero tens'\n- We just say 'sixty thousand, five'\n- The zeros hold the place but we don't read them",
      tryThis: "Write the number 29,603 in words."
    },
    {
      slideNumber: 8,
      title: "Standard Form vs. Word Form 🔢📝",
      concept: "Numbers: Two Ways to Show Them!",
      content: "We have two main ways to show numbers: Standard Form (using digits) and Word Form (using words). Both represent the same value!",
      bgColor: "#87CEEB", // Sky blue
      visual: "Standard Form → Word Form\n12,345 → Twelve thousand, three hundred forty-five\n8,050 → Eight thousand, fifty\n62,009 → Sixty-two thousand, nine",
      example: "Practice matching:\nStandard: 75,308\nWord: Seventy-five thousand, three hundred eight\n\nBoth represent the same number!",
      tryThis: "Convert 41,207 to word form, then back to standard form."
    },
    {
      slideNumber: 9,
      title: "Expanded Form: Stretching Numbers Out! ↔️",
      concept: "See What Numbers Are Made Of!",
      content: "Expanded form helps us see the value of each digit in a number. It's like stretching the number out to show all its parts added together!",
      bgColor: "#98FB98", // Pale green
      visual: "34,187 in Expanded Form:\n30,000 + 4,000 + 100 + 80 + 7\n\nEach part shows the value of each digit!",
      example: "More examples:\n- 25,603 → 20,000 + 5,000 + 600 + 0 + 3\n- 50,079 → 50,000 + 0 + 0 + 70 + 9\n- 7,654 → 7,000 + 600 + 50 + 4",
      tryThis: "Write 18,925 in expanded form using addition."
    },
    {
      slideNumber: 10,
      title: "Expanded Form: The Multiplication Way! ✨",
      concept: "Using Multiplication to Show Place Value!",
      content: "There's another way to show expanded form using multiplication! We show each digit multiplied by its place value. This really shows how much each digit is worth.",
      bgColor: "#F0E68C", // Khaki
      visual: "34,187 in Multiplication Form:\n(3 × 10,000) + (4 × 1,000) + (1 × 100) + (8 × 10) + (7 × 1)\n\nThis shows exactly what each digit contributes!",
      example: "More examples:\n- 7,654 → (7 × 1,000) + (6 × 100) + (5 × 10) + (4 × 1)\n- 50,308 → (5 × 10,000) + (0 × 1,000) + (3 × 100) + (0 × 10) + (8 × 1)",
      tryThis: "Write 23,457 using the multiplication method."
    },
    {
      slideNumber: 11,
      title: "Composing Numbers: Putting Them Together! 🧩",
      concept: "Building Numbers from Parts!",
      content: "Composing a number means putting smaller numbers together to make a bigger one. It's like building with number blocks!",
      bgColor: "#DEB887", // Burlywood
      visual: "Building 56,254:\n50,000 + 6,000 + 200 + 50 + 4 = 56,254\n\nEach piece adds up to make the whole!",
      example: "Examples of composing:\n- 60,000 + 300 + 9 = 60,309\n- 70,000 + 5,000 + 80 + 2 = 75,082\n- 40,000 + 6,000 + 500 + 10 + 7 = 46,517",
      tryThis: "What number do you get from 80,000 + 4,000 + 200 + 60 + 3?"
    },
    {
      slideNumber: 12,
      title: "Decomposing Numbers: Breaking Them Apart! 💥",
      concept: "Breaking Numbers into Smaller Parts!",
      content: "Decomposing is the opposite of composing. It means breaking a number down into its smaller parts. This helps us understand numbers better!",
      bgColor: "#F4A460", // Sandy brown
      visual: "Decomposing 73,529:\n73,529 → 70,000 + 3,000 + 500 + 20 + 9\n\nOr even: 73,529 → 70,000 + 3,529",
      example: "Different ways to decompose 48,062:\n- By place value: 40,000 + 8,000 + 0 + 60 + 2\n- Other ways: 48,000 + 62\n- Or: 45,000 + 3,062",
      tryThis: "Decompose 67,834 into its place value parts."
    },
    {
      slideNumber: 13,
      title: "The Mighty Zero! 🦸‍♂️",
      concept: "Zero: The Placeholder Hero!",
      content: "The digit 0 is a real hero! It acts as a placeholder. Without zero, numbers would get all mixed up! It tells us when there are no groups of a certain place value.",
      bgColor: "#20B2AA", // Light sea green
      visual: "Zero in Action:\n60,345 vs 6,345\n\nThe zero in 60,345 means:\n- 6 ten thousands\n- 0 thousands\n- 3 hundreds\n- 4 tens\n- 5 ones",
      example: "Examples of zero as placeholder:\n- 502 vs 52 (zero holds the tens place)\n- 30,067 vs 3,067 (zero holds the thousands place)\n- 80,000 vs 8,000 (zeros hold multiple places)",
      tryThis: "What's the difference between 705 and 75? Which place does zero hold?"
    },
    {
      slideNumber: 14,
      title: "Numbers on a Line! 📏",
      concept: "Finding Our Place on the Number Line!",
      content: "A number line helps us see where numbers are and how they relate to each other. Each number has its own unique spot!",
      bgColor: "#DA70D6", // Orchid
      visual: "Number Line (0 to 100,000):\n0 -------- 25,000 -------- 50,000 -------- 75,000 -------- 100,000\n\n50,000 is right in the middle!\n80,000 is closer to 100,000 than to 0",
      example: "Where would these numbers be?\n- 25,000: Halfway between 0 and 50,000\n- 75,000: Halfway between 50,000 and 100,000\n- 90,000: Very close to 100,000",
      tryThis: "On a line from 0 to 10,000, where would 3,500 be?"
    },
    {
      slideNumber: 15,
      title: "Numbers in Our World! 🌎",
      concept: "Big Numbers Are Everywhere!",
      content: "Numbers up to 100,000 are all around us in real life! Let's see where we can find them.",
      bgColor: "#32CD32", // Lime green
      visual: "Where We See Big Numbers:\n🏙️ Town populations: 24,500 people\n🚗 Car odometers: 87,090 km\n💰 Expensive items: $25,000 car\n📱 Video views: 98,000 views\n🎮 Game scores: 75,000 points",
      example: "Real examples:\n- Small city: 'Welcome to Riverside - Population: 45,000'\n- Used car: 'Only 62,000 miles!'\n- Popular video: '1.2M views' (that's 1,200,000!)",
      tryThis: "Next time you're out, look for numbers bigger than 1,000. What are they describing?"
    },
    {
      slideNumber: 16,
      title: "You're a Number Whiz! 🧠💡",
      concept: "Number Power Recap!",
      content: "Wow, you've learned so much about whole numbers up to 100,000! You're becoming a place value expert!",
      bgColor: "#FF69B4", // Hot pink
      visual: "What You've Mastered:\n✓ Digits (0-9) build all numbers\n✓ Place value determines digit worth\n✓ Reading & writing in different forms\n✓ Expanded form shows number parts\n✓ Composing & decomposing numbers\n✓ Zero as the placeholder hero\n✓ Finding numbers in real life",
      example: "You can now:\n- Read 'eighty-three thousand, four hundred seven'\n- Write 83,407 in expanded form\n- Understand that 90,000 > 9,000\n- Spot big numbers everywhere!",
      tryThis: "Pat yourself on the back! You've got number power!"
    },
    {
      slideNumber: 17,
      title: "Practice Time! Test Your Skills! 🧩❓",
      concept: "Challenge Yourself!",
      content: "Let's see what you've learned! Try these practice questions to test your new number skills.",
      bgColor: "#FF6347", // Tomato
      visual: "Practice Questions:\n1. Write 67,034 in words\n2. Value of '8' in 98,215?\n3. Standard form of 'forty-two thousand, one hundred nine'\n4. Expanded form of 25,473\n5. Which is larger: 70,560 or 70,065?",
      example: "Answers:\n1. Sixty-seven thousand, thirty-four\n2. 8,000 (eight thousand)\n3. 42,109\n4. 20,000 + 5,000 + 400 + 70 + 3\n5. 70,560 (has 5 hundreds vs 0 hundreds)",
      tryThis: "Try creating your own practice questions for a friend!"
    }
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
      background: `linear-gradient(135deg, ${currentSlide.bgColor} 0%, #EA4335 100%)`, // Mix with Google Red
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
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '25px',
        padding: '6px',
        display: 'flex',
        zIndex: 15,
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(10px)',
        border: '2px solid rgba(255, 255, 255, 0.3)'
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
            backgroundColor: selectedAI === 'chatgpt' ? '#667eea' : 'transparent', // ChatGPT color
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

      {/* Gemini Prompt Label */}
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
        Gemini Prompt
      </div>

      {/* Main Content (similar to other components, with Gemini-specific content) */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        textAlign: 'center'
      }}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          padding: '60px',
          maxWidth: '900px',
          width: '100%',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: `4px solid ${currentSlide.bgColor}`,
          position: 'relative'
        }}>
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
          <h1 style={{
            fontSize: '2.5rem',
            color: currentSlide.bgColor,
            marginBottom: '20px',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}>
            {currentSlide.title}
          </h1>
          <div style={{
            backgroundColor: `${currentSlide.bgColor}20`,
            padding: '20px',
            borderRadius: '15px',
            marginBottom: '30px',
            border: `2px solid ${currentSlide.bgColor}40`
          }}>
            <h2 style={{
              fontSize: '1.3rem',
              color: currentSlide.bgColor,
              margin: '0',
              fontWeight: '600'
            }}>
              📖 {currentSlide.concept}
            </h2>
          </div>
          <div style={{
            fontSize: '1.2rem',
            color: '#333',
            lineHeight: '1.6',
            marginBottom: '25px',
            fontStyle: 'italic'
          }}>
            💬 "{currentSlide.content}"
          </div>
          {currentSlide.visual && (
            <div style={{
              backgroundColor: '#f0f8ff',
              padding: '20px',
              borderRadius: '10px',
              marginBottom: '25px',
              fontSize: '1.1rem',
              color: '#555',
              fontFamily: 'monospace',
              whiteSpace: 'pre-line',
              border: '2px solid #87ceeb'
            }}>
              👀 Visual: {currentSlide.visual}
            </div>
          )}
          {currentSlide.example && (
            <div style={{
              backgroundColor: '#e8f5e8',
              padding: '20px',
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

export default GeminiLesson;