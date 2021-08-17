import Menu from '../Menu/Menu.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';

const Header = ({ pageTitle, menuSel }) => {
	const iLogo = <FontAwesomeIcon icon={faCarrot} />;
	return (
		<header className="pageHeader">
			<div className="pageHeader__logo">{iLogo}</div>
			<h1 className="pageHeader__title">{pageTitle}</h1>
			<Menu itemSel={menuSel} />
		</header>
	);
};

export default Header;
