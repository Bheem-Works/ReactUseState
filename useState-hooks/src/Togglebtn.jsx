import React,{useState} from 'react'

function Togglebtn() {
    const  [one,setOne] = useState(true);
  return (
    <div>
        {
            one ? <h1>This is vim</h1> : null 
        }
      <button onClick={()=> setOne(!one)}>toggle</button>
    </div>
  )
}

export default Togglebtn
