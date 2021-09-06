import { reloadList, removeItem } from '../../logic/shared';

export const handleRemove = async (
	id,
	setIngredientTypesList,
	setMessageBox
) => {
	await removeItem('ingredientTypes', id);
	reloadList('ingredientTypes', 'name', setIngredientTypesList);
	setMessageBox({
		content: 'Tipo de ingrediente borrado',
		isError: false,
	});
};
