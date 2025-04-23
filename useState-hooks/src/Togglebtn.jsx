import React,{useState} from 'react'

function Togglebtn() {
    const  [one,setOne] = useState(true);
    const text = "This is vim";
    const dots = ".".repeat(text.length);
  return (
    <div>
        <h1>{one ? text : dots }</h1>
      <button onClick={()=> setOne(!one)}>toggle</button>
    </div>
  )
}

export default Togglebtn
