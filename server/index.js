const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const router = require('./router');
const pool = require('./models/db');
const SERVER_PORT = process.env.SERVER_PORT || 3001;

const corsConfig = {
  //origin: 'http://localhost:3000',
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
    console.log('Connected to Postgress!');
  
    server.listen(SERVER_PORT, () => {
      console.log('Server is listening on port 3001.');
    });

  } catch (error) {
    console.log(error);
  }
})();


//add socket.io logic here

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ['GET', 'POST']
  }
})


io.on('connection', (socket) => {

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
  
  socket.on('send_message', (data) => {
    socket.to(data.room_id).emit('receive_message', data);
  })

  // video calling points
  socket.on('disconnect', () => {
    socket.broadcast.emit('callEnded');
  });

  socket.on('callUser', (data) => {
    io.to(data.userToCall).emit('callUser', {signal: data.signalData, from: data.from, name: data.name});
  });

  socket.on('answerCall', (data) => {
    io.to(data.to).emit('callAccepted', data.signal)
  });
})

