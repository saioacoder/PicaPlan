import { useState, useEffect } from 'react';

import { reloadList } from '../../logic/shared';

import FormAddPlate from '../../components/FormAddPlate/FormAddPlate.jsx';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const Plates = () => {
	const [plates, setPlates] = useState([]);
	const [ingredients, setIngredients] = useState([]);

	const reloadPlateList = () => {
		reloadList('plates', 'name', setPlates);
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
						onClickRemove={reloadPlateList}
					/>
				);
			})}
			<FormAddPlate ingredients={ingredients} onSubmit={reloadPlateList} />
		</PageLayout>
	);
};

export default Plates;
