import React,{useState,useEffect} from 'react'

const careers = ['I am a developer','I am a website designer','I am a ui/ux desinger','I am a freelaincer'];

function AutoWrite() {
    const [careerIndex,setCareerIndex] = useState(0);
    const [characterIndex,setCharacterIndex] = useState(0);

    useEffect(()=>{
        const currentCareer = careers[careerIndex];    
        const timeOut = setTimeout(()=>{
            setCharacterIndex((prev => prev + 1));
        },200);

        if(characterIndex === currentCareer.length) {
            setTimeout(() => {
                setCharacterIndex(0);
                setCareerIndex((prev) => (prev + 1) % careers.length)
            }, 1000);
        }

        return () => clearTimeout(timeOut);
    },[careerIndex,characterIndex])

    const currentCareer = careers[careerIndex];

  return (
    <div>
    <h1 className='text-white text-2xl text-shadow-black font-extrabold uppercase'>{currentCareer.slice(0,characterIndex)}</h1>  
    </div>
  )
}

export default AutoWrite
