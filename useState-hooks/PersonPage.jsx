    import React from 'react'
    
    function PersonPage() {
      return (
        <div>
          <h1>Welcome Person! Please fill up the form</h1>
          <form action="submit">
            <label>Name:</label>
            <input type="text" />
            <label>userName:</label>
            <input type="text" placeholder='enter your user name' />
            <label>Age:</label>
            <input type="number" />
            <button type="submit">Submit</button>
          </form>
        </div>
      )
    }
    
    export default PersonPage
    