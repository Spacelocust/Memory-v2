import '@testing-library/jest-dom';
import '@testing-library/react/dont-cleanup-after-each';
import { render as rtlRender, RenderResult, screen } from '@testing-library/react';
import { act, create } from 'react-test-renderer';
import { Provider } from 'react-redux';

import Grid from '../Atoms/Globals/Grid';
import Card from '../Molecules/Card';

import { store } from '../../store';
import { mapByNumber } from '../../utils/Helpers/Functions';
import userEvent from '@testing-library/user-event';

const render = (component: JSX.Element): RenderResult => {
	return rtlRender(<Provider store={store}>{component}</Provider>);
};

describe('Grid Component', () => {
	it('The grid component is rendered correctly', () => {
		render(
			<Grid Cols={4}>{mapByNumber(16, (i: number) => <Card key={i} keyGen={i} />).sort(() => Math.random() - 0.5)}</Grid>,
		);
		const grid = screen.getByRole('grid');
		expect(grid).toBeInTheDocument();
	});

	it(`All cards children are rendered correctly (16 cards)`, () => {
		expect(16).toEqual(screen.getAllByRole('card').length);
	});

	it(`The n°15 card's flipped correctly`, async () => {
		const user = userEvent.setup();
		user.click(screen.getByTestId('card-15'));

		//TODO: snapshot testing
		/*const card = create(
			<Provider store={store}>
				<Card key={15} keyGen={15} />
			</Provider>,
		);

		let tree = card.toJSON();
		expect(tree).toMatchSnapshot();

		// déclenche manuellement le callback
		await act(() => {
			tree?.props.onClick();
			console.log(tree.children);
		});

		// re-rendu
		tree = card.toJSON();
		expect(tree).toMatchSnapshot();*/
	});
});
