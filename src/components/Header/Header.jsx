import './Header.scss'

const Header = () => {
	return (
		<header className="pageHeader">
			<nav className="pageHeader__menu">
				<a href="../">Inicio</a>
				<a href="../ingredients">Ingredientes</a>
				<a href="../ingredientTypes">Tipos de ingredientes</a>
				<a href="../plates">Platos</a>
				<a href="../plateTypes">Tipos de platos</a>
			</nav>
		</header>
	)
}

export default Header