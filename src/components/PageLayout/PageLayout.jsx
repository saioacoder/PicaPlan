import Header from '../Header/Header.jsx';

import './PageLayout.scss';

const PageLayout = ({ pageTitle, children }) => {
	return (
		<>
			<Header pageTitle={pageTitle} />
			<main>{children}</main>
		</>
	);
};

export default PageLayout;
