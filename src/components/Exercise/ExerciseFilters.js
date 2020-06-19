import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function ExerciseFilters() {
	const [topic, setTopic] = useState('all');
	const [topicOptions] = useState([
		{
			value: 'all',
			label: 'All Topics',
		},
		{
			value: 'algebra',
			label: 'Algebra',
		},
		{
			value: 'geometry',
			label: 'Geometry',
		},
		{
			value: 'trigonometry',
			label: 'Trigonometry',
		},
		{
			value: 'arithmetic',
			label: 'Arithmetic',
		},
	]);

	return (
		<div className="filters">
			<Dropdown onSelect={setTopic}>
				<Dropdown.Toggle>
					{topicOptions.find((option) => option.value === topic).label}
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Header>TOPICS</Dropdown.Header>
					{topicOptions.map((option) => (
						<Dropdown.Item key={option.value} as="div" eventKey={option.value}>
							{option.label}
						</Dropdown.Item>
					))}
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
}

export default ExerciseFilters;
