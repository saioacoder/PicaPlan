import { useState } from 'react';

import { addItem } from '../../logic/shared';

import FormManageItem from '../FormManageItem/FormManageItem.jsx';
import InputField from '../InputField/InputField.jsx';
import SelectField from '../SelectField/SelectField.jsx';

const FormAddIngredient = ({ ingredientTypes, onSubmit }) => {
	const [name, setName] = useState('');
	const [idIngredientType, setIdIngredientType] = useState('');
	const [nameError, setNameError] = useState(false);
	const [idIngredientTypeError, setIdIngredientTypeError] = useState(false);
	const [isFormOpen, setIsFormOpen] = useState(false);

	const handleAddItem = async (e) => {
		e.preventDefault();

		setNameError(false);
		setIdIngredientTypeError(false);

		let error = false;
		if (!name) {
			setNameError(true);
			error = true;
		}
		if (!idIngredientType) {
			setIdIngredientTypeError(true);
			error = true;
		}

		if (!error) {
			const item = {
				name,
				idIngredientType,
			};
			const result = addItem('ingredients', item);
			result && onSubmit();
			handleReset();
		}
	};

	const handleReset = () => {
		setName('');
		setIdIngredientType('');
		setNameError(false);
		setIdIngredientTypeError(false);
		setIsFormOpen(false);
	};

	return (
		<FormManageItem
			pageTitle="Ingredientes"
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
			<SelectField
				id="idIngredientType"
				label="Tipo de ingrediente"
				options={ingredientTypes}
				value={idIngredientType}
				hasError={idIngredientTypeError}
				errorMessage="Campo obligatorio"
				onChange={({ target: { value } }) => setIdIngredientType(value)}
			/>
		</FormManageItem>
	);
};

export default FormAddIngredient;
