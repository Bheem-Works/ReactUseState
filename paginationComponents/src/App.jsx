import React, { useState } from 'react'
import List from './list';
function App() {
  // for creating a list of array to the length of the 30 
  const items = Array.from({length:30},(_,i) => `Item${i+1}`); // bujhe: it create a list item of the 30;

  const[currentPage,setCurrentPage] = useState(1); // bujhe
  const itemPerPage = 3; // bujhe

  const indexOfLastItem = currentPage * itemPerPage; // bujhe : click huda 2 hunca ani 2  * 3 = 6; 
  const indexOfFirstItem = indexOfLastItem - itemPerPage; // 6 recent value - 3 = 3;
  const currentItems = items.slice(indexOfFirstItem,indexOfLastItem); //bujhina 

  const totalPage = Math.ceil(items.length/ itemPerPage); // bujhins kasri niskyo  length tah niksyo tara logic chia k thyo 

  const goToNextPage = () => {
    if(currentPage < totalPage) { // yo current page bhnda sano. 
      setCurrentPage(currentPage + 1);
    }
  }

  const goToPrevious = () => {
    if(currentPage > 1) { // yo pani
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div>
    <ul className='flex flex-col'>
      {currentItems.map((item,idx)=>(
        <li key={idx}
        className=''
        >{item}</li>
      ))}
      </ul> 
      <button onClick={goToPrevious} disabled={currentPage === 1}>GoToPrevious</button>
      <button onClick={goToNextPage} disabled={currentPage===totalPage}>NextPage</button>
      <p>{currentPage} of {totalPage}</p>


      <List />
    </div>


  )
}

export default App
