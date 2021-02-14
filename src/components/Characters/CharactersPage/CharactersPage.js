import React, { useState, useEffect } from 'react';
import LoadingScreen from '../../UI/LoadingScreen/LoadingScreen';

import './CharactersPage.scss';

const CharactersPage = () => {
	const [characters, setCharacters] = useState(null);
	const [isLoaded, setIsLoaded] = useState(true);
	useEffect(() => {
		fetch('https://rickandmortyapi.com/api/character')
			.then(response => response.json())
			.then(data => setCharacters(data))
			.catch(error => {
				console.log('some error', error);
			})
			.finally(() => {
				setIsLoaded(false);
			});
	}, []);

	console.log('characters', characters);

	return (
		<section>
			{isLoaded ? (
				<LoadingScreen />
			) : (
				<h1> counts of episodes {characters.info.count}</h1>
			)}
		</section>
	);
};

export default CharactersPage;
