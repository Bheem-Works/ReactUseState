import React from 'react'
import Carousel from './Carousel';

const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png"
];

function AutoSlide() {
  return (
    <div>
      <main className='app'>
        <div className="max-w-lg">
          <Carousel>
            {slides.map((s, index) => (
              <img key={index} src={s} className="w-full flex-shrink-0" alt={`Slide ${index + 1}`} />
            ))}
          </Carousel>
        </div>
      </main>
    </div>
  )
}

export default AutoSlide