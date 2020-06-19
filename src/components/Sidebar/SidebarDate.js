import React from 'react';
import format from 'date-fns/format';

// What is it supposed to display?
function SidebarDate() {
	const date = new Date();
	const formattedDate = format(date, 'yyyy M/d');

	return (
		<p>
			Past 24 hours, <time dateTime={date.toLocaleString()}>{formattedDate}</time>
		</p>
	);
}

export default SidebarDate;
