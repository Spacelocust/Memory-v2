import React from 'react';
import ReactDOM from 'react-dom/client';

import Memory from './components/Pages/Memory';

import './bemit/index.css';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);

root.render(
	<React.StrictMode>
		<Memory />
	</React.StrictMode>,
);
