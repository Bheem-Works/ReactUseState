import React, { useState } from 'react';
import imageOne from '../assets/plant.png';

function ShoppingCard() {
  const [count, setCount] = useState(0);
  const [addedCount, setAddedCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  const handleAdd = () => {
    setAddedCount(prev => prev + count);
    setCount(0);
  };
  const resetCard = () => {
    setCount(0);
    setAddedCount(0);
  }

  return (
    <>
      <div className="flex bg-gray-500 p-3 rounded-sm w-70 shadow-2xl">
        <div>
          <img src={imageOne} className="w-70" alt="Oxygine Machine" />
          <p className="font-semibold text-2xl text-white text-start my-3">Oxygine Machine</p>
          <p className="font-semibold text-2xl text-white text-start my-3 ">$41.99</p>
          <p className="text-white text-sm text-start">
            This machine converts water and sunlight to the oxygen! Eco-Friendly too because they don't need any electricity. Available in multiple shades of green.
          </p>
          <div className="flex justify-between items-center mt-3">
            <button
              onClick={increment}
              className="text-xl bg-blue-500 w-10 text-white cursor-pointer hover:bg-blue-600 rounded-sm"
            >
              +
            </button>
            <span className="text-2xl text-white font-bold mx-4">{count}</span>
            <button
              onClick={decrement}
              className="text-xl bg-red-500 w-10 text-white cursor-pointer hover:bg-red-600 rounded-sm"
            >
              -
            </button>
            <button
              onClick={handleAdd}
              className="text-sm bg-green-500 px-3 py-1 text-white ml-4 hover:bg-green-600 rounded-sm"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    
    {/* Reset Card */}
               <button
    onClick={resetCard}
  className="text-sm bg-yellow-500 px-3 my-3 py-1 text-white ml-4 hover:bg-yellow-600 rounded-sm"
>
  Reset
</button>

      {/* Shopping Cart */}
      <div className="mt-5 text-black">
        <p className="text-xl font-semibold">🛒 Shopping Cart</p>
        <p>Items Added: {addedCount}</p>
      </div>
    </>
  );
}

export default ShoppingCard;
