const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io   = require('socket.io').listen(server)

// const ChatBoard = require('./ChatBoard/ChatBoard');
// const Chatroom = require('./Chatroom/Chatroom');
// const Rooms = require('./Rooms/Rooms');
// const Login = require('./Login/Login');

app.set('view engine', 'ejs');


// app.use('/Rooms', Rooms);
// app.use('/Chatroom', Chatroom);
// app.use('/ChatBoard', ChatBoard);
// app.use('/', Login);



const port = process.env.PORT || 4000;
app.listen(port, ()=>{
	console.log('socket server is on ' + port);
})
