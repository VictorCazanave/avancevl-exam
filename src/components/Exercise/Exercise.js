import React from 'react';
import ExerciseFilters from './ExerciseFilters';
import ExerciseForm from './ExerciseForm';
import ExerciseExample from './ExerciseExample';

function Exercise() {
	return (
		<main className="exercise">
			<ExerciseFilters />
			<ExerciseForm title="Arithmetic - Real Problem">
				<ExerciseExample />
			</ExerciseForm>
		</main>
	)
}

export default Exercise;
