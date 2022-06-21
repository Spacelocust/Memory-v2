import React from 'react';

import FlipCard from '../Atoms/FlipCard';

import { useAppDispatch, useAppSelector } from '../../utils/Redux/hooks';
import { select } from '../../utils/Redux/Slices/memory';

import { IsSelected } from '../../utils/Helpers/Hooks';
import { CARD_IMAGE } from '../../utils/Constants/CardImages';

function Card({ keyGen }: { keyGen: number }): JSX.Element {
	const keepPair = useAppSelector((state) => state.memory.keepPair);
	const dispatch = useAppDispatch();

	const assignImg = Object.entries(CARD_IMAGE).find((el: [string, number[]]) => el[1].includes(keyGen));
	const img = require(`../../assets/images/${assignImg ? assignImg[0] : ''}.png`);

	const name: string = `card-${keyGen}`;
	const selected: boolean = IsSelected(`card-${keyGen}`);

	const handleSelect = () => {
		!selected && !keepPair.includes(name) && dispatch(select({ name, value: assignImg ? assignImg[0] : '' }));
	};

	return (
		<div
			className={`flex justify-center ${
				!selected && !keepPair.includes(name) ? 'bg-indigo-600' : 'bg-white'
			} items-center border-2 ${
				!keepPair.includes(name) ? 'border-indigo-500' : 'border-green-900'
			} rounded-lg cursor-pointer w-20 h-20`}
			onClick={() => handleSelect()}
			data-testid={name}
			role="card"
		>
			<FlipCard flip={selected || keepPair.includes(name)} img={img} />
		</div>
	);
}

export default Card;
