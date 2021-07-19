import React from 'react'
import { useSelector } from 'react-redux';
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

  const {activeUsers} = useSelector(state => state.dashboard)
  console.log(activeUsers)


  return (
    <div className="active_user_list_container">
      {activeUsers.map(user => <ActiveUserListItem key={user.socket} user={user}/>)}
    </div>
  )
}

export default ActiveUserList
