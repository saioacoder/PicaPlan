import Meal from "../components/Meal/Meal";

const Diary = () => {
	return (
		<>
			<header className="page_header">
				<nav>
					<button type="button">Anterior</button>
					<button type="button">Siguiente</button>
				</nav>
				<span>Hoy</span>
				<h1>30 julio 2021</h1>
			</header>
			<section className="container">
				<Meal id="123123213" />
				<Meal id="123123213" />
				<Meal id="123123213" />
				<Meal id="123123213" />
				<Meal id="123123213" />
			</section>
		</>
	);
}

export default Diary;
