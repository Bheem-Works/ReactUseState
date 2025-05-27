import React, { useState } from 'react'
import PersonPage from './PersonPage';

function App() {
  const [ready,setReady] = useState('');
  const [nextPage,setNextPage] = useState(false);
  const [message,setMessage] = useState('');
  const[hasClicked,setHasClicked] = useState(false);

  const onChange = (e) => {
    setReady(e.target.value);
  } 
  const next = () => {
    setHasClicked(true);
    if(ready.trim().toLowerCase() === "ready"){
      setMessage('You are ready!')
      setTimeout(()=>{
        setNextPage(true)
      },1000);
    } else {
      setMessage('');
    }
  }
  if(nextPage) {
    return <PersonPage />
  }
    
  
  return (
    <div>
        <h1> Hello Folks! </h1>
        <p>If you are ready then type ready.</p>
        <input type="text" onChange={onChange}/>
        <button onClick={next}> Next</button>
        {hasClicked && (
          message ? 
           <p style = {{color:'green'}}>{message}</p>
           :<p style={{color:'red'}}>You have to type ready</p>
        )}
    </div>
  )
}

export default App
