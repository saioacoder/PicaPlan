import { useState, useEffect } from 'react';

import { handleLoadEditData, reloadList } from '../../logic/shared';
import {
	getIngredientTypeIcon,
	getFoodmapLevel,
	handleRemove,
} from './ingredients.logic';

import FormIngredient from '../../components/FormIngredient/FormIngredient.jsx';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import MessageBox from '../../components/MessageBox/MessageBox.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const Ingredients = () => {
	const [id, setId] = useState('');
	const [ingredientsList, setIngredientsList] = useState([]);
	const [ingredientTypesList, setIngredientTypesList] = useState([]);
	const [unitsList, setUnitsList] = useState([]);
	const [formData, setFormData] = useState({
		name: '',
		idIngredientType: '',
		foodmapLevel: '',
		idUnit: '',
	});
	const [isEdit, setIsEdit] = useState(false);
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [messageBox, setMessageBox] = useState({
		content: '',
		isError: false,
	});

	useEffect(() => {
		reloadList('ingredients', 'name', setIngredientsList);
		reloadList('ingredientTypes', 'name', setIngredientTypesList);
		reloadList('units', 'name', setUnitsList);
	}, []);

	return (
		<PageLayout pageTitle="Ingredientes" menuSel="ingredients">
			{ingredientsList.map(
				({ id, name, idIngredientType, foodmapLevel, idUnit }) => {
					const editData = {
						name,
						idIngredientType,
						foodmapLevel,
						idUnit,
					};
					return (
						<ItemCard
							key={id}
							id={id}
							name={name}
							type="ingredients"
							icon={getIngredientTypeIcon(
								idIngredientType,
								ingredientTypesList
							)}
							extraInfo={getFoodmapLevel(foodmapLevel)}
							onRemove={() =>
								handleRemove(id, setIngredientsList, setMessageBox)
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
				}
			)}
			<FormIngredient
				isFormOpen={isFormOpen}
				setIsFormOpen={setIsFormOpen}
				setMessageBox={setMessageBox}
				id={id}
				ingredientTypesList={ingredientTypesList}
				unitsList={unitsList}
				isEdit={isEdit}
				setIsEdit={setIsEdit}
				fieldValues={formData}
				onSubmit={() =>
					reloadList('ingredients', 'name', setIngredientsList)
				}
			/>
			<MessageBox isError={messageBox.isError} setMessageBox={setMessageBox}>
				{messageBox.content}
			</MessageBox>
		</PageLayout>
	);
};

export default Ingredients;
