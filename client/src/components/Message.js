import React from 'react';
import ReactEmoji from 'react-emoji';
import { Card, CardHeader, CardBody, CardText } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';

const Message = ({message, name}) => {
	let isSentByCurrentUser = false;
	const trimedname = name.trim().toLowerCase();

	if (message.user === trimedname) {
		isSentByCurrentUser = true;
	}

	return (
		isSentByCurrentUser ? (
			<Row>
				<Col>
					<Card border="secondary" style={{ width: '18rem', float: 'right' }}>
						<Card.Header>{name}</Card.Header>
						<Card.Body>
							<Card.Text>
								{ReactEmoji.emojify(message.text)}
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		) : (
		message.user === 'Admin' ? (
				<Alert variant="primary">
					<Row>
						<Col>
							{message.text}
						</Col>
					</Row>
				</Alert>
			) : (
				<Row>
					<Col>
						<Card border="light" style={{ width: '18rem', float: 'left' }}>
							<Card.Header>{message.user}</Card.Header>
							<Card.Body>
								<Card.Text>
									{ReactEmoji.emojify(message.text)}
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			)
		)
	)

}

export default Message;