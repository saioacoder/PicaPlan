import { useState, useEffect } from 'react';

import { loadList } from '../../logic/shared';

import ButtonAddItem from '../../components/ButtonAddItem/ButtonAddItem.jsx';
import DaysNav from '../../components/DaysNav/DaysNav.jsx';
import Meal from '../../components/Meal/Meal.jsx';
import NoData from '../../components/NoData/NoData.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const Diary = () => {
	const [days, setDays] = useState([]);
	const [selectedDay, setSelectedDay] = useState(new Date().getTime());
	const [selectedDayPlates, setSelectedDayPlates] = useState([]);

	const isSameDay = (day1, day2) => {
		const day1Parsed = new Date(day1).setHours(0, 0, 0, 0);
		const day2Parsed = new Date(day2).setHours(0, 0, 0, 0);
		return day1Parsed === day2Parsed;
	};

	useEffect(() => {
		loadList('days', setDays);
	}, []);

	useEffect(() => {
		const selectedDayData = days.filter((day) =>
			isSameDay(day.date, selectedDay)
		);
		if (selectedDayData.length)
			setSelectedDayPlates(selectedDayData[0].plates);
		else setSelectedDayPlates([]);
	}, [days, selectedDay]);

	return (
		<PageLayout pageTitle="Diario" menuSel="diary">
			<DaysNav selectedDay={selectedDay} onChangeDay={setSelectedDay} />
			{selectedDayPlates.length ? (
				selectedDayPlates.map((plate) => {
					return (
						<Meal
							key={plate.idPlate + plate.idPlateType}
							plateData={plate}
						/>
					);
				})
			) : (
				<NoData message="Añade un plato a este día" />
			)}
			<ButtonAddItem type="day" />
		</PageLayout>
	);
};

export default Diary;
