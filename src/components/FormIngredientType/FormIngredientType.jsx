import { useState, useEffect } from 'react';

import { addItem, updateItem } from '../../logic/shared';
import useFieldInput from '../FieldInput/useFieldInput.hook';

import FormLayout from '../FormLayout/FormLayout.jsx';
import FieldInput from '../FieldInput/FieldInput.jsx';

const FormIngredientType = ({
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
	const [color, setColor, handleChangeColor, colorError] = useFieldInput(
		'',
		true
	);
	const [icon, setIcon, handleChangeIcon, iconError] = useFieldInput('', true);

	const handleAddItem = async (e) => {
		e.preventDefault();

		let error = false;
		if (nameError) {
			error = true;
		}
		if (colorError) {
			error = true;
		}
		if (iconError) {
			error = true;
		}

		if (!error) {
			const item = {
				name,
				color,
				icon,
			};
			const result = isEdit
				? await updateItem('ingredientTypes', id, item)
				: await addItem('ingredientTypes', item);
			const content = result
				? `Tipo de ingrediente ${isEdit ? 'editado' : 'añadido'}`
				: `¡Error! Tipo de ingrediente no ${
						isEdit ? 'editado' : 'añadido'
				  }`;
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
		setColor('');
		setIcon('');

		setIsFormOpen(false);
		setIsEdit(false);
	};

	useEffect(() => {
		setName(fieldValues.name);
		setColor(fieldValues.color);
		setIcon(fieldValues.icon);
	}, [fieldValues, setName, setColor, setIcon]);

	return (
		<FormLayout
			pageTitle="Tipos de ingredientes"
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
				id="color"
				label="Color"
				value={color}
				hasError={colorError}
				errorMessage="Campo obligatorio"
				onChange={handleChangeColor}
			/>
			<FieldInput
				id="icon"
				label="Icono"
				value={icon}
				hasError={iconError}
				errorMessage="Campo obligatorio"
				onChange={handleChangeIcon}
			/>
		</FormLayout>
	);
};

export default FormIngredientType;
