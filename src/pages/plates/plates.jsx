import { useState, useEffect } from 'react';

import { reloadList, removeItem } from '../../logic/shared';

import FormPlate from '../../components/FormPlate/FormPlate.jsx';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import MessageBox from '../../components/MessageBox/MessageBox.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const Plates = () => {
	const [platesList, setPlatesList] = useState([]);
	const [ingredientsList, setIngredientsList] = useState([]);
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [messageBox, setMessageBox] = useState({
		content: '',
		isError: false,
	});

	const reloadPlateList = () => {
		reloadList('plates', 'name', setPlatesList);
	};

	const handleEdit = async (id) => {
		console.log('editar', id);
	};

	const handleRemove = async (id) => {
		const result = await removeItem('plates', id);
		if (result) {
			reloadPlateList();
			setMessageBox({
				content: 'Plato borrado',
				isError: false,
			});
		}
	};

	useEffect(() => {
		reloadPlateList();
		reloadList('ingredients', 'name', setIngredientsList);
	}, []);

	return (
		<PageLayout pageTitle="Platos" menuSel="plates">
			{platesList.map(({ id, name }) => {
				return (
					<ItemCard
						key={id}
						id={id}
						name={name}
						type="plates"
						onRemove={() => handleRemove(id)}
						onEdit={() => handleEdit(id)}
					/>
				);
			})}
			<FormPlate
				ingredientsList={ingredientsList}
				isFormOpen={isFormOpen}
				setIsFormOpen={setIsFormOpen}
				setMessageBox={setMessageBox}
				onSubmit={reloadPlateList}
			/>
			<MessageBox isError={messageBox.isError} setMessageBox={setMessageBox}>
				{messageBox.content}
			</MessageBox>
		</PageLayout>
	);
};

export default Plates;
