import React from 'react';
import Button from 'react-bootstrap/Button';

function ExerciseForm({ title, children }) {
	return (
		<form className="form">
			<h2 className="form__title">{title}</h2>
			{children}
			<footer className="form__footer">
				<Button variant="outline-secondary" className="form__footer__skip">Skip</Button>
				<Button variant="primary" type="submit">Submit</Button>
			</footer>
		</form>
	)
}

export default ExerciseForm;
