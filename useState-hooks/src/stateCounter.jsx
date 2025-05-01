import React,{useState} from "react";

function StateCounter () {
    const [count,setCount] = useState(0);

    // increment 
    const increment = () => setCount(count => count + 1); 
    // decrement 
    const decrement = () => setCount(count => count - 1);
    // reset 
    const reset = () => setCount(0);

    return(
        <div>
            <h3>SetCounter</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>

            <p>{count}</p>
        </div>
    )
}
export default StateCounter;