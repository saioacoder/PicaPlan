import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import './Menu.scss';

const Header = ({ itemSel }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const iMenu = <FontAwesomeIcon icon={faBars} />;
	const iClose = <FontAwesomeIcon icon={faTimes} />;
	return (
		<>
			<button
				type="button"
				className="menu__buttonOpen"
				onClick={() => setIsMenuOpen(true)}
			>
				{iMenu}
			</button>
			<nav className={isMenuOpen ? 'menu menu--open' : 'menu'}>
				<button
					type="button"
					className="menu__buttonClose"
					onClick={() => setIsMenuOpen(false)}
				>
					{iClose}
				</button>
				<Link
					to="/"
					className={
						itemSel === 'diary'
							? 'menu__item menu__item--sel'
							: 'menu__item'
					}
				>
					Diario
				</Link>
				<Link
					to="/ingredients"
					className={
						itemSel === 'ingredients'
							? 'menu__item menu__item--sel'
							: 'menu__item'
					}
				>
					Ingredientes
				</Link>
				<Link
					to="/ingredientTypes"
					className={
						itemSel === 'ingredientTypes'
							? 'menu__item menu__item--sel'
							: 'menu__item'
					}
				>
					Tipos de ingredientes
				</Link>
				<Link
					to="/plates"
					className={
						itemSel === 'plates'
							? 'menu__item menu__item--sel'
							: 'menu__item'
					}
				>
					Platos
				</Link>
				<Link
					to="/plateTypes"
					className={
						itemSel === 'plateTypes'
							? 'menu__item menu__item--sel'
							: 'menu__item'
					}
				>
					Tipos de platos
				</Link>
			</nav>
		</>
	);
};

export default Header;
