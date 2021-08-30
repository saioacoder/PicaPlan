import { useState, useEffect } from 'react';

import { reloadList } from '../../logic/shared';

import DaysNav from '../../components/DaysNav/DaysNav.jsx';
import FormDiary from '../../components/FormDiary/FormDiary.jsx';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import NoData from '../../components/NoData/NoData.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';
import PlateTypeBlock from '../../components/PlateTypeBlock/PlateTypeBlock.jsx';

const Diary = () => {
	const [days, setDays] = useState([]);
	const [plates, setPlates] = useState([]);
	const [plateTypes, setPlateTypes] = useState([]);
	const [selectedDay, setSelectedDay] = useState(new Date().getTime());
	const [selectedDayPlates, setSelectedDayPlates] = useState([]);

	const isSameDay = (day1, day2) => {
		const day1Parsed = new Date(day1).setHours(0, 0, 0, 0);
		const day2Parsed = new Date(day2).setHours(0, 0, 0, 0);
		return day1Parsed === day2Parsed;
	};

	useEffect(() => {
		reloadList('days', 'date', setDays);
		reloadList('plates', 'name', setPlates);
		reloadList('plateTypes', 'order', setPlateTypes);
	}, []);

	useEffect(() => {
		const getDayPlates = () => {
			const selectedDayData = days.filter((day) =>
				isSameDay(day.date, selectedDay)
			);
			if (selectedDayData.length)
				setSelectedDayPlates(selectedDayData[0].plates);
			else setSelectedDayPlates([]);
		};
		getDayPlates();
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
								const dayPlateData = plates.filter(
									(plateData) => plateData.id === plate.idPlate
								);
								return (
									<ItemCard
										name={dayPlateData[0].name}
										extraInfo={
											plate.quantity > 1
												? `${plate.quantity} platos`
												: `${plate.quantity} plato`
										}
									/>
								);
							})
						) : (
							<NoData content="Añade un plato a esta sección" />
						)}
					</PlateTypeBlock>
				);
			})}
			<FormDiary
				plates={plates}
				plateTypes={plateTypes}
				// onSubmit={reloadIngredientsList}
			/>
		</PageLayout>
	);
};

export default Diary;
