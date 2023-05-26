import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import {Container} from 'react-bootstrap';
import InfoBar from './InfoBar.js';
import Input from './Input.js';
import Messages from './Messages.js';

let socket;

const Chat = ({ location }) => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]);
	const ENDPOINT = 'localhost:5000';

	useEffect(() => {
		const { name, room } = queryString.parse(location.search);
		
		socket = io(ENDPOINT);

		setName(name);
		setRoom(room);

		socket.emit('join', { name, room }, () => {

		});

		return () =>{
			socket.emit('disconnect');
			socket.off();
		}
	}, [ENDPOINT, location.search]);

	useEffect(() => {
		socket.on('message', (message)=> {
			setMessages([...messages, message]);
		});
	}, [messages]);

	//send message
	const sendMessage = (event) => {
		event.preventDefault();
		if (message){
			socket.emit('sendMessage', message, ()=> setMessage(''));
		}
	}

	console.log(message, messages);

	return (
		<Container style={{ backgroundColor: '#FFF', padding:'0px', maxWidth: '500px', marginTop: '50px' }}>
			<InfoBar room={room} />
			<Container>
				<Messages messages={messages} name={name} />
			</Container>
			<Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
		</Container>
	)
}

export default Chat;