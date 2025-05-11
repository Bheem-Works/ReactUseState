import React, {useState} from 'react';

function RealTimeChat () {

    const[message,setMessage] = useState(['']);
    const[input,setInput] = useState('');

    const handleInputChange = (e) => setInput(e.target.value);
    
    const addToMessage = () => {
        if(input.trim()){
            const timeMessage = { text:input,timeStamp: new Date()};
            setMessage([...message,timeMessage]);
            setInput('');
        }
    }    
    

    return(
        <div>

        {
            message.map((msg,idx)=>(
                <div 
                className='flex flex-col text-xl gap-3 bg-purple-400 p-2 rounded-sm w-[300px]  '
                key={idx}>
                    <div className='flex p-3 mr-3  justify-between'>
                    <p 
                    className='text-white lowercase'
                    key={idx}>{msg.text}</p>
                    <span className='uppercase font-semibold'>{msg.timeStamp ? msg.timeStamp.toLocaleTimeString(): ''}</span>
                     </div>
                    </div>
            ))
        }

            
            <div className='flex flex-col gap-4'>

         <input type="text" 
         className='text-xl bg-gray-400 text-white border-none p-3 rounded-lg'
         onChange={handleInputChange} 
         value={input}
         placeholder='text here....'/>   
         <button onClick={addToMessage}
         className = 'bg-green-500 text-xl p-3 rounded-sm border-none font-bold uppercase text-white cursor-pointer'
         >Sent Message </button>
         </div>
        </div>
    );
}

export default RealTimeChat;