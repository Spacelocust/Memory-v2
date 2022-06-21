import React from 'react';

type TProgressBar = {
	percent: number;
	className?: string;
};

function ProgressBar({ percent, className = 'bg-blue-600' }: TProgressBar): JSX.Element {
	return (
		<div className="w-full bg-gray-200 h-5 mb-6">
			<div className={`${className} h-5`} style={{ width: `${percent}%` }}></div>
		</div>
	);
}

export default ProgressBar;
