import React, { useState } from 'react'

function MisoCarousel({ children }) {
  const [curr, setCurr] = useState(0)
  const childrenArray = React.Children.toArray(children)

  const prev = () =>
    setCurr((prevCurr) =>
      prevCurr === 0 ? childrenArray.length - 1 : prevCurr - 1
    )

  const next = () =>
    setCurr((prevCurr) =>
      prevCurr === childrenArray.length - 1 ? 0 : prevCurr + 1
    )

  return (
    <div className="relative flex justify-center items-center w-full h-full">
      {/* Carousel wrapper */}
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{
            transform: `translateX(-${curr * 100}%)`,
          }}
        >
          {childrenArray.map((child, index) => (
            <div key={index} className="min-w-full">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
        <button
          onClick={prev}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Prev
        </button>
        <button
          onClick={next}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default MisoCarousel
