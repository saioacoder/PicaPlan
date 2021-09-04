import { useState, useEffect } from 'react';

import { reloadList, removeItem } from '../../logic/shared';

import FormPlateType from '../../components/FormPlateType/FormPlateType.jsx';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import MessageBox from '../../components/MessageBox/MessageBox.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const PlateTypes = () => {
	const [plateTypesList, setPlateTypesList] = useState([]);
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [messageBox, setMessageBox] = useState({
		content: '',
		isError: false,
	});

	const reloadPlateTypeList = () => {
		reloadList('plateTypes', 'name', setPlateTypesList);
	};

	const handleEdit = async (id) => {
		console.log('editar', id);
	};

	const handleRemove = async (id) => {
		const result = await removeItem('plateTypes', id);
		if (result) {
			reloadPlateTypeList();
			setMessageBox({
				content: 'Tipo de plato borrado',
				isError: false,
			});
		}
	};

	useEffect(() => {
		reloadPlateTypeList();
	}, []);

	return (
		<PageLayout pageTitle="Tipos de platos" menuSel="plateTypes">
			{plateTypesList.map(({ id, name }) => {
				return (
					<ItemCard
						key={id}
						id={id}
						name={name}
						type="plateTypes"
						onEdit={() => handleEdit(id)}
						onRemove={() => handleRemove(id)}
					/>
				);
			})}
			<FormPlateType
				isFormOpen={isFormOpen}
				setIsFormOpen={setIsFormOpen}
				setMessageBox={setMessageBox}
				onSubmit={reloadPlateTypeList}
			/>
			<MessageBox isError={messageBox.isError} setMessageBox={setMessageBox}>
				{messageBox.content}
			</MessageBox>
		</PageLayout>
	);
};

export default PlateTypes;
