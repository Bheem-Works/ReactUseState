import React,{useState} from 'react'

function Togglebtn() {
    const [showText,setShowText] = useState(true);
    const [inputText,setInputText] = useState("This is vim");

    const dots = ".".repeat(inputText.length);

  return (
    <div>
        <input type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)} />
        <h1>{showText ? inputText : dots}</h1>
        <button onClick={()=> setShowText(!showText)}>{showText ? "Hide" : "show"}</button>
    </div>
  )
}

export default Togglebtn
