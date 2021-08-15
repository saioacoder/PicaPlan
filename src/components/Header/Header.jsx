import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';

const Header = ({ pageTitle }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const iMenu = <FontAwesomeIcon icon={faBars} />;
	const iClose = <FontAwesomeIcon icon={faTimes} />;
	return (
		<header className="pageHeader">
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
				<a href="../">Inicio</a>
				<a href="../ingredients">Ingredientes</a>
				<a href="../ingredientTypes">Tipos de ingredientes</a>
				<a href="../plates">Platos</a>
				<a href="../plateTypes">Tipos de platos</a>
			</nav>
		</header>
	);
};

export default Header;
