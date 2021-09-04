import { useState, useEffect } from 'react';

import { reloadList, getFoodIcon, removeItem } from '../../logic/shared';
import { FOODMAP_LEVEL } from '../../logic/constants';

import FormIngredient from '../../components/FormIngredient/FormIngredient.jsx';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const Ingredients = () => {
	const [ingredients, setIngredients] = useState([]);
	const [ingredientTypes, setIngredientTypes] = useState([]);
	const [units, setUnits] = useState([]);

	const getIngredientTypeIcon = (id) => {
		if (ingredientTypes) {
			const result = ingredientTypes.find((type) => type.id === id);
			return result && getFoodIcon(result.icon, result.color);
		}
	};

	const getFoodmapLevel = (id) => {
		const result = FOODMAP_LEVEL.find((level) => level.id === id);
		return result && `Foodmap: ${result.name}`;
	};

	const reloadIngredientsList = () => {
		reloadList('ingredients', 'name', setIngredients);
	};

	const handleEdit = async (id) => {
		console.log('editar', id);
	};

	const handleRemove = async (id) => {
		const result = await removeItem('ingredients', id);
		result && reloadIngredientsList();
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
						icon={getIngredientTypeIcon(idIngredientType)}
						extraInfo={getFoodmapLevel(foodmapLevel)}
						onRemove={() => handleRemove(id)}
						onEdit={() => handleEdit(id)}
					/>
				);
			})}
			<FormIngredient
				ingredientTypes={ingredientTypes}
				units={units}
				onSubmit={reloadIngredientsList}
			/>
		</PageLayout>
	);
};

export default Ingredients;
