import { useEffect } from 'react';

import { FEELING } from '../../logic/constants';
import { handleAdd, handleEdit } from '../../pages/diary/diary.logic';
import useFieldInput from '../FieldInput/useFieldInput.hook';
import useFieldSelect from '../FieldSelect/useFieldSelect.hook';

import FormLayout from '../FormLayout/FormLayout.jsx';
import FieldInput from '../FieldInput/FieldInput.jsx';
import FieldSelect from '../FieldSelect/FieldSelect.jsx';

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
	const [
		idPlate,
		setIdPlate,
		handleChangeIdPlate,
		idPlateError,
		setIdPlateError,
	] = useFieldSelect('', true);
	const [
		idPlateType,
		setIdPlateType,
		handleChangeIdPlateType,
		idPlateTypeError,
		setIdPlateTypeError,
	] = useFieldSelect('', true);
	const [
		quantity,
		setQuantity,
		handleChangeQuantity,
		quantityError,
		setQuantityError,
	] = useFieldInput(1, true);
	const [idFeeling, setIdFeeling, handleChangeIdFeeling] = useFieldSelect('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		let error = false;
		if (idPlate === '') {
			error = true;
			setIdPlateError(true);
		}
		if (idPlateType === '') {
			error = true;
			setIdPlateTypeError(true);
		}
		if (quantity === '') {
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

		setIsFormOpen(false);
		setIsEdit(false);
	};

	useEffect(() => {
		setIdPlate(fieldValues.idPlate);
		setIdPlateType(fieldValues.idPlateType);
		setQuantity(fieldValues.quantity);
		setIdFeeling(fieldValues.idFeeling);
	});

	return (
		<FormLayout
			pageTitle="Platos"
			onSubmit={handleSubmit}
			onCancel={handleReset}
			isFormOpen={isFormOpen}
			isEdit={isEdit}
			onFormOpen={() => setIsFormOpen(true)}
		>
			<FieldSelect
				id="plates"
				label="Platos"
				options={platesList}
				value={idPlate}
				hasError={idPlateError}
				errorMessage="Campo obligatorio"
				onChange={handleChangeIdPlate}
			/>
			<FieldSelect
				id="plateType"
				label="Tipos de plato"
				options={plateTypesList}
				value={idPlateType}
				hasError={idPlateTypeError}
				errorMessage="Campo obligatorio"
				onChange={handleChangeIdPlateType}
			/>
			<FieldInput
				id="quantity"
				label="Cantidad"
				value={quantity}
				type="number"
				hasError={quantityError}
				errorMessage="Campo obligatorio"
				onChange={handleChangeQuantity}
			/>
			<FieldSelect
				id="feeling"
				label="¿Cómo te ha sentado?"
				options={FEELING}
				value={idFeeling}
				onChange={handleChangeIdFeeling}
			/>
		</FormLayout>
	);
};

export default FormDiary;
