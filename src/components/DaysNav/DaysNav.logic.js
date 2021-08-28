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
	const num = newDay.getDate();
	const formatedNum = num < 10 ? `0${num}` : num;
	return {
		month: newDay.getMonth(),
		name: DAYS_NAME[newWeekDay],
		num: formatedNum,
		timestamp: newDay.getTime(),
	};
};

export const nextWeek = (day, onChangeDay) => {
	onChangeDay(sumDays(day, 7));
};

export const prevWeek = (day, onChangeDay) => {
	onChangeDay(subtractDays(day, 7));
};
