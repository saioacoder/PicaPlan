import { useState, useEffect } from 'react';

import { reloadList, removeItem } from '../../logic/shared';

import FormPlateType from '../../components/FormPlateType/FormPlateType.jsx';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const PlateTypes = () => {
	const [plateTypes, setPlateTypes] = useState([]);

	const reloadPlateTypeList = () => {
		reloadList('plateTypes', 'name', setPlateTypes);
	};

	const handleEdit = async (id) => {
		console.log('editar', id);
	};

	const handleRemove = async (id) => {
		const result = await removeItem('plateTypes', id);
		result && reloadPlateTypeList();
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
						onRemove={() => handleRemove(id)}
						onEdit={() => handleEdit(id)}
					/>
				);
			})}
			<FormPlateType onSubmit={reloadPlateTypeList} />
		</PageLayout>
	);
};

export default PlateTypes;
