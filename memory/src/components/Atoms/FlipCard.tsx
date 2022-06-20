import React from 'react';

type TFlipCard = {
	flip: boolean;
	img: string;
};

function FlipCard({ flip, img }: TFlipCard) {
	return (
		<>
			{flip ? (
				<img src={img} alt={img} className="w-2/3 h-2/3" />
			) : (
				<div className="flex justify-center items-center bg-white border-4 border-indigo-400 rotate-45 rounded-lg w-2/3 h-2/3">
					<div className="bg-indigo-400 rounded-lg w-2/3 h-2/3 "></div>
				</div>
			)}
		</>
	);
}

export default FlipCard;
