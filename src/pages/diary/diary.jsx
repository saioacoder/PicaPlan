import { useState, useEffect } from 'react';

import { loadList } from '../../logic/shared';

import ButtonAddItem from '../../components/ButtonAddItem/ButtonAddItem.jsx';
import DaysNav from '../../components/DaysNav/DaysNav.jsx';
import Meal from '../../components/Meal/Meal.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const Diary = () => {
	const [days, setDays] = useState([]);
	const [selectedDay, setSelectedDay] = useState(new Date().getTime());
	const [selectedDayData, setSelectedDayData] = useState({});

	const isSameDay = (day1, day2) => {
		const day1Parsed = new Date(day1).setHours(0, 0, 0, 0);
		const day2Parsed = new Date(day2).setHours(0, 0, 0, 0);
		return day1Parsed === day2Parsed;
	};

	useEffect(() => {
		loadList('days', setDays);
	}, []);

	// useEffect(() => {
	// 	const newSelectedDayData = days.filter(day => isSameDay(day.date, selectedDay))
	// 	setSelectedDayData(newSelectedDayData)
	// 	//console.log(selectedDayData)
	// }, [selectedDay])

	return (
		<PageLayout>
			<DaysNav selectedDay={selectedDay} onChangeDay={setSelectedDay} />
			{selectedDayData === {}
				? selectedDayData.plates.map(({ id }) => {
						return <Meal key={id} />;
				  })
				: 'Nada'}
			<ButtonAddItem type="day" />
		</PageLayout>
	);
};

export default Diary;
