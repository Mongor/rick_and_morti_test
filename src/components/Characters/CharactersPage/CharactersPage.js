import React, { useState, useEffect } from 'react';
import LoadingScreen from '../../UI/LoadingScreen/LoadingScreen';
import CharacterModal from '../CharacterModal/CharacterModal';

import Paper from '@material-ui/core/Paper';

import './CharactersPage.scss';

const CharactersPage = () => {
	const [open, setOpen] = useState(false);

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

	const openModal = cahracterID => {
		if (cahracterID) {
			setOpen(true);
		}
	};

	return (
		<section className='characters_section'>
			{isLoaded ? (
				<LoadingScreen />
			) : (
				<>
					{characters.results.map((character, i) => {
						return (
							<Paper
								className='character_block'
								key={i}
								onClick={() => openModal(character.id)}>
								<img
									src={character.image}
									alt={character.name}
								/>
								<span className='name_span'>
									{character.name}
								</span>
								<CharacterModal
									characterId={character.id}
									character={character}
									open={open}
									setOpen={setOpen}
								/>
							</Paper>
						);
					})}
				</>
			)}
		</section>
	);
};

export default CharactersPage;
