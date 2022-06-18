import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../utils/Redux/hooks';
import { CARD_IMAGE } from '../../utils/Constants/CardImages';

function Card({ keyGen }: { keyGen: number }): JSX.Element {
	const;
	const dispatch = useAppDispatch();

	const assignImg = Object.entries(CARD_IMAGE).find((el: [string, number[]]) =>
		el[1].includes(keyGen),
	);
	const img = require(`../../assets/images/${
		assignImg ? assignImg[0] : ''
	}.png`);

	const handleClick = () => setFlip(!flip);

	return (
		<div
			className={`flex justify-center ${
				!flip ? 'bg-indigo-600' : ''
			} items-center border-2 border-indigo-900 rounded-lg cursor-pointer w-20 h-20`}
			onClick={() => handleClick()}
		>
			{flip ? (
				<img src={img} alt={`${assignImg}.png`} className="w-2/3 h-2/3" />
			) : (
				<div className="flex justify-center items-center bg-white border-4 border-indigo-400 rotate-45 rounded-lg w-2/3 h-2/3">
					<div className="bg-indigo-400 rounded-lg w-2/3 h-2/3 "></div>
				</div>
			)}
		</div>
	);
}

export default Card;
