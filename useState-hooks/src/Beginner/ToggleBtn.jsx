import React, { useState } from 'react'

function ToggleBtn() {
    const [isToggle,setIsToggle] = useState(false);
    const handleToggle = () => setIsToggle(!isToggle)
  return (
    <div>
      <button style={{
        backgroundColor:"black",
        color:"white",
        padding:"5px 10px",
        fontSize:"20px"
      }}
      onClick={handleToggle}>
        {isToggle ? "On" : "Off"}
        </button>
    </div>
  )
}

export default ToggleBtn
