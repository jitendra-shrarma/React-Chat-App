const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const router = require('./router.js');
const {addUser, removeUser, getUser, getUsersInRoom} = require('./users.js');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// server on start of a new connection in socket
io.on('connection', (socket)=>{

	// socket on join of user in room
	socket.on('join', ({ name, room }, callback)=>{
		
		const {error, user} = addUser({ id: socket.id, name, room});
		
		// if there is an error, while adding user in the a specific room. return back
		if (error) return callback(error);

		// emit "user, welcome to room" message to welcome user in room
		socket.emit('message', { user:'Admin', text: `${user.name}, welcome to room ${user.room}`});
		// boardcase "user joined" message for all in that room except user
		socket.broadcast.to(user.room).emit('message', {user: 'Admin', text: `${user.name} had joined`});

		// join user in the room
		socket.join(user.room);

		callback();
	});

	// user sendMessage in the room
	socket.on('sendMessage', (message, callback) => {
		const user = getUser(socket.id);

		io.to(user.room).emit('message', {user: user.name, text: message});

		callback();
	});

	// after user left, it will do clean up
	socket.on('disconnect', () => {
		const user = removeUser(socket.id);
		if (user){
			io.to(user.room).emit('message', {user:'Admin', text:`${user.name} has left ${user.room}.`});
		}
	});
});

app.use(router);

server.listen(PORT, ()=> console.log(`Server has started on port ${PORT}`));