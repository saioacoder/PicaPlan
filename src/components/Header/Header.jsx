import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCarrot } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';

const Header = ({ pageTitle }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const iMenu = <FontAwesomeIcon icon={faBars} />;
	const iClose = <FontAwesomeIcon icon={faTimes} />;
	const iLogo = <FontAwesomeIcon icon={faCarrot} />;
	return (
		<header className="pageHeader">
			<div className="pageHeader__logo">{iLogo}</div>
			<h1 className="pageHeader__title">{pageTitle}</h1>
			<button
				type="button"
				className="pageHeader__menuOpen"
				onClick={() => setIsMenuOpen(true)}
			>
				{iMenu}
			</button>
			<nav
				className={
					isMenuOpen
						? 'pageHeader__menu pageHeader__menu--open'
						: 'pageHeader__menu'
				}
			>
				<button
					type="button"
					className="pageHeader__menuClose"
					onClick={() => setIsMenuOpen(false)}
				>
					{iClose}
				</button>
				<Link to="/">Diario</Link>
				<Link to="/ingredients">Ingredientes</Link>
				<Link to="/ingredientTypes">Tipos de ingredientes</Link>
				<Link to="/plates">Platos</Link>
				<Link to="/plateTypes">Tipos de platos</Link>
			</nav>
		</header>
	);
};

export default Header;
