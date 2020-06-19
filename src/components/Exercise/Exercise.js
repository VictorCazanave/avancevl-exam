import React from 'react';
import ExerciseFilters from './ExerciseFilters';
import ExerciseForm from './ExerciseForm';

function Exercise() {
	return (
		<main className="exercise">
			<ExerciseFilters />
			<ExerciseForm />
		</main>
	)
}

export default Exercise;
