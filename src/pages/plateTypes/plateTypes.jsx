import { useState, useEffect } from 'react';

import { reloadList } from '../../logic/shared';

import FormAddPlateType from '../../components/FormAddPlateType/FormAddPlateType.jsx';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const PlateTypes = () => {
	const [plateTypes, setPlateTypes] = useState([]);

	const reloadPlateTypeList = () => {
		reloadList('plateTypes', 'name', setPlateTypes);
	};

	useEffect(() => {
		reloadPlateTypeList();
	}, []);

	return (
		<PageLayout pageTitle="Tipos de platos" menuSel="plateTypes">
			{plateTypes.map(({ id, name }) => {
				return (
					<ItemCard
						key={id}
						id={id}
						name={name}
						type="plateTypes"
						size="small"
						onClickRemove={reloadPlateTypeList}
					/>
				);
			})}
			<FormAddPlateType onSubmit={reloadPlateTypeList} />
		</PageLayout>
	);
};

export default PlateTypes;
