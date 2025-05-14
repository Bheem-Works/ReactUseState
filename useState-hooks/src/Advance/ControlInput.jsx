    import React, { useState } from 'react'
    
    function ControlInput() {
        const [search,setSearch] = useState('');
        const foodItems = ['thupa','ramne','momo','burger','pizza'];

        const filterFoodItems = foodItems.filter(foods => 
            foods.toLowerCase().includes(search.toLowerCase())
        );

      return (
        <div>
        <input type="text" 
        onChange = {e => setSearch(e.target.value)}
        value=  {search}
        className="text-xl bg-white block  outline-blue-400 outline-2 focus:outline-3 p-2 rounded-sm"
        />  
        <ul>
            {filterFoodItems.map((foods,idx)=>(
                <li key={idx}>{foods}</li>
            ))}
        </ul>
        </div>
      )
    }
    
    export default ControlInput
    