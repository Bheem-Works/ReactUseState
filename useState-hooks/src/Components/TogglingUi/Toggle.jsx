import React, { useState } from 'react'

function Toggle() {
    const[isVisible,setIsVisible] = useState(false);
    const visible = () => setIsVisible(!isVisible);
  return (
    <div>
      <button onClick={visible} className='text-white text-2xl p-2 border-0 bg-green-400 hover:bg-green-500 rounded-sm'>{
        isVisible ? "Show" : "Hide"}</button>
        {isVisible && <p className='text-white font-bold'>This is a text and miso is sleeping</p>}
    </div>
  )
}

export default Toggle
