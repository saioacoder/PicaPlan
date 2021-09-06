import { useState, useEffect } from 'react';

import { addItem, updateItem } from '../../logic/shared';

import FormLayout from '../FormLayout/FormLayout.jsx';
import InputField from '../InputField/InputField.jsx';

const FormPlateType = ({
	id,
	isFormOpen,
	setIsFormOpen,
	setMessageBox,
	setIsEdit,
	isEdit,
	fieldValues,
	onSubmit,
}) => {
	const [name, setName] = useState('');
	const [order, setOrder] = useState('');
	const [nameError, setNameError] = useState(false);
	const [orderError, setOrderError] = useState(false);

	const handleAddItem = async (e) => {
		e.preventDefault();

		setNameError(false);

		let error = false;
		if (!name) {
			error = true;
			setNameError(true);
		}

		if (!error) {
			const item = {
				name,
				order,
			};
			const result = isEdit
				? await updateItem('plateTypes', id, item)
				: await addItem('plateTypes', item);
			const content = result
				? `Tipo de plato ${isEdit ? 'editado' : 'añadido'}`
				: `¡Error! Tipo de plato no ${isEdit ? 'editado' : 'añadido'}`;
			setMessageBox({
				content,
				isError: !result,
			});
			handleReset();
			onSubmit();
		}
	};

	const handleReset = () => {
		setName('');
		setOrder('');

		setNameError(false);
		setOrderError(false);

		setIsFormOpen(false);
		setIsEdit(false);
	};

	useEffect(() => {
		setName(fieldValues.name);
		setOrder(fieldValues.order);
	}, [fieldValues]);

	return (
		<FormLayout
			pageTitle="Tipos de platos"
			onSubmit={handleAddItem}
			onCancel={handleReset}
			isFormOpen={isFormOpen}
			isEdit={isEdit}
			onFormOpen={() => setIsFormOpen(true)}
		>
			<InputField
				id="name"
				label="Nombre"
				value={name}
				hasError={nameError}
				errorMessage="Campo obligatorio"
				onChange={({ target: { value } }) => setName(value)}
			/>
			<InputField
				id="order"
				label="Orden"
				value={order}
				hasError={orderError}
				errorMessage="Campo obligatorio"
				onChange={({ target: { value } }) => setOrder(value)}
			/>
		</FormLayout>
	);
};

export default FormPlateType;
