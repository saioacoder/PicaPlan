import { useState, useEffect } from 'react';

import { reloadList } from '../../logic/shared';
import { getDayData, handleLoadEditData, handleRemove } from './diary.logic';

import DaysNav from '../../components/DaysNav/DaysNav.jsx';
import FormDiary from '../../components/FormDiary/FormDiary.jsx';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import MessageBox from '../../components/MessageBox/MessageBox.jsx';
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
	const [formData, setFormData] = useState({
		idPlate: '',
		idPlateType: '',
		quantity: 1,
		idFeeling: '',
	});
	const [isEdit, setIsEdit] = useState(false);
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [messageBox, setMessageBox] = useState({
		content: '',
		isError: false,
	});

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
							blockPlates.map(({ idPlate, quantity, idFeeling }) => {
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
												setDaysList,
												setMessageBox
											)
										}
										onEdit={() =>
											handleLoadEditData(
												idPlate,
												plateType.id,
												quantity,
												idFeeling,
												setIsFormOpen,
												setIsEdit,
												setFormData
											)
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
				isFormOpen={isFormOpen}
				setIsFormOpen={setIsFormOpen}
				setMessageBox={setMessageBox}
				selectedDay={selectedDay}
				selectedDayData={selectedDayData}
				platesList={platesList}
				plateTypesList={plateTypesList}
				isEdit={isEdit}
				setIsEdit={setIsEdit}
				fieldValues={formData}
				onSubmit={() => reloadList('days', 'date', setDaysList)}
			/>
			<MessageBox isError={messageBox.isError} setMessageBox={setMessageBox}>
				{messageBox.content}
			</MessageBox>
		</PageLayout>
	);
};

export default Diary;
