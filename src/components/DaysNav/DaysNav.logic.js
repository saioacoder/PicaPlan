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

export const formateDate = (d) => {
	const newDay = new Date(d);
	const newWeekDay = newDay.getDay();
	return {
		name: DAYS_NAME[newWeekDay],
		num: newDay.getDate(),
		timestamp: newDay.getTime(),
	};
};
