import React, { useState } from 'react'

function ToDo() {
    const[task,setTask] = useState(['vim is here']);
    const[newTask,setNewTask]= useState("");
    const inputHandleChange = (e) => setNewTask(e.target.value);
    const addToTask = () => {
        if(newTask.trim()!=="") {
            setTask([...task,newTask]);
            setNewTask("");
        }
    }

  return (
    <div>
      <input type="text" onChange={inputHandleChange} value={newTask} />
      <button onClick={addToTask}>Add-Task</button>
      <ul>
        {task.map((task,index)=>(

            <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default ToDo
