import { reloadList, removeItem } from '../../logic/shared';

export const getUnitName = (id, unitsList) => {
	const unit = unitsList.filter((unit) => unit.id === id);
	return unit[0].name;
};

export const handleRemove = async (id, setPlatesList, setMessageBox) => {
	await removeItem('plates', id);
	reloadList('plates', 'name', setPlatesList);
	setMessageBox({
		content: 'Plato borrado',
		isError: false,
	});
};
