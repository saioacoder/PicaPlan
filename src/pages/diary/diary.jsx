import { useState, useEffect } from 'react';

import { reloadList } from '../../logic/shared';
import { getDayData, handleEdit, handleRemove } from './diary.logic';

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
	const [selectedDay, setSelectedDay] = useState(
		new Date().setHours(0, 0, 0, 0)
	);
	const [selectedDayData, setSelectedDayData] = useState({});

	useEffect(() => {
		reloadList('days', 'date', setDays);
		reloadList('plates', 'name', setPlates);
		reloadList('plateTypes', 'order', setPlateTypes);
	}, []);

	useEffect(() => {
		getDayData(days, selectedDay, setSelectedDayData);
	}, [days, selectedDay]);

	return (
		<PageLayout isDiary={true} pageTitle="Diario" menuSel="diary">
			<DaysNav selectedDay={selectedDay} onChangeDay={setSelectedDay} />
			{plateTypes.map((type) => {
				const platesList =
					selectedDayData.plates &&
					selectedDayData.plates.length &&
					selectedDayData.plates.filter(
						(plate) => plate.idPlateType === type.id
					);
				return (
					<PlateTypeBlock key={type.id} title={type.name}>
						{platesList && platesList.length ? (
							platesList.map((plate) => {
								const dayPlateData = plates.filter(
									(plateData) => plateData.id === plate.idPlate
								);
								return (
									<ItemCard
										key={plate.idPlate + type.id}
										name={dayPlateData[0].name}
										extraInfo={
											plate.quantity > 1
												? `${plate.quantity} platos`
												: `${plate.quantity} plato`
										}
										onRemove={() =>
											handleRemove(
												plate.idPlate,
												selectedDayData,
												setDays
											)
										}
										onEdit={() => handleEdit(plate.idPlate)}
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
				day={selectedDay}
				days={days}
				plates={plates}
				plateTypes={plateTypes}
				onSubmit={() => reloadList('days', 'date', setDays)}
			/>
		</PageLayout>
	);
};

export default Diary;
