import socketClient from "socket.io-client"
import store from "../../store/store";
import * as dashboardActions from "../../store/actions/dashboard"

const SERVER = 'http://localhost:5000'

const broadcastEventTypes = {
  ACTIVE_USERS:'ACTIVE_USERS',
  GROUP_CALL_ROOMS:'GROUP_CALL_ROOMS'
}

let socket;

export const connectWithSocket = () =>{
  socket = socketClient(SERVER);


  socket.on('connection',()=>{
    console.log("Successfully connected with wss server")
    console.log(socket.id)
  })

  socket.on('broadcast',(data)=>{
    handleBroadcaseEvents(data)
  })
}

export const registerNewUser = (username) => {
  socket.emit('register-new-user', {
    username,
    socketId:socket.id
  })
}



const handleBroadcaseEvents = (data)=>{
  switch(data.event){

    case broadcastEventTypes.ACTIVE_USERS:
      const activeUsers = data.activeUsers.filter(u => u.socketId !== socket.id)
      store.dispatch(dashboardActions.setActiveUsers(activeUsers))
      break;

    default:
      break;


  }
}