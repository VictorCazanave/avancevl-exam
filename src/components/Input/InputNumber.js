import React, { useState, useRef } from 'react';

const invalidCharacters = /[^0-9./]/;

/*
 * IMHO the instructions are not clear enough to understand the expected behaviour of this component
 * TODO:
 * - Use value prop to make a controlled component
 * - Handle '/'
 * - Disable arrows and clicking
 * - Handle validation and submit
 */
function InputNumber({ value, onChange }) {
	const [characters, setCharacters] = useState(['', '', '', '']);
	const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)];

	const handleKeyDown = (e) => {
		// Delete previous value when current value is empty
		if (e.keyCode === 8 && e.target.value === '') {
			const { name } = e.target;
			const index = parseInt(name, 10);

			if (index > 0) {
				const newCharacters = [...characters];
				newCharacters[index - 1] = '';
				setCharacters(newCharacters);
				inputs[index - 1].current.focus()
			}
		}
	}

	const handleChange = (e) => {
		// Generate new characters
		const { name, value } = e.target;
		const index = parseInt(name, 10);
		const validatedValue = value.replace(invalidCharacters, '');
		const newCharacters = [...characters];
		newCharacters[index] = validatedValue;

		setCharacters(newCharacters);

		if (newCharacters.every(char => char !== '')) {
			const number = Number(newCharacters.join(''))

			if (!Number.isNaN(number)) {
				onChange(number)
			}
		}

		if (index < 3 && validatedValue !== '') {
			// Focus next input
			inputs[index + 1].current.focus()
		}
	}

	return (
		<div className="number">
			{

				[...Array(4)].map((_, i) =>
					<input
						key={i}
						value={characters[i]}
						name={i}
						ref={inputs[i]}
						maxLength="1"
						placeholder={i + 1}
						autoFocus={i === 0}
						className="number__input"
						onKeyDown={handleKeyDown}
						onChange={handleChange}
					/>
				)
			}
		</div>
	);
}

export default InputNumber;
