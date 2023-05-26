import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Form, FormControl, FormGroup } from 'react-bootstrap';
import { Button, Alert } from 'react-bootstrap';

const Input = ({ message, setMessage, sendMessage }) => (
	<Container xs="auto" className="sendMessageContainer" style={{ padding:'0px' }}>
		<Alert variant="success">
			<Form>
				<Row>
					<Col xs={8} sm={9} md={10} lg={10}>
						<Form.Control type="text"
						value={message}
						placeholder="Message"
						onChange={(event) => setMessage(event.target.value)}
						onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
						/>
					</Col>
					<Col xs={4} sm={3} md={2} lg={2}>
						<Button variant="success" type="button" onClick={(event) => sendMessage(event)}>Send</Button>
					</Col>
				</Row>
			</Form>
		</Alert>
	</Container>
)

export default Input;