import { useState, useEffect } from 'react';

import { reloadList, getFoodIcon, removeItem } from '../../logic/shared';

import FormIngredientType from '../../components/FormIngredientType/FormIngredientType.jsx';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const IngredientTypes = () => {
	const [ingredientTypes, setIngredientTypes] = useState([]);
	const [isFormOpen, setIsFormOpen] = useState(false);

	const reloadIngredientTypeList = () => {
		reloadList('ingredientTypes', 'name', setIngredientTypes);
	};

	const handleEdit = async (id) => {
		console.log('editar', id);
	};

	const handleRemove = async (id) => {
		const result = await removeItem('ingredientTypes', id);
		result && reloadIngredientTypeList();
	};

	useEffect(() => {
		reloadIngredientTypeList();
	}, []);

	return (
		<PageLayout pageTitle="Tipos de ingredientes" menuSel="ingredientTypes">
			{ingredientTypes.map(({ id, name, color, icon }) => {
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
				onSubmit={reloadIngredientTypeList}
			/>
		</PageLayout>
	);
};

export default IngredientTypes;
