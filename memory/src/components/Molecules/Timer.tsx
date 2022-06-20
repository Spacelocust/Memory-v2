import React, { useEffect, useMemo, useState } from 'react';

import ProgressBar from '../Atoms/Globals/ProgressBar';

import { useAppDispatch, useAppSelector } from '../../utils/Redux/hooks';
import { setTimeScore } from '../../utils/Redux/Slices/memory';

function Timer() {
	const timeDefault: number = 60;
	const [counter, setCounter] = useState<number>(timeDefault);
	const percent: number = useMemo(() => (counter / timeDefault) * 100, [counter]);

	const keepPair = useAppSelector((state) => state.memory.keepPair);
	const dispatch = useAppDispatch();

	const stateProgress: string = useMemo(() => {
		switch (true) {
			case percent <= 50 && percent > 25:
				return 'bg-yellow-300';
			case percent <= 25 && percent > 10:
				return 'bg-orange-600';
			case percent <= 10:
				return 'bg-red-600';
			default:
				return 'bg-blue-600';
		}
	}, [percent]);

	useEffect(() => {
		if (counter === 0 || keepPair.length === 16) {
			dispatch(setTimeScore(timeDefault - counter));
			return;
		}
		if (counter > 0 || keepPair.length < 16) {
			const interval = setInterval(() => {
				setCounter(counter - 1);
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [counter]);

	return <ProgressBar percent={percent} className={stateProgress} />;
}

export default Timer;
