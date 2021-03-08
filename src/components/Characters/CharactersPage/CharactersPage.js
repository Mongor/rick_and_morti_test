import React, { useState, useEffect } from 'react';
import LoadingScreen from '../../UI/LoadingScreen/LoadingScreen';
import CustomPagination from '../../UI/CustomPagination/CustomPagination';

import CharacterModal from '../CharacterModal/CharacterModal';

import Paper from '@material-ui/core/Paper';

import './CharactersPage.scss';

const CharactersPage = () => {
	const [open, setOpen] = useState(false);
	const [charId, setCharId] = useState(null);
	const [dataUrl, setDataUrl] = useState(
		'https://rickandmortyapi.com/api/character'
	);

	const [characters, setCharacters] = useState(null);
	const [isLoaded, setIsLoaded] = useState(true);
	useEffect(() => {
		fetch(dataUrl)
			.then(response => response.json())
			.then(data => setCharacters(data))
			.catch(error => {
				console.log('some error', error);
			})
			.finally(() => {
				setIsLoaded(false);
			});
	}, [dataUrl]);

	const openModal = id => {
		setCharId(id);
		setOpen(true);
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
							</Paper>
						);
					})}
					<CharacterModal
						characterId={charId}
						charactersAll={characters.results}
						open={open}
						setOpen={setOpen}
					/>
					<CustomPagination
						pagInfo={characters}
						setDataUrl={setDataUrl}
					/>
				</>
			)}
		</section>
	);
};

export default CharactersPage;
