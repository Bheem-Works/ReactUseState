import React, { useState } from 'react'

function ToDo() {
    const [add,setAdd] = useState(["vim"]);
    const [newState,setNewState] = useState("");
    const addToTask = (e) =>{
        setNewState(e.target.value)
    }

    const addTask = () => {
        if(newState.trim()!=="") {
            setAdd([...add,newState]);
            setNewState("");
        }
    }
  return (
    <div>
    <input type="text" onChange={addToTask} value={newState} />  
    <button onClick={addTask}>AddTask</button>
    <ul>
        {add.map((todo,index)=>(
            <li key={index}>{todo}</li>
        ))}
    </ul>
    </div>
  )
}

export default ToDo
    