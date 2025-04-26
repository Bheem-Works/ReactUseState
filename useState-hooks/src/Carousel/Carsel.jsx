import React, { useState } from 'react';

function Carousel({ children }) {
  const [curr, setCurr] = useState(0);
  
  function next() {
    setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1));
  }
  
  function prev() {
    setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1));
  }
  
  return (
    <div className="overflow-hidden relative w-full">
      <div 
        className="flex transition-transform duration-500 ease-in-out" 
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button 
          onClick={prev}
          className="p-1 rounded-full bg-white/80 text-gray-800 hover:bg-white"
        >
          ←
        </button>
        <button 
          onClick={next}
          className="p-1 rounded-full bg-white/80 text-gray-800 hover:bg-white"
        >
          →
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {children.map((_, i) => (
            <button
              key={i}
              className={`
                h-3 w-3 rounded-full transition-colors
                ${curr === i ? 'bg-white' : 'bg-white/50'}
              `}
              onClick={() => setCurr(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;