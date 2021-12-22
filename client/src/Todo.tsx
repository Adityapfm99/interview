import React from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';

export default function Todo() {
	const handleItemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		// TODO: save this value to state
		console.log(event.target.value);
	};

	const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		// TODO: save this value to state
		console.log(event.target.value);
	};

	const handleOnSubmit: React.FormEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault();
		// TODO: retrieve the values from state

		// TODO: submit the values to services/todoApi.ts createTodo()
	};

	function InputForm() {
		return (
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>What needs to be done?</Form.Label>
					<Form.Control type="string" placeholder="Enter item" onChange={handleItemChange} />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>When does it need to be done by?</Form.Label>
					<Form.Control type="date" placeholder="Choose a date" onChange={handleDateChange} />
				</Form.Group>

				<Button variant="primary" type="submit" onClick={handleOnSubmit}>
					Create todo!
				</Button>
			</Form>
		);
	}

	function TodoCards() {
		// TODO: Create a dynamic component that can render any number of todo cards

		// TODO: create a handleOnComplete handler that will set a particular todo item to complete

		return (
			<Card className="mt-3">
				<Card.Body style={{ display: 'flex', justifyContent: 'space-between' }}>
					<p>Sample Todo Item</p>
					<Button>Complete</Button>
				</Card.Body>
			</Card>
		);
	}
	return (
		<Container className="mt-3">
			<InputForm />
			<TodoCards />
		</Container>
	);
}
