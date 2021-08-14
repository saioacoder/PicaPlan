export const addDays = (date, days) => {
	let result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
};

export const subtractDays = (date, days) => {
	let result = new Date(date);
	result.setDate(result.getDate() - days);
	return result;
};
