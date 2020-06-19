import React, { useState } from 'react';
import SidebarAccuracy from './SidebarAccuracy';
import SidebarCount from './SidebarCount';
import SidebarDate from './SidebarDate';

function Sidebar() {
	const [completedCount] = useState(100);
	const [correctCount] = useState(75);

	return (
		<aside className="sidebar">
			<div className="sidebar__section sidebar__section--accuracy">
				<SidebarAccuracy
					completedCount={completedCount}
					correctCount={correctCount}
				/>
			</div>

			<div className="sidebar__section sidebar__section--counts">
				<SidebarCount title="Completed" count={completedCount} />
				<SidebarCount title="Correct" count={correctCount} />
			</div>

			<div className="sidebar__section sidebar__section--date">
				<SidebarDate />
			</div>
		</aside>
	);
}

export default Sidebar;
