import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

import './PageLayout.scss'

const PageLayout = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	)
}

export default PageLayout