    import React, { useState } from 'react'
    import imageOne from '../assets/plant.png';

    function ShoppingCard() {

      // Functionality 
      const[count,setCount] = useState(0);
      const [add,setAdd] = useState(0);
      const increment = () => setCount(count => count + 1);
      const decrement = () => setCount(count => count - 1);
      const incrementAdd = () => {
        setAdd(count);
      }
      return (
        <>
        <div className='flex bg-gray-500 p-3  rounded-sm w-70 shadow-2xl'>
            <div>
          <img src={imageOne} 
          className='w-70'
          alt="" />
          <p className='font-semibold text-2xl text-white text-start my-3'>Oxygine Machine</p>
          <p className='font-semibold text-2xl text-white text-start my-3 '>$41.99</p>
          <p 
          className='text-white text-sm text-start'
          >This machine converts water and sunlight to the oxygen! Eco-Friendly too because they don't need any electricity. Aviables in the multiple shades of the green.</p>
          <div className='flex justify-between'>
            <button 
            onClick={increment}
            className='text-xl  bg-blue-500  w-10 text-white my-3 cursor-pointer hover:bg-blue-600 rounded-sm'>+</button>
            <button 
            className='text-2xl text-white font-bold '
            >{count}</button>
            <button onClick={decrement}
            className='text-xl  bg-red-500  w-10 text-white my-3 cursor-pointer hover:bg-red-600 rounded-sm'
            >-</button>
          <div>
          </div>
            <button onClick={incrementAdd}
            className='text-xl  bg-green-500  w-10 text-white my-3 cursor-pointer hover:bg-green-600 rounded-sm'
            >Add</button>
          </div>
            </div>


        </div>
        <div>
          {/* Shopping Card */}
        <div>
          {add}
        <p>Shoppoing Card</p>
        </div>
        </div>
        </>
      )
    }
    
    export default ShoppingCard
    