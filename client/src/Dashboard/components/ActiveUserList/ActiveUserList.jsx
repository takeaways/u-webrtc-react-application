import React from 'react'
import "./ActiveUserList.css";
import ActiveUserListItem from "./ActiveUserListItem"
const activeUsers = [
  {
    socketId: 321,
    username: 'Paul'
  },
  {
    socketId: 333,
    username: 'John'
  },
  {
    socketId: 432,
    username: 'Kate'
  },
  {
    socketId: 345,
    username: 'Adam'
  }
];

const ActiveUserList = () => {
  return (
    <div className="active_user_list_container">
      {activeUsers.map(user => <ActiveUserListItem key={user.id} user={user}/>)}
    </div>
  )
}

export default ActiveUserList
