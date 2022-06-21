import { useAppSelector } from '../Redux/hooks';

// Check if the value equal the choiceA or choiceB
export const IsSelected = (value: string): boolean => {
	const { choiceA, choiceB } = useAppSelector((state) => state.memory);
	return choiceA?.name === value || choiceB?.name === value;
};
