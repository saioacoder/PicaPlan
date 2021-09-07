import { useState, useEffect } from 'react';

import { handleLoadEditData, reloadList } from '../../logic/shared';

import { handleRemove } from './plates.logic';

import FormPlate from '../../components/FormPlate/FormPlate.jsx';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import MessageBox from '../../components/MessageBox/MessageBox.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const Plates = () => {
	const [id, setId] = useState('');
	const [platesList, setPlatesList] = useState([]);
	const [ingredientsList, setIngredientsList] = useState([]);
	const [formData, setFormData] = useState({
		name: '',
		recipe: '',
		photo: '',
		ingredientList: [],
	});
	const [isEdit, setIsEdit] = useState(false);
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [messageBox, setMessageBox] = useState({
		content: '',
		isError: false,
	});

	useEffect(() => {
		reloadList('plates', 'name', setPlatesList);
		reloadList('ingredients', 'name', setIngredientsList);
	}, []);

	return (
		<PageLayout pageTitle="Platos" menuSel="plates">
			{platesList.map(({ id, name, recipe, photo, ingredientList }) => {
				const editData = {
					name,
					recipe,
					photo,
					ingredientList,
				};
				const extraInfo = `Nº ingredientes: ${
					ingredientList ? ingredientList.length : 0
				}`;
				return (
					<ItemCard
						key={id}
						id={id}
						name={name}
						type="plates"
						extraInfo={extraInfo}
						onRemove={() =>
							handleRemove(id, setPlatesList, setMessageBox)
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
			<FormPlate
				isFormOpen={isFormOpen}
				setIsFormOpen={setIsFormOpen}
				setMessageBox={setMessageBox}
				id={id}
				ingredientsList={ingredientsList}
				isEdit={isEdit}
				setIsEdit={setIsEdit}
				fieldValues={formData}
				onSubmit={() => reloadList('plates', 'name', setPlatesList)}
			/>
			<MessageBox isError={messageBox.isError} setMessageBox={setMessageBox}>
				{messageBox.content}
			</MessageBox>
		</PageLayout>
	);
};

export default Plates;
