import { reloadList, getFoodIcon, removeItem } from '../../logic/shared';
import { FOODMAP_LEVEL } from '../../logic/constants';

export const getIngredientTypeIcon = (id, ingredientTypesList) => {
	if (ingredientTypesList) {
		const result = ingredientTypesList.find((type) => type.id === id);
		return result && getFoodIcon(result.icon, result.color);
	}
};

export const getFoodmapLevel = (id) => {
	const result = FOODMAP_LEVEL.find((level) => level.id === id);
	return result && `Foodmap: ${result.name}`;
};

export const reloadIngredientsList = (setIngredientsList) => {
	reloadList('ingredients', 'name', setIngredientsList);
};

export const handleEdit = async (id, setIngredientsList) => {
	console.log('editar', id);
};

export const handleRemove = async (id, setIngredientsList) => {
	const result = await removeItem('ingredients', id);
	result && reloadIngredientsList(setIngredientsList);
};
