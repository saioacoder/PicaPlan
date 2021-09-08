import { useState, useEffect } from 'react';

import { FEELING } from '../../logic/constants';
import { handleAdd, handleEdit } from '../../pages/diary/diary.logic';

import FormLayout from '../FormLayout/FormLayout.jsx';
import FieldInput from '../FieldInput/FieldInput.jsx';
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
			const result = isEdit
				? await handleEdit(idPlate, selectedDayData, plate)
				: handleAdd(selectedDay, selectedDayData, plate);
			const content = result
				? `Plato ${isEdit ? 'editado' : 'añadido'}`
				: `¡Error! Plato no ${isEdit ? 'editado' : 'añadido'}`;
			setMessageBox({
				content,
				isError: !result,
			});
			handleReset();
			onSubmit();
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
		<FormLayout
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
			<FieldInput
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
		</FormLayout>
	);
};

export default FormDiary;
