import { DAYS_NAME } from '../../logic/constants';

export const sumDays = (date, days) => {
	let result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
};

export const subtractDays = (date, days) => {
	let result = new Date(date);
	result.setDate(result.getDate() - days);
	return result;
};

export const formateDate = (day) => {
	const newDay = new Date(day);
	const newWeekDay = newDay.getDay() ? newDay.getDay() - 1 : 6;
	return {
		month: newDay.getMonth(),
		name: DAYS_NAME[newWeekDay],
		num: newDay.getDate(),
		timestamp: newDay.getTime(),
	};
};
