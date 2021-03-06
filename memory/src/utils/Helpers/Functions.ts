// Return an array of JSX element sizes by a given value
export const mapByNumber = (value: Number, callback: Function): Array<JSX.Element> => {
	const result: JSX.Element[] = [];
	for (let i = 0; i < value; i++) {
		result.push(callback(i));
	}

	return result;
};

export const forByNumber = (value: number, callback: Function): void => {
	for (let i = 0; i < value; i++) {
		callback(i);
	}
};
