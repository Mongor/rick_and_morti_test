import React, { useState, useEffect } from 'react';
import LoadingScreen from '../../UI/LoadingScreen/LoadingScreen';

import './EpisodesPage.scss';

const EpisodesPage = () => {
	const [episodes, setEpisodes] = useState(null);
	const [isLoaded, setIsLoaded] = useState(true);
	useEffect(() => {
		fetch('https://rickandmortyapi.com/api/episode')
			.then(response => response.json())
			.then(data => setEpisodes(data))
			.catch(error => {
				console.log('some error', error);
			})
			.finally(() => {
				setIsLoaded(false);
			});
	}, []);

	console.log('episodes', episodes);

	return (
		<section>
			{isLoaded ? (
				<LoadingScreen />
			) : (
				<h1> counts of episodes {episodes.info.count}</h1>
			)}
		</section>
	);
};

export default EpisodesPage;
