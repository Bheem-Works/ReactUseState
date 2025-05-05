import React, { useState, useEffect } from 'react';

const careers = [
  "I am a web developer",
  "I am a full-Stack Developer",
  "I am a UI/UX Designer",
  "I am a Freelancer"  // FIXED: Corrected spelling from "Freelaincer" to "Freelancer"
];

function Write() {
  const [careerIndex, setCareerIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);

  useEffect(() => {
    const currentText = careers[careerIndex];
  
    if (characterIndex < currentText.length) {
      console.log("✅ IF chalyo: Typing character...", characterIndex);
      const timeOut = setTimeout(() => {
        setCharacterIndex((prev) => prev + 1);
      }, 100);
  
      return () => clearTimeout(timeOut);
    } else {
      console.log("🔁 ELSE chalyo: Finished sentence, switching...");
      const delay = setTimeout(() => {
        setCharacterIndex(0);
        setCareerIndex((prev) => {
          const nextIndex = (prev + 1) % careers.length;
          console.log("👉 Next career index:", nextIndex);
          return nextIndex;
        });
      }, 1000);
  
      return () => clearTimeout(delay);
    }
  }, [characterIndex, careerIndex]);
  
  const currentText = careers[careerIndex];

  return (
    <div>
      <h1 className='text-2xl font-extrabold uppercase text-white'>
        {currentText.slice(0, characterIndex)}
      </h1>
    </div>
  );
}

export default Write;