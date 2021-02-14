import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';

const Header = () => {
	return (
		<header>
			<Container maxWidth='lg'>
				<nav>
					<NavLink
						className='navLink'
						activeClassName='selected'
						to='/'
						exact>
						Characters
					</NavLink>
					<NavLink
						className='navLink'
						activeClassName='selected'
						to='/episodes'>
						Episodes
					</NavLink>
					<NavLink
						className='navLink'
						activeClassName='selected'
						to='/locations'>
						Locations
					</NavLink>
					<NavLink
						className='navLink'
						activeClassName='selected'
						to='/myWatchList'>
						My Watch List
					</NavLink>
				</nav>
			</Container>
		</header>
	);
};
export default Header;
