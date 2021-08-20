import { useState, useEffect } from 'react';

import { loadItem } from '../../../../logic/shared';

import ItemCard from '../../../../components/ItemCard/ItemCard.jsx';

const Meal = ({ plateData }) => {
	const { idPlate, idPlateType, quantity } = plateData;
	const [plate, setPlate] = useState({});
	const [plateType, setPlateType] = useState({});

	useEffect(() => {
		if (plateData) {
			loadItem('plates', idPlate, setPlate);
			loadItem('plateTypes', idPlateType, setPlateType);
		}
	}, [plateData, idPlate, idPlateType]);

	return (
		<ItemCard
			name={plate.name}
			category={plateType.name}
			extraInfo={quantity > 1 ? `${quantity} platos` : `${quantity} plato`}
		/>
	);
};

export default Meal;
