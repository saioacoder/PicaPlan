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
	const [daysList, setDaysList] = useState([]);
	const [platesList, setPlatesList] = useState([]);
	const [plateTypesList, setPlateTypesList] = useState([]);
	const [selectedDay, setSelectedDay] = useState(
		new Date().setHours(0, 0, 0, 0)
	);
	const [selectedDayData, setSelectedDayData] = useState({});
	const [isFormOpen, setIsFormOpen] = useState(false);

	useEffect(() => {
		reloadList('days', 'date', setDaysList);
		reloadList('plates', 'name', setPlatesList);
		reloadList('plateTypes', 'order', setPlateTypesList);
	}, []);

	useEffect(() => {
		getDayData(daysList, selectedDay, setSelectedDayData);
	}, [daysList, selectedDay]);

	return (
		<PageLayout isDiary={true} pageTitle="Diario" menuSel="diary">
			<DaysNav selectedDay={selectedDay} onChangeDay={setSelectedDay} />
			{plateTypesList.map((plateType) => {
				const currentPlates = selectedDayData.plates;
				const blockPlates =
					currentPlates && currentPlates.length
						? currentPlates.filter(
								({ idPlateType }) => idPlateType === plateType.id
						  )
						: [];
				return (
					<PlateTypeBlock key={plateType.id} title={plateType.name}>
						{blockPlates.length ? (
							blockPlates.map(({ idPlate, quantity }) => {
								const plateData = platesList.filter(
									({ id }) => id === idPlate
								);
								return (
									<ItemCard
										key={idPlate + plateType.id}
										name={plateData[0].name}
										extraInfo={`${quantity} plato${
											quantity > 1 ? 's' : ''
										}`}
										onRemove={() =>
											handleRemove(
												idPlate,
												selectedDayData,
												setDaysList
											)
										}
										onEdit={() => handleEdit(idPlate, setIsFormOpen)}
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
				isFormOpen={isFormOpen}
				setIsFormOpen={setIsFormOpen}
				day={selectedDay}
				daysList={daysList}
				platesList={platesList}
				plateTypesList={plateTypesList}
				isEdit={false}
				//editPlate={editPlateData}
				onSubmit={() => reloadList('days', 'date', setDaysList)}
			/>
		</PageLayout>
	);
};

export default Diary;
