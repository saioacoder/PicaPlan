import { useState, useEffect } from 'react';

import { reloadList } from '../../logic/shared';

import FormAddPlate from '../../components/FormAddPlate/FormAddPlate.jsx';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const Plates = () => {
	const [plates, setPlates] = useState([]);

	const reloadPlateList = () => {
		reloadList('plates', 'name', setPlates);
	};

	useEffect(() => {
		reloadPlateList();
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
						size="small"
						onClickRemove={reloadPlateList}
					/>
				);
			})}
			<FormAddPlate onSubmit={reloadPlateList} />
		</PageLayout>
	);
};

export default Plates;
