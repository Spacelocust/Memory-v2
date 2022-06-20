import React from 'react';

import Container from '../Atoms/Globals/Container';
import Grid from '../Atoms/Globals/Grid';
import Card from '../Molecules/Card';
import Timer from '../Molecules/Timer';
import Result from '../Atoms/Result';

import { mapByNumber } from '../../utils/Helpers/Functions';

function Board() {
	return (
		<Container className="flex flex-col justify-center items-center h-screen">
			<Result />
			<Timer />
			<Grid Cols={4}>{mapByNumber(16, (i: number) => <Card key={i} keyGen={i} />).sort(() => Math.random() - 0.5)}</Grid>
		</Container>
	);
}

export default Board;
