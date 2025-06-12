import React, { useState } from 'react'
import SignUp from './SignUp';
import PersonalInfo from './PersonalInfo';
import Others from './Others';

    function Form() {
        const [page,setPage] = useState(0);

        const formTitle = ["signUp","personalInfo","others"]
        
        // Creating a function to swtich to the next page; 
        function switchPage(){
          switch (page){
            case 0 : return <SignUp />
            case 1 : return <PersonalInfo />
            case 2 : return <Others />
            default : return <SignUp />
          }
        }

        // or 
      //   const components = [<SignUp /> ,<PersonalInfo /> , <Others />]
      // function case (page) {
      //   return components[page];
      // }  

      return (
        <div>
            {/* Creating a div for the each sections */}
            <div className="progressbar"></div>
            <div className="header">
              {/* Asserting the title. To show which current page you are.  */}
              <p>
                {formTitle[page]}
                </p>
              
            </div>
            <div className="body">
              {/* To bring the output by the functions */}
              {switchPage()}
            </div>
            <div className="footer">
                {/* moving to the previous page */}
                <button 
                onClick={()=>setPage(count => count - 1)}
                disabled={page === 0}
                className='text-white text-xl bg-red-400 font-semibold rounded-sm m-3'
                >Prev</button>
                
                {/* Moving to the next page */}
                <button
                onClick={()=>setPage(count => count + 1)}
                disabled={page === formTitle.length-1}
                className='text-white text-xl bg-green-400 font-semibold rounded-sm'
                >Next</button>
            </div>
        </div>
      )
    }
    
    export default Form
    