import { useState, useEffect } from 'react';

import { reloadList } from '../../logic/shared';

import FormAddIngredient from './components/FormAddIngredient/FormAddIngredient.jsx';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const Ingredients = () => {
	const [ingredients, setIngredients] = useState([]);
	const [ingredientTypes, setIngredientTypes] = useState([]);

	const getIngredientTypeName = (id) => {
		if (ingredientTypes) {
			const result = ingredientTypes.find((type) => type.id === id);
			return result && result.name;
		}
	};

	const reloadIngredientsList = () => {
		reloadList('ingredients', setIngredients);
	};

	useEffect(() => {
		reloadIngredientsList();
		reloadList('ingredientTypes', setIngredientTypes);
	}, []);

	return (
		<PageLayout pageTitle="Ingredientes" menuSel="ingredients">
			{ingredients.map(({ id, name, idIngredientType }) => {
				return (
					<ItemCard
						key={id}
						id={id}
						name={name}
						type="ingredients"
						category={getIngredientTypeName(idIngredientType)}
						size="small"
						onClickRemove={reloadIngredientsList}
					/>
				);
			})}
			<FormAddIngredient
				ingredientTypes={ingredientTypes}
				onSubmit={reloadIngredientsList}
			/>
		</PageLayout>
	);
};

export default Ingredients;
