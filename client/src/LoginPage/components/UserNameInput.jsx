import React from 'react'


const UserNameInput = ({username, setUsername}) => {

  

  return (
    <div className="login-page_input_container">
      <input 
        placeholder="Enter your name" 
        type="text" 
        className="login-page_input background_main_color text_main_color"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
       />
    </div>
  )
}

export default UserNameInput
