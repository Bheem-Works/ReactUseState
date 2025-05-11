import React, { useState } from 'react'

function List() {
    const items = Array.from({length:30},(_,i)=>`Items${i+1}`);
    const [currentPage,setCurrentPage] = useState(1);
    const perPage = 3;

    const lastOfIndex = currentPage * perPage;
    const firstOfIndex =  lastOfIndex - perPage;
    const currentIndex = items.slice(firstOfIndex,lastOfIndex);
    const totalPage = Math.ceil( items.length / perPage);

    const goToNext = () => {
        if(currentPage < totalPage) {
            setCurrentPage( currentPage + 1);
        }
    }
    
    const goToPrev = () => {
        if(currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }


  return (
    <div>
    <ul>
    {currentIndex.map((li,idx)=>(
        <li key={idx}>{li}</li>
    ))}    
    </ul>  

    <button onClick={goToNext}>Next</button>
    <button onClick={goToPrev}>Prev</button>
    </div>
  )
}

export default List
