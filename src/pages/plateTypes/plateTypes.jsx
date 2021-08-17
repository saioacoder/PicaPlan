import { useState, useEffect } from 'react';

import { loadList } from '../../logic/shared';

import ButtonAddItem from '../../components/ButtonAddItem/ButtonAddItem.jsx';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const PlateTypes = () => {
	const [plateTypes, setPlateTypes] = useState([]);

	useEffect(() => {
		loadList('plateTypes', setPlateTypes);
	}, []);

	return (
		<PageLayout pageTitle="Tipos de platos" menuSel="plateTypes">
			{plateTypes.map(({ id, name }) => {
				return <ItemCard key={id} name={name} size="small" />;
			})}
			<ButtonAddItem type="plateType" />
		</PageLayout>
	);
};

export default PlateTypes;
