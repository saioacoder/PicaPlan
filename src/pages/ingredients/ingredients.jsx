import { useState, useEffect } from 'react';

import { reloadList, showColor } from '../../logic/shared';
import { FOODMAP_LEVEL } from '../../logic/constants';

import FormAddIngredient from '../../components/FormAddIngredient/FormAddIngredient.jsx';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const Ingredients = () => {
	const [ingredients, setIngredients] = useState([]);
	const [ingredientTypes, setIngredientTypes] = useState([]);
	const [units, setUnits] = useState([]);

	const getIngredientTypeName = (id) => {
		if (ingredientTypes) {
			const result = ingredientTypes.find((type) => type.id === id);
			return result && showColor(result.color, result.name);
		}
	};

	const getFoodmapLevel = (id) => {
		if (id !== '0') {
			const result = FOODMAP_LEVEL.find((level) => level.id === id);
			return result && `Foodmap: ${result.name}`;
		}
	};

	const reloadIngredientsList = () => {
		reloadList('ingredients', 'name', setIngredients);
	};

	useEffect(() => {
		reloadIngredientsList();
		reloadList('ingredientTypes', 'name', setIngredientTypes);
		reloadList('units', 'name', setUnits);
	}, []);

	return (
		<PageLayout pageTitle="Ingredientes" menuSel="ingredients">
			{ingredients.map(({ id, name, idIngredientType, foodmapLevel }) => {
				return (
					<ItemCard
						key={id}
						id={id}
						name={name}
						type="ingredients"
						category={getIngredientTypeName(idIngredientType)}
						extraInfo={getFoodmapLevel(foodmapLevel)}
						size="small"
						onClickRemove={reloadIngredientsList}
					/>
				);
			})}
			<FormAddIngredient
				ingredientTypes={ingredientTypes}
				units={units}
				onSubmit={reloadIngredientsList}
			/>
		</PageLayout>
	);
};

export default Ingredients;
