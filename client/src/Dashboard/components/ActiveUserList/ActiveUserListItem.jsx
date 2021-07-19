import React from 'react'
import "./ActiveUserList.css"
import userAvatar from "../../../resources/userAvatar.png"
const ActiveUserListItem = ({user}) => {

  const handleListItemPressed = () => {
    //
  }
  return (
    <div className='active_user_list_item' onClick={handleListItemPressed}>
      <div className="active_user_list_image_container">
        <img src={userAvatar} alt="user avatar" className="active_user_list_image" />
      </div>
      <div className="active_user_list_text">
        {user.username}
      </div>
    </div>
  )
}

export default ActiveUserListItem
