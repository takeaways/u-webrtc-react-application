const express = require('express');
const socket = require('socket.io');

const PORT = 5000;
const app = express();

const broadcastEventTypes = {
  ACTIVE_USERS:'ACTIVE_USERS',
  GROUP_CALL_ROOMS:'GROUP_CALL_ROOMS'
}

const server = app.listen(PORT, ()=> {
  console.log("server start on port "+PORT)
  console.log(`http://localhost:${PORT}`)
})


const io = socket(server, {
  cors:{
    origin:'*',
    method:['GET','POST']
  }
})

io.on('connection', (socket)=>{
  socket.emit('connection',null);
  console.log('new user connected')
  console.log(`${socket.id}`)

  let peers =[];

  socket.on('register-new-user', ({username, socketId})=>{
    peers.push({
      username,
      socketId
    })

    io.sockets.emit('broadcast',{
      event:broadcastEventTypes.ACTIVE_USERS,
      activeUsers:peers
    })

  })


  socket.on('disconnect',() =>{
    console.log(`user disconnected`);
    peers = peers.filter(peer => peer.socketId !== socket.id )
    io.sockets.emit('broadcast',{
      event:broadcastEventTypes.ACTIVE_USERS,
      activeUsers:peers
    })
  })



})