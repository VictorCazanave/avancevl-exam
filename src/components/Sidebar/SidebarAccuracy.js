import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

function SidebarAccuracy({ completedCount, correctCount }) {
	const accuracy = Math.round((correctCount / completedCount) * 100);

	return (
		<CircularProgressbarWithChildren value={accuracy}>
			<svg style={{ height: 0 }}>
				<defs>
					<linearGradient id="accuracy-gradient">
						<stop offset="0%" stopColor="#0c59a0" />
						<stop offset="100%" stopColor="#bedbf7" />
					</linearGradient>
				</defs>
			</svg>
			<h2 className="sidebar__section__title">Accuracy</h2>
			<p>
				<span className="sidebar__section__value">{accuracy}</span>
				<span className="sidebar__section__unit">%</span>
			</p>
		</CircularProgressbarWithChildren>
	);
}

export default SidebarAccuracy
