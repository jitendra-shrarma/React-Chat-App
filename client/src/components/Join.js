import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Jumbotron } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form, FormGroup } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';

const Join = () => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	
	return (
		<Container className="outerContainer" style={{ width: '400px', margin: '100px auto' }}>
			<Jumbotron className="innerContainer">
				<center>
					<h1 className="header"><Badge variant="secondary">Chat-App</Badge></h1>
				</center>
				<Form>
					<Form.Group controlId="formBasicInput">
						<Form.Control type="text" placeholder="Name" onChange={(event) => setName(event.target.value)} />
					</Form.Group>
					<Form.Group controlId="formBasicInput">
						<Form.Control type="text" placeholder="Room" onChange={(event) => setRoom(event.target.value)} />
					</Form.Group>
					<Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`\chat?name=${name}&room=${room}`}>
						<Button variant="primary" size="lg" block className="signIn" type="submit">Sign In</Button>
					</Link>
				</Form>
		    </Jumbotron>
		</Container>
	)
}

export default Join;