import { useState, useEffect } from 'react';

import { FEELING } from '../../logic/constants';
import { handleAdd, handleEdit } from '../../pages/diary/diary.logic';

import FormManageItem from '../FormManageItem/FormManageItem.jsx';
import InputField from '../InputField/InputField.jsx';
import SelectField from '../SelectField/SelectField.jsx';

const FormDiary = ({
	selectedDay,
	selectedDayData,
	platesList,
	plateTypesList,
	isFormOpen,
	setIsFormOpen,
	setMessageBox,
	setIsEdit,
	isEdit,
	fieldValues,
	onSubmit,
}) => {
	const [idPlate, setIdPlate] = useState('');
	const [idPlateType, setIdPlateType] = useState('');
	const [quantity, setQuantity] = useState(1);
	const [idFeeling, setIdFeeling] = useState('');

	const [idPlateError, setIdPlateError] = useState(false);
	const [idPlateTypeError, setIdPlateTypeError] = useState(false);
	const [quantityError, setQuantityError] = useState(false);

	const handleSubmit = async (e) => {
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
				idFeeling,
			};
			isEdit
				? handleEdit(idPlate, selectedDayData, plate)
				: handleAdd(selectedDay, selectedDayData, plate);
			onSubmit();
			handleReset();
			setMessageBox({
				content: `Plato ${isEdit ? 'editado' : 'añadido'}`,
				isError: false,
			});
		}
	};

	const handleReset = () => {
		setIdPlate('');
		setIdPlateType('');
		setQuantity(1);
		setIdFeeling('');

		setIdPlateError(false);
		setIdPlateTypeError(false);
		setQuantityError(false);

		setIsFormOpen(false);
		setIsEdit(false);
	};

	useEffect(() => {
		setIdPlate(fieldValues.idPlate);
		setIdPlateType(fieldValues.idPlateType);
		setQuantity(fieldValues.quantity);
		setIdFeeling(fieldValues.idFeeling);
	}, [fieldValues]);

	return (
		<FormManageItem
			pageTitle="Platos"
			onSubmit={handleSubmit}
			onCancel={handleReset}
			isFormOpen={isFormOpen}
			isEdit={isEdit}
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
			<SelectField
				id="feeling"
				label="¿Cómo te ha sentado?"
				options={FEELING}
				value={idFeeling}
				onChange={({ target: { value } }) => setIdFeeling(value)}
			/>
		</FormManageItem>
	);
};

export default FormDiary;
