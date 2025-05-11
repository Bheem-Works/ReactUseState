import React, {useState} from 'react';

function App(){

  const [message,setMessage] = useState(['']);
  const [input,setInput] = useState('');
  
  const handleInput = (e) => setInput(e.target.value);

  const addToMessage = () => {
    const timeMessage = {text:input,timeStamp: new Date()};
    setMessage([...message,timeMessage]);
    setInput('');
  }
  
  
  return(
  <div>
    {
      message.map((msg,idx)=>(
        <div key={idx}> 
        <p>{msg.text}</p>
        <span>{msg.timeStamp ? msg.timeStamp.toLocaleTimeString() : '' }</span>
        </div>
      ))
    }
   <input type="text" onChange={handleInput} value={input}/> 
   <button onClick={addToMessage}>Send</button>
  </div>
  );
}

export default App;
