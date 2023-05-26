import React from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Alert, AlertHeading } from 'react-bootstrap';

const InfoBar = ({ room }) => (
	<Container xs="auto" className="infoBar" style={{ padding:'0px' }}>
		<Alert variant="success">
			<Row>
				<Col xs={8} sm={9} md={10} lg={10}>
					<Alert.Heading>{room}</Alert.Heading>
				</Col>
				<Col xs={4} sm={3} md={2} lg={2}>
					<Button variant="danger" href="/">Leave</Button>
				</Col>
			</Row>
		</Alert>
	</Container>
)

export default InfoBar;