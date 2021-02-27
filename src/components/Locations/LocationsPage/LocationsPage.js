import React, { useState, useEffect } from 'react';
import LoadingScreen from '../../UI/LoadingScreen/LoadingScreen';

import './LocationsPage.scss';

const LocationsPage = () => {
	const [locations, setLocations] = useState(null);
	const [isLoaded, setIsLoaded] = useState(true);
	useEffect(() => {
		fetch('https://rickandmortyapi.com/api/location')
			.then(response => response.json())
			.then(data => setLocations(data))
			.catch(error => {
				console.log('some error', error);
			})
			.finally(() => {
				setIsLoaded(false);
			});
	}, []);

	console.log('locations', locations);
	return (
		<section>
			{isLoaded ? (
				<LoadingScreen />
			) : (
				<h1> counts of Locations {locations.info.count}</h1>
			)}
		</section>
	);
};

export default LocationsPage;
