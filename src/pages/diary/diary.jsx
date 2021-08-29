import { useState, useEffect } from 'react';

import { reloadList } from '../../logic/shared';

import ButtonAddItem from '../../components/ButtonAddItem/ButtonAddItem.jsx';
import DaysNav from '../../components/DaysNav/DaysNav.jsx';
import Meal from '../../components/Meal/Meal.jsx';
import NoData from '../../components/NoData/NoData.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';
import PlateTypeBlock from '../../components/PlateTypeBlock/PlateTypeBlock.jsx';

const Diary = () => {
	const [days, setDays] = useState([]);
	const [selectedDay, setSelectedDay] = useState(new Date().getTime());
	const [selectedDayPlates, setSelectedDayPlates] = useState([]);
	const [plateTypes, setPlateTypes] = useState([]);

	const isSameDay = (day1, day2) => {
		const day1Parsed = new Date(day1).setHours(0, 0, 0, 0);
		const day2Parsed = new Date(day2).setHours(0, 0, 0, 0);
		return day1Parsed === day2Parsed;
	};

	useEffect(() => {
		reloadList('days', 'date', setDays);
		reloadList('plateTypes', 'order', setPlateTypes);
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
			{plateTypes.map((type) => {
				const platesList =
					selectedDayPlates.length &&
					selectedDayPlates.filter(
						(plate) => plate.idPlateType === type.id
					);
				return (
					<PlateTypeBlock key={type.id} title={type.name}>
						{platesList.length ? (
							platesList.map((plate) => {
								return (
									<Meal
										key={plate.idPlate + plate.idPlateType}
										plateData={plate}
									/>
								);
							})
						) : (
							<NoData content="Añade un plato a esta sección" />
						)}
					</PlateTypeBlock>
				);
			})}
			<ButtonAddItem type="day" />
		</PageLayout>
	);
};

export default Diary;
