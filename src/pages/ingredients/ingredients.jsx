import { useState, useEffect } from 'react';

import { reloadList, getFoodIcon, removeItem } from '../../logic/shared';
import { FOODMAP_LEVEL } from '../../logic/constants';

import FormIngredient from '../../components/FormIngredient/FormIngredient.jsx';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const Ingredients = () => {
	const [ingredientsList, setIngredientsList] = useState([]);
	const [ingredientTypesList, setIngredientTypesList] = useState([]);
	const [unitsList, setUnitsList] = useState([]);
	const [isFormOpen, setIsFormOpen] = useState(false);

	const getIngredientTypeIcon = (id) => {
		if (ingredientTypesList) {
			const result = ingredientTypesList.find((type) => type.id === id);
			return result && getFoodIcon(result.icon, result.color);
		}
	};

	const getFoodmapLevel = (id) => {
		const result = FOODMAP_LEVEL.find((level) => level.id === id);
		return result && `Foodmap: ${result.name}`;
	};

	const reloadIngredientsList = () => {
		reloadList('ingredients', 'name', setIngredientsList);
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
		reloadList('ingredientTypes', 'name', setIngredientTypesList);
		reloadList('units', 'name', setUnitsList);
	}, []);

	return (
		<PageLayout pageTitle="Ingredientes" menuSel="ingredients">
			{ingredientsList.map(
				({ id, name, idIngredientType, foodmapLevel }) => {
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
				}
			)}
			<FormIngredient
				ingredientTypesList={ingredientTypesList}
				unitsList={unitsList}
				isFormOpen={isFormOpen}
				setIsFormOpen={setIsFormOpen}
				onSubmit={reloadIngredientsList}
			/>
		</PageLayout>
	);
};

export default Ingredients;
