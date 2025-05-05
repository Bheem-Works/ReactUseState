import React from 'react'
import Carsel from './Carsel';
const images = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png"
];

function Carousel() {
  return (
    <div className='max-w-lg'>
      <Carsel>
        {images.map((img,index) => {
            <img key={index} src={img} alt="" />
        })}
        </Carsel>
    </div>
  )
}

export default Carousel
