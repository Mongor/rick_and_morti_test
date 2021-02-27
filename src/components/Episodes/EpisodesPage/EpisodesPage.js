import React, { useState, useEffect } from 'react';
import LoadingScreen from '../../UI/LoadingScreen/LoadingScreen';
import CustomPagination from '../../UI/CustomPagination/CustomPagination';
import EpisodesFilter from '../EpisodesFilter/EpisodesFilter';

import './EpisodesPage.scss';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const EpisodesPage = () => {
	const [dataUrl, setDataUrl] = useState(
		'https://rickandmortyapi.com/api/episode'
	);
	const [episodes, setEpisodes] = useState(null);
	const [isLoaded, setIsLoaded] = useState(true);

	useEffect(() => {
		fetch(dataUrl)
			.then(response => response.json())
			.then(data => setEpisodes(data))
			.catch(error => {
				console.log('some error', error);
			})
			.finally(() => {
				setIsLoaded(false);
			});
	}, [dataUrl]);

	return (
		<section className='episodes_page'>
			{isLoaded ? (
				<LoadingScreen />
			) : (
				<>
					{/* <EpisodesFilter
					/> */}
					<TableContainer component={Paper}>
						<Table>
							<TableBody>
								{episodes.results.map((episode, i) => {
									return (
										<TableRow className='tr_hover' key={i}>
											<TableCell>
												{episode.name}
											</TableCell>
											<TableCell>
												{episode.air_date}
											</TableCell>
											<TableCell>
												{episode.episode}
											</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</TableContainer>

					<CustomPagination
						setDataUrl={setDataUrl}
						pagInfo={episodes}
					/>
				</>
			)}
		</section>
	);
};

export default EpisodesPage;
