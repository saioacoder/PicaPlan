import { useState, useEffect } from 'react';

import { loadList } from '../../logic/shared';

import ButtonAddItem from '../../components/ButtonAddItem/ButtonAddItem.jsx';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const IngredientTypes = () => {
	const [ingredientTypes, setIngredientTypes] = useState([]);

	useEffect(() => {
		loadList('ingredientTypes', setIngredientTypes);
	}, []);

	return (
		<PageLayout pageTitle="Tipos de ingredientes" menuSel="ingredientTypes">
			{ingredientTypes.map(({ id, name }) => {
				return <ItemCard key={id} name={name} size="small" />;
			})}
			<ButtonAddItem type="ingredientType" />
		</PageLayout>
	);
};

export default IngredientTypes;
