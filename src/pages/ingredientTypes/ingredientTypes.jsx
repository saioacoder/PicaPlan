import { useState, useEffect } from 'react';

import { I_FOOD } from '../../logic/constants';
import { reloadList, showColor } from '../../logic/shared';

import FormAddIngredientType from '../../components/FormAddIngredientType/FormAddIngredientType.jsx';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const IngredientTypes = () => {
	const [ingredientTypes, setIngredientTypes] = useState([]);

	const getFoodIcon = (id, background) => {
		const styles = { background };
		const { icon } = I_FOOD.find((item) => item.id === id);
		return <span style={styles}>{icon}</span>;
	};

	const reloadIngredientTypeList = () => {
		reloadList('ingredientTypes', 'name', setIngredientTypes);
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
