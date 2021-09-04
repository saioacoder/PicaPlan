import { useState, useEffect } from 'react';

import { reloadList, getFoodIcon, removeItem } from '../../logic/shared';

import FormIngredientType from '../../components/FormIngredientType/FormIngredientType.jsx';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import MessageBox from '../../components/MessageBox/MessageBox.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const IngredientTypes = () => {
	const [ingredientTypesList, setIngredientTypesList] = useState([]);
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [messageBox, setMessageBox] = useState({
		content: '',
		isError: false,
	});

	const reloadIngredientTypeList = () => {
		reloadList('ingredientTypes', 'name', setIngredientTypesList);
	};

	const handleEdit = async (id) => {
		console.log('editar', id);
	};

	const handleRemove = async (id) => {
		const result = await removeItem('ingredientTypes', id);
		if (result) {
			reloadIngredientTypeList();
			setMessageBox({
				content: 'Tipo de ingrediente borrado',
				isError: false,
			});
		}
	};

	useEffect(() => {
		reloadIngredientTypeList();
	}, []);

	return (
		<PageLayout pageTitle="Tipos de ingredientes" menuSel="ingredientTypes">
			{ingredientTypesList.map(({ id, name, color, icon }) => {
				return (
					<ItemCard
						key={id}
						id={id}
						name={name}
						type="ingredientTypes"
						icon={getFoodIcon(icon, color)}
						onRemove={() => handleRemove(id)}
						onEdit={() => handleEdit(id)}
					/>
				);
			})}
			<FormIngredientType
				isFormOpen={isFormOpen}
				setIsFormOpen={setIsFormOpen}
				setMessageBox={setMessageBox}
				onSubmit={reloadIngredientTypeList}
			/>
			<MessageBox isError={messageBox.isError} setMessageBox={setMessageBox}>
				{messageBox.content}
			</MessageBox>
		</PageLayout>
	);
};

export default IngredientTypes;
