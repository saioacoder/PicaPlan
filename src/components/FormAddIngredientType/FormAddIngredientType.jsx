import { useState } from 'react';

import { addItem } from '../../logic/shared';

import FormManageItem from '../FormManageItem/FormManageItem.jsx';
import InputField from '../InputField/InputField.jsx';

const FormAddIngredientType = ({ onSubmit }) => {
	const [name, setName] = useState('');
	const [color, setColor] = useState('');
	const [icon, setIcon] = useState('');
	const [nameError, setNameError] = useState(false);
	const [colorError, setColorError] = useState(false);
	const [iconError, setIconError] = useState(false);
	const [isFormOpen, setIsFormOpen] = useState(false);

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
			const result = addItem('ingredientTypes', item);
			result && onSubmit();
			handleReset();
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
	};

	return (
		<FormManageItem
			pageTitle="Tipos de ingredientes"
			onSubmit={handleAddItem}
			onCancel={handleReset}
			isFormOpen={isFormOpen}
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
				id="color"
				label="Color"
				value={color}
				hasError={colorError}
				errorMessage="Campo obligatorio"
				onChange={({ target: { value } }) => setColor(value)}
			/>
			<InputField
				id="icon"
				label="Icono"
				value={icon}
				hasError={iconError}
				errorMessage="Campo obligatorio"
				onChange={({ target: { value } }) => setIcon(value)}
			/>
		</FormManageItem>
	);
};

export default FormAddIngredientType;
