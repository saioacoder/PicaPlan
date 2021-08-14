import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

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