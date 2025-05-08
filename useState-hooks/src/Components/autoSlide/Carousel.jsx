import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function Carousel({ children }) {
  const [curr, setCurr] = useState(0);
  
  const prev = () => {
    setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1));
    console("minush")
}

const next = () => {
    setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1));
    console.log("adding")
  }
  
  return (
    <div className="overflow-hidden relative">
      <div 
        className="flex transition-transform ease-out duration-500" 
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {children}
      </div>
      <p className='text-2xl'>Current Slide: {curr}</p>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white' onClick={prev}>
          <ChevronLeft size={40} />
        </button>
        <button className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white' onClick={next}>
          <ChevronRight size={40} />
        </button>
      </div>
      
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {React.Children.map(children, (_, i) => (
            <div
              key={i}
              className={`
                transition-all w-3 h-3 bg-white rounded-full
                ${curr === i ? "p-2" : "bg-opacity-50"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel