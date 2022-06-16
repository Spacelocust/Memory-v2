import { configureStore } from '@reduxjs/toolkit';

import memorySlice from './utils/Redux/Slices/memory';

export const store = configureStore({
	reducer: {
		memory: memorySlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
