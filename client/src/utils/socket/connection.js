import socketClient from "socket.io-client"

const SERVER = 'http://localhost:5000'

let socket;

export const connectWithSocket = () =>{
  socket = socketClient(SERVER);


  socket.on('connection',()=>{
    console.log("Successfully connected with wss server")
    console.log(socket.id)
  })
}