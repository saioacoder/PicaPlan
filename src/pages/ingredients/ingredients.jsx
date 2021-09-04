import { useState, useEffect } from 'react';

import { reloadList } from '../../logic/shared';
import {
	getIngredientTypeIcon,
	getFoodmapLevel,
	reloadIngredientsList,
	handleEdit,
	handleRemove,
} from './ingredients.logic';

import FormIngredient from '../../components/FormIngredient/FormIngredient.jsx';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const Ingredients = () => {
	const [ingredientsList, setIngredientsList] = useState([]);
	const [ingredientTypesList, setIngredientTypesList] = useState([]);
	const [unitsList, setUnitsList] = useState([]);
	const [isFormOpen, setIsFormOpen] = useState(false);

	useEffect(() => {
		reloadIngredientsList(setIngredientsList);
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
							icon={getIngredientTypeIcon(
								idIngredientType,
								ingredientTypesList
							)}
							extraInfo={getFoodmapLevel(foodmapLevel)}
							onRemove={() => handleRemove(id, setIngredientsList)}
							onEdit={() => handleEdit(id, setIngredientsList)}
						/>
					);
				}
			)}
			<FormIngredient
				ingredientTypesList={ingredientTypesList}
				unitsList={unitsList}
				isFormOpen={isFormOpen}
				setIsFormOpen={setIsFormOpen}
				onSubmit={() => reloadIngredientsList(setIngredientsList)}
			/>
		</PageLayout>
	);
};

export default Ingredients;
