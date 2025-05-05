import React,{useState} from 'react'

function Counter() {
    const [count,setCount] = useState(0);
    const increment = () => setCount(count => count + 1);
    const decrement = () => setCount(count => count - 1);
    const textColor = count < 0 ? 'text-red-500' : 'text-green-500'; 
  return (
    <div className='flex gap-4'>
      <button onClick={increment} className='bg-green-500 p-2 border text-2xl rounded-md cursor-pointer text-white hover:bg-green-700 '>increment</button>
      <p className= {`text-5xl font-bold ${textColor}`}> {count}</p>
      <button onClick={decrement} className='bg-red-500 p-2 border text-2xl rounded-md text-white cursor-pointer hover:bg-red-700'>Decrement</button>
    </div>
  )
} 

export default Counter
