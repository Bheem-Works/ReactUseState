import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Carousel({ children }) {
  const [curr, setCurr] = useState(0);
  const childrenArray = React.Children.toArray(children);
  
  const prev = () => setCurr((prevCurr) => (prevCurr === 0 ? childrenArray.length - 1 : prevCurr - 1));
  const next = () => setCurr((prevCurr) => (prevCurr === childrenArray.length - 1 ? 0 : prevCurr + 1));
  
  return (
    <div className="relative flex justify-center items-center">
      <div className="overflow-hidden w-full">
        <div 
          className="flex transition-transform ease-out duration-500"
          style={{
            transform: `translateX(-${curr * 100}%)`
          }}
        >
          {children}
        </div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button 
          onClick={prev} 
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          aria-label="Previous slide"
        >
          <ChevronLeft size={40}/>
        </button>
        
        <button 
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          aria-label="Next slide"
        >
          <ChevronRight size={40}/>
        </button>
      </div>
      
      {/* Uncomment this for debugging */}
      {/* <div className="absolute bottom-4 right-4 bg-white/80 px-2 py-1 rounded">
        Slide: {curr + 1}/{childrenArray.length}
      </div> */}
    </div>
  );
}

export default Carousel;
