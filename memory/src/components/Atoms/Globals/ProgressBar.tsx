import React from 'react';

function ProgressBar({ percent, className = 'bg-blue-600' }: { percent: number; className?: string }): JSX.Element {
	return (
		<div className="w-full bg-gray-200 h-5 mb-6">
			<div className={`${className} h-5`} style={{ width: `${percent}%` }}></div>
		</div>
	);
}

export default ProgressBar;
