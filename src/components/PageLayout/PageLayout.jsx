import PageHeader from '../PageHeader/PageHeader.jsx';

import './PageLayout.scss';

const PageLayout = ({ pageTitle, menuSel, children }) => {
	return (
		<>
			<PageHeader title={pageTitle} menuSel={menuSel} />
			<main>{children}</main>
		</>
	);
};

export default PageLayout;
