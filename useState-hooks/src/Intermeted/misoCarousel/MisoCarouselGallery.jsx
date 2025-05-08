import React from 'react'
import MisoCarousel from './MisoCarousel';

const slides = [
  "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&h=800&fit=crop"
];

function MisoCarouselGallery() {
  return (
    <div className="w-full px-4">
      <main className='max-w-2xl mx-auto'>
        <MisoCarousel>
          {slides.map((s, i) => (
            <img
              key={i}
              src={s}
              alt={`Slide ${i + 1}`}
              className='w-full h-64 object-cover rounded-sm'
            />
          ))}
        </MisoCarousel>
      </main>      
    </div>
  )
}

export default MisoCarouselGallery
