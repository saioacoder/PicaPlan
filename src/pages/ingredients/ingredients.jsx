import { useState, useEffect } from 'react';

import { loadList, loadItem } from '../../logic/shared';

import ButtonAddItem from '../../components/ButtonAddItem/ButtonAddItem.jsx';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const Ingredients = () => {
	const [ingredients, setIngredients] = useState([]);
	const [ingredientType, setIngredientType] = useState({});

	const getIngredientTypeName = (id) => {
		loadItem('ingredientTypes', id, setIngredientType);
		return ingredientType.name;
	};

	useEffect(() => {
		loadList('ingredients', setIngredients);
	}, []);

	return (
		<PageLayout pageTitle="Ingredientes">
			{ingredients.map(({ id, name, idIngredientType }) => {
				return (
					<ItemCard
						key={id}
						name={name}
						category={getIngredientTypeName(idIngredientType)}
						size="small"
					/>
				);
			})}
			<ButtonAddItem type="ingredient" />
		</PageLayout>
	);
};

export default Ingredients;
