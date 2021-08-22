import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';

import './PageTitle.scss';

const PageTitle = ({ title }) => {
	const iLogo = <FontAwesomeIcon icon={faCarrot} />;
	return (
		<header className="pageTitle">
			<div className="pageTitle__logo">{iLogo}</div>
			<h1 className="pageTitle__title">{title}</h1>
		</header>
	);
};

export default PageTitle;
