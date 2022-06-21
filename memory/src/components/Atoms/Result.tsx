import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../utils/Redux/hooks';
import { clearChoices, keepChoices } from '../../utils/Redux/Slices/memory';

function Result() {
	const { choiceA, choiceB, timeScore } = useAppSelector((state) => state.memory);
	const dispatch = useAppDispatch();

	useEffect(() => {
		// save the pair when choiceA and choiceB are the same card
		if (choiceA && choiceB && choiceA.value === choiceB.value) {
			const keep = setTimeout(() => {
				dispatch(keepChoices());
			}, 500);
			return () => clearTimeout(keep);
		} else {
			// reset player choices
			if (choiceA && choiceB && choiceA.value !== choiceB.value) {
				const clear = setTimeout(() => {
					dispatch(clearChoices());
				}, 500);
				return () => clearTimeout(clear);
			}
		}
	}, [choiceA, choiceB]);

	return (
		<>
			{timeScore && (
				<p className="rounded-md border-solid border-2 border-indigo-900 text-indigo-900 p-1">Your time: {timeScore}s</p>
			)}
		</>
	);
}

export default Result;
