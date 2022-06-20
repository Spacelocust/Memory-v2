import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import Memory from './components/Pages/Memory';
import { store } from './store';

import './bemit/index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Memory />
		</Provider>
	</React.StrictMode>,
);
