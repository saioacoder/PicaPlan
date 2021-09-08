import { useEffect } from 'react';

import { addItem, updateItem } from '../../logic/shared';
import useFieldInput from '../FieldInput/useFieldInput.hook';

import FormLayout from '../FormLayout/FormLayout.jsx';
import FieldInput from '../FieldInput/FieldInput.jsx';

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
	const [name, setName, handleChangeName, nameError] = useFieldInput('', true);
	const [order, setOrder, handleChangeOrder, orderError] = useFieldInput(
		0,
		true
	);

	const handleAddItem = async (e) => {
		e.preventDefault();

		let error = false;
		if (nameError) {
			error = true;
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
		setOrder(0);

		setIsFormOpen(false);
		setIsEdit(false);
	};

	useEffect(() => {
		setName(fieldValues.name);
		setOrder(fieldValues.order);
	}, [fieldValues, setName, setOrder]);

	return (
		<FormLayout
			pageTitle="Tipos de platos"
			onSubmit={handleAddItem}
			onCancel={handleReset}
			isFormOpen={isFormOpen}
			isEdit={isEdit}
			onFormOpen={() => setIsFormOpen(true)}
		>
			<FieldInput
				id="name"
				label="Nombre"
				value={name}
				hasError={nameError}
				errorMessage="Campo obligatorio"
				onChange={handleChangeName}
			/>
			<FieldInput
				id="order"
				label="Orden"
				value={order}
				type="number"
				hasError={orderError}
				errorMessage="Campo obligatorio"
				onChange={handleChangeOrder}
			/>
		</FormLayout>
	);
};

export default FormPlateType;
