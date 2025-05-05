import React,{useState,useEffect} from 'react'

const careers = ["Miso is cat", "Miso love eggs", "Miso love Meat", "Miso Love Vim"];

export default function Text() {
    const [careerIndex,setCareerIndex] = useState(0);
    const [characterIndex,setCharacterIndex] = useState(0);

    useEffect(()=>{
        const currentText = careers[careerIndex];

        if(characterIndex < currentText.length) {
            console.log("if chale racha")
            const timeOut = setTimeout(()=>{
                setCharacterIndex((prev)=>prev + 1);
            },100);
            return () => clearTimeout(timeOut);
        } else {
            const delay = setTimeout(() => {
                console.log("else chale racha")
                setCharacterIndex(0);
                console.log("setCarerInde",setCareerIndex)
                setCareerIndex((prev) => {
                    const nextIndex = (prev + 1 ) % careers.length;
                    console.log("nextIndex",nextIndex);
                    return nextIndex;
                })
            }, 1000);
            return () => clearTimeout(delay);
        }
    },[careerIndex,characterIndex]);

    const currentText = careers[careerIndex];
  return (
    <div>
      <h1 className='text-white'>{currentText.slice(0,characterIndex)}</h1>
    </div>
  )
}
