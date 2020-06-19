import React, { useState } from 'react';
import InputNumber from '../Input/InputNumber';

function ExerciseExample() {
	const [number, setNumber] = useState(null)

	return (
		<div className="example">
			<p className="example__question">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur?
			</p>
			<InputNumber onChange={setNumber} />
			<p className="example__result">
				The number is: {number}
			</p>
		</div>
	)
}

export default ExerciseExample;
