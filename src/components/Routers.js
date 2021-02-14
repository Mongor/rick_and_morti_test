import React from 'react';
import Container from '@material-ui/core/Container';
import { Switch, Route } from 'react-router-dom';

import CharactersPage from './Characters/CharactersPage/CharactersPage';
import EpisodesPage from './Episodes/EpisodesPage/EpisodesPage';
import LocationsPage from './Locations/LocationsPage/LocationsPage';
import MyWatchListPage from './MyWatchList/MaWatchListPage/MyWatchListPage';

const Router = () => {
	return (
		<Container maxWidth='lg'>
			<Switch>
				<Route path='/' exact>
					<CharactersPage />
				</Route>
				<Route path='/episodes'>
					<EpisodesPage />
				</Route>
				<Route path='/locations'>
					<LocationsPage />
				</Route>
				<Route path='/myWatchList'>
					<MyWatchListPage />
				</Route>
			</Switch>
		</Container>
	);
};

export default Router;
