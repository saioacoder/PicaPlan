import { reloadList, removeItem } from '../../logic/shared';

export const handleRemove = async (id, setPlateTypesList, setMessageBox) => {
	await removeItem('plateTypes', id);
	reloadList('plateTypes', 'order', setPlateTypesList);
	setMessageBox({
		content: 'Tipo de plato borrado',
		isError: false,
	});
};
