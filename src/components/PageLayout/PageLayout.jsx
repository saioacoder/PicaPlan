import PageHeader from '../PageHeader/PageHeader.jsx';

import './PageLayout.scss';

const PageLayout = ({ isDiary = false, pageTitle, menuSel, children }) => {
	return (
		<>
			<PageHeader title={pageTitle} menuSel={menuSel} />
			<main className={isDiary && 'diaryPage'}>{children}</main>
		</>
	);
};

export default PageLayout;
