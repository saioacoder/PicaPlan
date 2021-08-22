import { useState } from 'react';

import { addItem } from '../../logic/shared';

import FormManageItem from '../FormManageItem/FormManageItem.jsx';
import InputField from '../InputField/InputField.jsx';

const FormAddIngredientType = ({ onSubmit }) => {
	const [name, setName] = useState('');
	const [nameError, setNameError] = useState(false);
	const [isFormOpen, setIsFormOpen] = useState(false);

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
			};
			const result = addItem('ingredientTypes', item);
			result && onSubmit();
			handleReset();
		}
	};

	const handleReset = () => {
		setName('');
		setNameError(false);
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
		</FormManageItem>
	);
};

export default FormAddIngredientType;
