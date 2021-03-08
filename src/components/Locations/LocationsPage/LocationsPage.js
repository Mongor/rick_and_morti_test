import React, { useState, useEffect } from 'react';
import LoadingScreen from '../../UI/LoadingScreen/LoadingScreen';
import CustomPagination from '../../UI/CustomPagination/CustomPagination';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './LocationsPage.scss';

const LocationsPage = () => {
	const [dataUrl, setDataUrl] = useState(
		'https://rickandmortyapi.com/api/location'
	);
	const [locations, setLocations] = useState(null);
	const [isLoaded, setIsLoaded] = useState(true);
	useEffect(() => {
		fetch(dataUrl)
			.then(response => response.json())
			.then(data => setLocations(data))
			.catch(error => {
				console.log('some error', error);
			})
			.finally(() => {
				setIsLoaded(false);
			});
	}, [dataUrl]);

	console.log('locations', locations);

	return (
		<section>
			{isLoaded ? (
				<LoadingScreen />
			) : (
				<>
					<h1> counts of Locations {locations.info.count}</h1>
					<TableContainer component={Paper}>
						<Table>
							<TableBody>
								{locations.results.map((location, i) => {
									return (
										<TableRow className='tr_hover' key={i}>
											<TableCell title='Name'>
												{location.name}
											</TableCell>
											<TableCell title='Type'>
												{location.type}
											</TableCell>
											<TableCell title='Dimension'>
												{location.dimension}
											</TableCell>
											<TableCell title='Residents'>
												Residents on{' '}
												{location.residents.length}
											</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</TableContainer>
					<CustomPagination
						pagInfo={locations}
						setDataUrl={setDataUrl}
					/>
				</>
			)}
		</section>
	);
};

export default LocationsPage;
