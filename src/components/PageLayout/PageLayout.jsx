import Header from '../Header/Header.jsx';

import './PageLayout.scss';

const PageLayout = ({ pageTitle, menuSel, children }) => {
	return (
		<>
			<Header pageTitle={pageTitle} menuSel={menuSel} />
			<main>{children}</main>
		</>
	);
};

export default PageLayout;
