import React from 'react';
import Carousel from './Carousel';

// Array of Unsplash images with consistent dimensions (1200x800)
const slides = [
  "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&h=800&fit=crop"
];

function ImageCarousel() {
  return (
    <div className="flex justify-center items-center w-full max-h-full p-4">
      <div className="w-full max-w-lg">
        <Carousel>
          {slides.map((s, i) => (
            <div key={i} className="min-w-full flex-shrink-0 flex justify-center items-center">
              <img 
                src={s} 
                alt={`Nature landscape ${i+1}`} 
                className="w-full h-64 object-cover rounded"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ImageCarousel;