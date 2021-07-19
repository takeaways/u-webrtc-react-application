import React from 'react'

const SubmitButton = ({onClick}) => {
  return (
    <div className="login-page_button_container ">
      <button className='login-page_button background_main_color text_main_color' onClick={onClick}>
        Start Using Video Call
      </button>
    </div>
  )
}

export default SubmitButton
