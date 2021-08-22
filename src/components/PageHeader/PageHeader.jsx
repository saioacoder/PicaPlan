import Menu from '../Menu/Menu.jsx';
import PageTitle from '../PageTitle/PageTitle.jsx';

import './PageHeader.scss';

const PageHeader = ({ title, menuSel }) => {
	return (
		<header className="pageHeader">
			<PageTitle title={title} />
			<Menu itemSel={menuSel} />
		</header>
	);
};

export default PageHeader;
