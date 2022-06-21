import React from 'react';

type TGrid = {
	Cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'none';
	Rows?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'none';
	Gap?: number | 'none';
	children?: JSX.Element | JSX.Element[];
};

function Grid({ Cols, Rows, Gap = 4, children }: TGrid): JSX.Element {
	//className={`grid grid-${Cols ? `cols-${Cols}` : `rows-${Rows}`} gap-${Gap}`}
	return (
		<div className="grid grid-cols-4 gap-4" role="grid">
			{children}
		</div>
	);
}

export default Grid;
