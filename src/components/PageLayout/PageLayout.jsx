import Menu from '../Menu/Menu.jsx'
import Footer from '../Footer/Footer.jsx'

const PageLayout = ({ children }) => {
	return (
		<>
			<Menu />
			<main>{children}</main>
			<Footer />
		</>
	)
}

export default PageLayout