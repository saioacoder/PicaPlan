import { useState, useEffect } from 'react';

import { addItem, updateItem } from '../../logic/shared';

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
	const [name, setName] = useState('');
	const [color, setColor] = useState('');
	const [icon, setIcon] = useState('');

	const [nameError, setNameError] = useState(false);
	const [colorError, setColorError] = useState(false);
	const [iconError, setIconError] = useState(false);

	const handleAddItem = async (e) => {
		e.preventDefault();

		setNameError(false);
		setColorError(false);
		setIconError(false);

		let error = false;
		if (!name) {
			error = true;
			setNameError(true);
		}
		if (!color) {
			error = true;
			setColorError(true);
		}
		if (!icon) {
			error = true;
			setIconError(true);
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

		setNameError(false);
		setColorError(false);
		setIconError(false);

		setIsFormOpen(false);
		setIsEdit(false);
	};

	useEffect(() => {
		setName(fieldValues.name);
		setColor(fieldValues.color);
		setIcon(fieldValues.icon);
	}, [fieldValues]);

	return (
		<FormLayout
			pageTitle="Tipos de ingredientes"
			onSubmit={handleAddItem}
			onCancel={handleReset}
			isFormOpen={isFormOpen}
			onFormOpen={() => setIsFormOpen(true)}
		>
			<FieldInput
				id="name"
				label="Nombre"
				value={name}
				hasError={nameError}
				errorMessage="Campo obligatorio"
				onChange={({ target: { value } }) => setName(value)}
			/>
			<FieldInput
				id="color"
				label="Color"
				value={color}
				hasError={colorError}
				errorMessage="Campo obligatorio"
				onChange={({ target: { value } }) => setColor(value)}
			/>
			<FieldInput
				id="icon"
				label="Icono"
				value={icon}
				hasError={iconError}
				errorMessage="Campo obligatorio"
				onChange={({ target: { value } }) => setIcon(value)}
			/>
		</FormLayout>
	);
};

export default FormIngredientType;
