import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { Container } from 'react-bootstrap';

import Message from './Message.js';

const Messages = ({ messages, name }) => (
	<ScrollToBottom>
		<Container style={{ height: '400px' }}>
			{messages.map((message, i) => <Container key={i} style={{ padding: '5px 15px' }}><Message message={message} name={name} /></Container>)}
		</Container>
	</ScrollToBottom>
)

export default Messages;