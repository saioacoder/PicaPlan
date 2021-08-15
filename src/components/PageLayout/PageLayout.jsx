import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

import './PageLayout.scss';

const PageLayout = ({ pageTitle, children }) => {
	return (
		<>
			<Header pageTitle={pageTitle} />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default PageLayout;
