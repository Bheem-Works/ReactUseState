import { useState } from "react";

    function CharacterCounter() {
        const[wordCount,setWordCount] = useState('');
        const handleInputCount = (e) =>{
            setWordCount(e.target.value);
        } 

        return (
        <div>
            <input type="text" onChange={handleInputCount} value={wordCount}/>
            <p>{wordCount.length}</p>
        </div>
        );
    }
    export default CharacterCounter;