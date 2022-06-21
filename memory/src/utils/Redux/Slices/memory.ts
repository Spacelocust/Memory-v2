import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isNull } from 'lodash';

type Choice = {
	name: string;
	value: string;
};

interface MemoryState {
	choiceA: Choice | null;
	choiceB: Choice | null;
	keepPair: string[];
	timeScore: number | null;
}

const initialState: MemoryState = {
	choiceA: null,
	choiceB: null,
	keepPair: [],
	timeScore: null,
};

export const memorySlice = createSlice({
	name: 'memory',
	initialState,
	reducers: {
		// save the card selected of the player
		select: (state, { payload }: PayloadAction<Choice>): void => {
			if (isNull(state.choiceA)) {
				state.choiceA = payload;
			} else if (isNull(state.choiceB) && state.choiceA.name !== payload.name) {
				state.choiceB = payload;
			}
		},
		// set TimeScore state
		setTimeScore: (state, { payload }: PayloadAction<number>): void => {
			state.timeScore = payload;
		},
		// add a new pair to keepPair state
		keepChoices: (state): void => {
			state.choiceA && state.choiceB && state.keepPair.push(state.choiceA.name, state.choiceB.name);
			state.choiceA = null;
			state.choiceB = null;
		},
		// reset selected card state
		clearChoices: (state): MemoryState => {
			return {
				...state,
				choiceA: null,
				choiceB: null,
			};
		},
		// reset game state
		clearGame: (state): MemoryState => {
			return initialState;
		},
	},
});

export const { select, keepChoices, clearChoices, clearGame, setTimeScore } = memorySlice.actions;

export default memorySlice.reducer;
