import { useState, useEffect } from 'react';

import { reloadList, removeItem } from '../../logic/shared';

import FormPlate from '../../components/FormPlate/FormPlate.jsx';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const Plates = () => {
	const [platesList, setPlatesList] = useState([]);
	const [ingredientsList, setIngredientsList] = useState([]);
	const [isFormOpen, setIsFormOpen] = useState(false);

	const reloadPlateList = () => {
		reloadList('plates', 'name', setPlatesList);
	};

	const handleEdit = async (id) => {
		console.log('editar', id);
	};

	const handleRemove = async (id) => {
		const result = await removeItem('plates', id);
		result && reloadPlateList();
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
				onSubmit={reloadPlateList}
			/>
		</PageLayout>
	);
};

export default Plates;
