import { useState, useEffect } from 'react';

import { reloadList } from '../../logic/shared';

import FormAddIngredientType from '../../components/FormAddIngredientType/FormAddIngredientType.jsx';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const IngredientTypes = () => {
	const [ingredientTypes, setIngredientTypes] = useState([]);

	const reloadIngredientTypeList = () => {
		reloadList('ingredientTypes', 'name', setIngredientTypes);
	};

	useEffect(() => {
		reloadIngredientTypeList();
	}, []);

	return (
		<PageLayout pageTitle="Tipos de ingredientes" menuSel="ingredientTypes">
			{ingredientTypes.map(({ id, name }) => {
				return (
					<ItemCard
						key={id}
						id={id}
						name={name}
						type="ingredientTypes"
						size="small"
						onClickRemove={reloadIngredientTypeList}
					/>
				);
			})}
			<FormAddIngredientType onSubmit={reloadIngredientTypeList} />
		</PageLayout>
	);
};

export default IngredientTypes;
