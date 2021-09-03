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

export const handleAdd = (day, daysList, plate) => {
	const dayData = daysList.filter((item) => item.date === day);
	if (dayData.length) {
		dayData[0].plates.push(plate);
		updateItem('days', dayData[0].id, dayData[0]);
	} else {
		const item = {
			date: day,
			plates: [plate],
		};
		addItem('days', item);
	}
};

export const handleEdit = async (id, setIsFormOpen) => {
	console.log('editar', id);
	setIsFormOpen(true);
	//Pass plate data to the form
};

export const handleRemove = async (id, selectedDayData, setDaysList) => {
	const remainingPlates = selectedDayData.plates.filter((plate) => {
		return plate.idPlate !== id;
	});
	const newSelectedDayData = { ...selectedDayData };
	newSelectedDayData.plates = remainingPlates;
	const result = remainingPlates.length
		? updateItem('days', selectedDayData.id, newSelectedDayData)
		: await removeItem('days', selectedDayData.id);
	result && reloadList('days', 'date', setDaysList);
};
