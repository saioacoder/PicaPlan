import { I_LOGO } from '../../logic/constants';

import './PageTitle.scss';

const PageTitle = ({ title }) => {
	return (
		<header className="pageTitle">
			<div className="pageTitle__logo">{I_LOGO}</div>
			<h1 className="pageTitle__title">{title}</h1>
		</header>
	);
};

export default PageTitle;
