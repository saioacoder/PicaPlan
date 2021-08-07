import './Meal.scss';

const Meal = ({ id }) => {

	return (
		<article className="meal">
			<div className="meal__content">
				<h2 className="meal__title">Melón con jamón</h2>
				<span className="meal__type">Desayuno</span>
				<span className="meal__time">08:34</span>
			</div>
			<nav className="meal__actions">
				<button type="button">E</button>
				<button type="button">B</button>
			</nav>
		</article>
	);
};

export default Meal;