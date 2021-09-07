import { useState, useEffect } from 'react';

import { handleLoadEditData, reloadList } from '../../logic/shared';
import { handleRemove } from './plateTypes.logic';

import FormPlateType from '../../components/FormPlateType/FormPlateType.jsx';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import MessageBox from '../../components/MessageBox/MessageBox.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const PlateTypes = () => {
	const [id, setId] = useState('');
	const [plateTypesList, setPlateTypesList] = useState([]);
	const [formData, setFormData] = useState({
		name: '',
		order: 0,
	});
	const [isEdit, setIsEdit] = useState(false);
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [messageBox, setMessageBox] = useState({
		content: '',
		isError: false,
	});

	useEffect(() => {
		reloadList('plateTypes', 'order', setPlateTypesList);
	}, []);

	return (
		<PageLayout pageTitle="Tipos de platos" menuSel="plateTypes">
			{plateTypesList.map(({ id, name, order }) => {
				const editData = {
					name,
					order,
				};
				const extraInfo = `${order}º posición`;
				return (
					<ItemCard
						key={id}
						id={id}
						name={name}
						type="plateTypes"
						extraInfo={extraInfo}
						onRemove={() =>
							handleRemove(id, setPlateTypesList, setMessageBox)
						}
						onEdit={() =>
							handleLoadEditData(
								id,
								editData,
								setIsFormOpen,
								setIsEdit,
								setId,
								setFormData
							)
						}
					/>
				);
			})}
			<FormPlateType
				isFormOpen={isFormOpen}
				setIsFormOpen={setIsFormOpen}
				setMessageBox={setMessageBox}
				id={id}
				isEdit={isEdit}
				setIsEdit={setIsEdit}
				fieldValues={formData}
				onSubmit={() =>
					reloadList('plateTypes', 'order', setPlateTypesList)
				}
			/>
			<MessageBox isError={messageBox.isError} setMessageBox={setMessageBox}>
				{messageBox.content}
			</MessageBox>
		</PageLayout>
	);
};

export default PlateTypes;
