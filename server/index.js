const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const router = require('./router');
const pool = require('./models/db');
const { postMessage } = require('./models/chat');
const SERVER_PORT = process.env.PORT || 3001;

const corsConfig = {
  origin: 'http://localhost:3000',
  credentials: true,
  exposedHeaders: 'Authorization'
};

app.use(cors(corsConfig));
app.use(express.json());
app.use(router)

const server = http.createServer(app);

(async function bootstrap () {

  try {

    await pool.connect();
    console.log('Connected to Postgres!');
  
    server.listen(SERVER_PORT, () => {
      console.log(`Server is listening on port ${SERVER_PORT}.`);
    });

  } catch (error) {
    console.log(error);
  }
})();


//add socket.io logic here

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ['GET', 'POST'],
    credentials: true
  }
})


io.on('connection', (socket) => {

  socket.emit("me", socket.id);

  socket.on('join_room', (room_id) => {
    if (socket.rooms.size > 1) {
      const iterator = socket.rooms.values();
      iterator.next().value;

      for (let i = 1; i < socket.rooms.size; i++) {
        socket.leave(iterator.next().value);
      }
    }

    socket.join(room_id);
  })

  socket.on('join_video_room', (room_id) => {

    socket.join(room_id);
  })
  
  socket.on('send_message', async (data) => {
    const postRes = await postMessage(data);
    socket.to(data.chat_id).emit('receive_message', postRes);
  })



  // video calling points 
  socket.on('disconnect', () => {
    socket.broadcast.emit('callEnded');
  });

  socket.on('check_user', ({room_id, id}) => {
    const clients = io.sockets.adapter.rooms.get(room_id);
    if (clients.size > 1) {
      socket.to(room_id).emit('get_user', id);
    }
  })

  socket.on('connect_users', (room_id) => {
    socket.to(room_id).emit('connect_users');
  })

  socket.on('join_call', (room_id) => {
    socket.to(room_id).emit('join_call');
  })

  socket.on('endCall', (chat_id) => {
    socket.to(chat_id).emit('endCall');
    socket.leave(chat_id);
  });

  socket.on('callUser', (data) => {
    socket.to(data.userToCall).emit('callUser', {signal: data.signalData, from: data.from, name: data.name});
  });

  socket.on('answerCall', (data) => {
    socket.to(data.to).emit('callAccepted', data)
  });
})


