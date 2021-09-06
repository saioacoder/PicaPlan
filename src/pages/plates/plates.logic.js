import { reloadList, removeItem } from '../../logic/shared';

export const handleRemove = async (id, setPlatesList, setMessageBox) => {
	await removeItem('plates', id);
	reloadList('plates', 'name', setPlatesList);
	setMessageBox({
		content: 'Plato borrado',
		isError: false,
	});
};
