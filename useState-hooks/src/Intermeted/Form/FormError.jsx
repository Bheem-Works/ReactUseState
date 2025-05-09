import React, { useState } from 'react'

function FormError() {
    // for store the value 
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [sucess,setSucess] = useState('');

        // passing  the current value 
        const emailOnChange = (e) => setEmail(e.target.value);
        const passwordOnChange = (e) => setPassword(e.target.value);
        
        function submit (e) {
            e.preventDefault();
            if(email.endsWith('@gmail.com') && password === '1234') {
                setSucess('Sucess');
            } else {
                setSucess('Fail');
            }
        }

  return (
    <div>
        <form onSubmit={submit} className='flex justify-center items-center h-[100vh] flex-col gap-2 '>
        <h1 className='text-3xl text-blue-500 font-extrabold uppercase tracking-widest underline'>Login Page </h1>
            <input className='
            bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"             '
             type="text" placeholder='Enter your email' onChange={emailOnChange}/>
            <input type="text" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder='Enter your password' onChange={passwordOnChange}/>
            <button type='submit' className='bg-blue-400 p-2 m-2 border-none rounded-sm text-white text-xl cursor-pointer hover:bg-blue-500'>Submit</button>
            <p className={`text-2xl text-black font-semibold uppercase ${
                sucess === 'Sucess' ? 'text-green-500' : 'text-red-500'
            }`}>{sucess}</p>
        </form>
    </div>
  )
}

export default FormError
