import { useState } from 'react';

import { handleAdd, handleEdit } from '../../pages/diary/diary.logic';

import FormManageItem from '../FormManageItem/FormManageItem.jsx';
import InputField from '../InputField/InputField.jsx';
import SelectField from '../SelectField/SelectField.jsx';

const FormDiary = ({
	day,
	daysList,
	platesList,
	plateTypesList,
	isFormOpen,
	setIsFormOpen,
	isEdit,
	onSubmit,
}) => {
	const [idPlate, setIdPlate] = useState('');
	const [idPlateType, setIdPlateType] = useState('');
	const [quantity, setQuantity] = useState(1);

	const [idPlateError, setIdPlateError] = useState(false);
	const [idPlateTypeError, setIdPlateTypeError] = useState(false);
	const [quantityError, setQuantityError] = useState(false);

	const handleAddItem = async (e) => {
		e.preventDefault();

		setIdPlateError(false);
		setIdPlateTypeError(false);
		setQuantityError(false);

		let error = false;
		if (!idPlate) {
			error = true;
			setIdPlateError(true);
		}
		if (!idPlateType) {
			error = true;
			setIdPlateTypeError(true);
		}
		if (!quantity) {
			error = true;
			setQuantityError(true);
		}

		if (!error) {
			const plate = {
				idPlate,
				idPlateType,
				quantity,
			};
			isEdit ? handleEdit() : handleAdd(day, daysList, plate);
			onSubmit();
			handleReset();
		}
	};

	const handleReset = () => {
		setIdPlate('');
		setIdPlateType('');
		setQuantity('');

		setIdPlateError(false);
		setIdPlateTypeError(false);
		setQuantityError(false);

		setIsFormOpen(false);
	};

	return (
		<FormManageItem
			pageTitle="Platos"
			onSubmit={handleAddItem}
			onCancel={handleReset}
			isFormOpen={isFormOpen}
			onFormOpen={() => setIsFormOpen(true)}
		>
			<SelectField
				id="plates"
				label="Platos"
				options={platesList}
				value={idPlate}
				hasError={idPlateError}
				errorMessage="Campo obligatorio"
				onChange={({ target: { value } }) => setIdPlate(value)}
			/>
			<SelectField
				id="plateType"
				label="Tipos de plato"
				options={plateTypesList}
				value={idPlateType}
				hasError={idPlateTypeError}
				errorMessage="Campo obligatorio"
				onChange={({ target: { value } }) => setIdPlateType(value)}
			/>
			<InputField
				id="quantity"
				label="Cantidad"
				value={quantity}
				type="number"
				hasError={quantityError}
				errorMessage="Campo obligatorio"
				onChange={({ target: { value } }) => setQuantity(value)}
			/>
		</FormManageItem>
	);
};

export default FormDiary;
