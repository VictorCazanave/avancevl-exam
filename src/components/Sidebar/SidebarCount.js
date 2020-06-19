import React from 'react';

function SidebarCount({ title, count }) {
	return (
		<div>
			<h2 className="sidebar__section__title">{title}</h2>
			<p>
				<span className="sidebar__section__value">{count}</span>
				<span className="sidebar__section__unit">
					{count > 1 ? "problems" : "problem"}
				</span>
			</p>
		</div>
	);
}

export default SidebarCount;
