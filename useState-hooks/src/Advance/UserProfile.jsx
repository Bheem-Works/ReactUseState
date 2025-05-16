    import React, { useState } from 'react'
    
    function UserProfile() {
        const[user,setUser] = useState('vim');
        const [password,setPassword] = useState('');
        const [bio,setBio] = useState('');
        const [saveOnChange,setSaveOnChange] = useState('');
        const [savePassword,setSavePassword] = useState('');
        const [saveBio,setSaveBio] = useState('');

        function userOnChange (e){
          setUser(e.target.value);
        }
        
        function passwordOnChange(e){
          setPassword(e.target.value);
        }
        function bioOnChange(e){
          setBio(e.target.value);
        }
        function saveButton () {
          saveuser();
          clickSavePassword();
          clickSaveBio();
        }
        function saveuser(){
          setSaveOnChange(user);
        }
        function clickSavePassword (){
          setSavePassword(password);  
        }
        function clickSaveBio(){
          setSaveBio(bio);
        }
      return (
        <div>
          <form>
          <label htmlFor="html">
            UserName:
            <input type="text" placeholder='enter your user name....' onChange = {userOnChange} value={user}/>
            </label>   

            <label htmlFor="html">
              PassWord:
              <input type="text" placeholder='enter your password..' onChange={passwordOnChange}/>
            </label>

            <label htmlFor="html">
              Bio:
              <textarea onChange={bioOnChange}/>
            </label>
          </form>
            <button onClick={saveButton}
            className='bg-blue-500 cursor-pointer p-2 rounded-sm font-bold m-2 hover:bg-blue-600'
            >Save</button>
            <p className="text-2xl capitalize">{saveOnChange}</p>
            <p>{savePassword}</p>
            <p>{saveBio}</p>
        </div>

        
      )
    }
    
    export default UserProfile
    