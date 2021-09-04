import { useState, useEffect } from 'react';

import { reloadList, removeItem } from '../../logic/shared';

import FormPlate from '../../components/FormPlate/FormPlate.jsx';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const Plates = () => {
	const [plates, setPlates] = useState([]);
	const [ingredients, setIngredients] = useState([]);
	const [isFormOpen, setIsFormOpen] = useState(false);

	const reloadPlateList = () => {
		reloadList('plates', 'name', setPlates);
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
		reloadList('ingredients', 'name', setIngredients);
	}, []);

	return (
		<PageLayout pageTitle="Platos" menuSel="plates">
			{plates.map(({ id, name }) => {
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
				ingredients={ingredients}
				isFormOpen={isFormOpen}
				setIsFormOpen={setIsFormOpen}
				onSubmit={reloadPlateList}
			/>
		</PageLayout>
	);
};

export default Plates;
