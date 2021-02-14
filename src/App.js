import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routers from './components/Routers';
import Header from './components/Header/Header';

const App = () => {
	return (
		<Router>
			<Header />
			<Routers />
		</Router>
	);
};

export default App;
