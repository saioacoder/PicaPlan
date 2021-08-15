import { useState, useEffect } from 'react';

import { loadList } from '../../logic/shared';

import ButtonAddItem from '../../components/ButtonAddItem/ButtonAddItem.jsx';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const Ingredients = () => {
	const [ingredients, setIngredients] = useState([]);

	useEffect(() => {
		loadList('ingredients', setIngredients);
	}, []);

	return (
		<PageLayout pageTitle="Ingredientes">
			{ingredients.map(({ id, name }) => {
				return <ItemCard key={id} name={name} />;
			})}
			<ButtonAddItem type="ingredient" />
		</PageLayout>
	);
};

export default Ingredients;
