import {
	addItem,
	reloadList,
	removeItem,
	updateItem,
} from '../../logic/shared';

const isSameDay = (day1, day2) => {
	const day1Parsed = new Date(day1).setHours(0, 0, 0, 0);
	const day2Parsed = new Date(day2).setHours(0, 0, 0, 0);
	return day1Parsed === day2Parsed;
};

export const getDayData = (days, selectedDay, setSelectedDayData) => {
	const data = days.filter((day) => isSameDay(day.date, selectedDay));
	setSelectedDayData(data.length ? data[0] : {});
};

export const handleAdd = (selectedDay, selectedDayData, plate) => {
	if (selectedDayData.plates && selectedDayData.plates.length) {
		selectedDayData.plates.push(plate);
		updateItem('days', selectedDayData.id, selectedDayData);
	} else {
		const data = {
			date: selectedDay,
			plates: [plate],
		};
		addItem('days', data);
	}
};

export const handleEdit = async (id, selectedDayData, plate) => {
	const remainingPlates = selectedDayData.plates.filter((item) => {
		return item.idPlate !== id;
	});
	const newSelectedDayData = { ...selectedDayData };
	newSelectedDayData.plates = [...remainingPlates, plate];
	updateItem('days', selectedDayData.id, newSelectedDayData);
};

export const handleRemove = async (
	id,
	selectedDayData,
	setDaysList,
	setMessageBox
) => {
	const remainingPlates = selectedDayData.plates.filter((plate) => {
		return plate.idPlate !== id;
	});
	const newSelectedDayData = { ...selectedDayData };
	newSelectedDayData.plates = remainingPlates;
	const result = remainingPlates.length
		? updateItem('days', selectedDayData.id, newSelectedDayData)
		: await removeItem('days', selectedDayData.id);
	if (result) {
		reloadList('days', 'date', setDaysList);
		setMessageBox({
			content: 'Plato borrado',
			isError: false,
		});
	}
};
