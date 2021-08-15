import { useState, useEffect } from 'react';

import { loadList } from '../../logic/shared';

import ButtonAddItem from '../../components/ButtonAddItem/ButtonAddItem.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const IngredientTypes = () => {
	const [ingredientTypes, setIngredientTypes] = useState([]);

	useEffect(() => {
		loadList('ingredientTypes', setIngredientTypes);
	}, []);

	return (
		<PageLayout pageTitle="Tipos de ingredientes">
			{ingredientTypes.map(({ id, name }) => {
				return <li key={id}>{name}</li>;
			})}
			<ButtonAddItem type="ingredientType" />
		</PageLayout>
	);
};

export default IngredientTypes;
