import React, { useState } from 'react'

function Toggle() {
    const [isVisible,setIsVisible] = useState(false);
    
    const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div>
        <button onClick={toggleVisibility} className='text-white text-2xl bg-blue-400 hover:bg-blue-500 border p-3 rounded-md'>{isVisible ? "hide" : "show"}</button>
        {isVisible && <p className='text-white font-bold'>This is some Text Man. it can be toggled</p>};
    </div>
  )
}

export default Toggle
