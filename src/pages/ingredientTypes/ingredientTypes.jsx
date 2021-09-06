import { useState, useEffect } from 'react';

import {
	reloadList,
	getFoodIcon,
	handleLoadEditData,
} from '../../logic/shared';

import { handleRemove } from './ingredientTypes.logic';

import FormIngredientType from '../../components/FormIngredientType/FormIngredientType.jsx';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import MessageBox from '../../components/MessageBox/MessageBox.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const IngredientTypes = () => {
	const [id, setId] = useState('');
	const [ingredientTypesList, setIngredientTypesList] = useState([]);
	const [formData, setFormData] = useState({
		name: '',
		color: '',
		icon: '',
	});
	const [isEdit, setIsEdit] = useState(false);
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [messageBox, setMessageBox] = useState({
		content: '',
		isError: false,
	});

	useEffect(() => {
		reloadList('ingredientTypes', 'name', setIngredientTypesList);
	}, []);

	return (
		<PageLayout pageTitle="Tipos de ingredientes" menuSel="ingredientTypes">
			{ingredientTypesList.map(({ id, name, color, icon }) => {
				const editData = {
					name,
					color,
					icon,
				};
				return (
					<ItemCard
						key={id}
						id={id}
						name={name}
						type="ingredientTypes"
						icon={getFoodIcon(icon, color)}
						onRemove={() =>
							handleRemove(id, setIngredientTypesList, setMessageBox)
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
			<FormIngredientType
				isFormOpen={isFormOpen}
				setIsFormOpen={setIsFormOpen}
				setMessageBox={setMessageBox}
				id={id}
				isEdit={isEdit}
				setIsEdit={setIsEdit}
				fieldValues={formData}
				onSubmit={() =>
					reloadList('ingredientTypes', 'name', setIngredientTypesList)
				}
			/>
			<MessageBox isError={messageBox.isError} setMessageBox={setMessageBox}>
				{messageBox.content}
			</MessageBox>
		</PageLayout>
	);
};

export default IngredientTypes;
