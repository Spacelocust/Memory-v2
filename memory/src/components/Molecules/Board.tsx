import React from 'react';

import Container from '../Atoms/Globals/Container';
import Grid from '../Atoms/Globals/Grid';
import Card from '../Atoms/Card';

import { mapByNumber } from '../../utils/Helpers/Functions';

function Board() {
	return (
		<Container className="flex justify-center items-center h-screen">
			<Grid Cols={4}>
				{mapByNumber(16, (i: number) => <Card key={i} keyGen={i} />).sort(
					() => Math.random() - 0.5,
				)}
			</Grid>
		</Container>
	);
}

export default Board;
