
import React, { useState } from 'react'

function Pagination() {
    const items = Array.from({length:30},(_,i)=>`Items${i+1}`);
    const [currentPage,setCurrentPage] = useState(1);
    const perPage = 3;

    const lastOfIndex = currentPage * perPage;
    const firstOfIndex = lastOfIndex - perPage;
    const currentIndex = items.slice(firstOfIndex,lastOfIndex);
    const totalPage = Math.ceil(items.length / perPage);

    function nextPage () {
        if(currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
        }
    }
    function prevPage () {
        if(currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

  return (
    <div>
        <ul className='flex flex-col text-2xl m-5 text-orange-500'>
            {currentIndex.map((itms,idx)=>(
                <li key={idx}>{itms}</li>
            ))}
        </ul>
        <button 
        className='bg-red-500 text-xl text-white p-2 rounded-sm font-bold cursor-pointer hover:bg-red-600 disabled:cursor-not-allowed'
        onClick={prevPage} disabled={currentPage === 1}>Prev</button>
        <button className='bg-green-500 text-xl text-white p-2 rounded-sm font-bold cursor-pointer hover:bg-green-600 m-3 disabled:cursor-not-allowed'
         onClick={nextPage} disabled= {currentPage === totalPage}>Next</button>
         <p className='text-3xl font-semibold'>{currentPage} of {totalPage}</p>
    </div>
  )
}

export default Pagination
