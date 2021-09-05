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

export const handleRemove = async (id, setIngredientsList, setMessageBox) => {
	const result = await removeItem('ingredients', id);
	if (result) {
		reloadList('ingredients', 'name', setIngredientsList);
		setMessageBox({
			content: 'Ingrediente borrado',
			isError: false,
		});
	}
};
