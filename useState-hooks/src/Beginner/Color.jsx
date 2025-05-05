import React, { useState } from 'react'

function Color() {
    const[color,setColor] = useState("#fcff");
    const handleColor = (e) => setColor(e.target.value);
  return (
    <div>
      <p>Selected Color : {color}</p>
      <div style={{background:color,width:"200px", height:"200px"}}>parkha
      </div>

      <label htmlFor="#">Selected Color 

      <input type="color" onChange={handleColor} value={color} />
      </label>
    </div>
  )
}

export default Color
