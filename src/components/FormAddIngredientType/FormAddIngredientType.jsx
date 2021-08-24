import { useState } from 'react';

import { addItem } from '../../logic/shared';

import FormManageItem from '../FormManageItem/FormManageItem.jsx';
import InputField from '../InputField/InputField.jsx';

const FormAddIngredientType = ({ onSubmit }) => {
	const [name, setName] = useState('');
	const [color, setColor] = useState('');
	const [nameError, setNameError] = useState(false);
	const [colorError, setColorError] = useState(false);
	const [isFormOpen, setIsFormOpen] = useState(false);

	const handleAddItem = async (e) => {
		e.preventDefault();

		setNameError(false);
		setColorError(false);

		let error = false;
		if (!name) {
			error = true;
			setNameError(true);
		}
		if (!color) {
			error = true;
			setColorError(true);
		}

		if (!error) {
			const item = {
				name,
				color,
			};
			const result = addItem('ingredientTypes', item);
			result && onSubmit();
			handleReset();
		}
	};

	const handleReset = () => {
		setName('');
		setColor('');
		setNameError(false);
		setColorError(false);
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
		</FormManageItem>
	);
};

export default FormAddIngredientType;
