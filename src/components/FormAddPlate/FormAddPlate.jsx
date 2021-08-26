import { useState } from 'react';

import { addItem } from '../../logic/shared';

import FormManageItem from '../FormManageItem/FormManageItem.jsx';
import InputField from '../InputField/InputField.jsx';
import TextareaField from '../TextareaField/TextareaField.jsx';

const FormAddPlate = ({ onSubmit }) => {
	const [name, setName] = useState('');
	const [recipe, setRecipe] = useState('');
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
				recipe,
			};
			const result = addItem('plates', item);
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
			pageTitle="Platos"
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
			<TextareaField
				id="recipe"
				label="Receta"
				value={recipe}
				onChange={({ target: { value } }) => setRecipe(value)}
			/>
		</FormManageItem>
	);
};

export default FormAddPlate;
