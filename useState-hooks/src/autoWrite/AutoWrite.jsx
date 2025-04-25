import React, { useState, useEffect } from 'react';

// 👇 List of messages to show one-by-one
const careers = ['I am a developer', 'I am a designer', 'I am a freelancer'];

function TypingEffect() {
  const [careerIndex, setCareerIndex] = useState(0);      // 🧠 Which text are we on
  const [charIndex, setCharIndex] = useState(0);          // ✍️ How many letters to show

  useEffect(() => {
    const currentText = careers[careerIndex];

    console.log("▶ useEffect runs");
    console.log("   currentText:", currentText);
    console.log("   careerIndex:", careerIndex);
    console.log("   charIndex:", charIndex);

    // ⏱ Typing next character every 200ms
    const timeout = setTimeout(() => {
      setCharIndex((prev) => {
        console.log("   → Typing next letter, charIndex becomes:", prev + 1);
        return prev + 1;
      });
    }, 200);

    // ✅ When full word is typed
    if (charIndex === currentText.length) {
      console.log("✅ Finished typing:", currentText);

      setTimeout(() => {
        console.log("⏳ Switching to next text after 1s...");

        // reset character index
        setCharIndex(0);
        // go to next text using looping logic
        setCareerIndex((prev) => {
          const nextIndex = (prev + 1) % careers.length;
          console.log("   🔁 Moving to next careerIndex:", nextIndex);
          return nextIndex;
        });
      }, 1000);
    }

    // 🧹 Clean-up: clear timeout before next run
    return () => {
      console.log("🧹 Clearing timeout");
      clearTimeout(timeout);
    };
  }, [charIndex, careerIndex]);

  const currentText = careers[careerIndex];

  return (
    <div>
      <h1>{currentText.slice(0, charIndex)}</h1>
    </div>
  );
}

export default TypingEffect;
