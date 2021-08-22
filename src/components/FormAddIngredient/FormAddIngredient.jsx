import { useState } from 'react';

import { addItem } from '../../logic/shared';

import Button from '../Button/Button.jsx';
import ButtonAddItem from '../ButtonAddItem/ButtonAddItem.jsx';
import InputField from '../InputField/InputField.jsx';
import PageTitle from '../PageTitle/PageTitle.jsx';
import SelectField from '../SelectField/SelectField.jsx';

import './FormAddIngredient.scss';

const FormAddIngredient = ({ ingredientTypes, onSubmit }) => {
	const [name, setName] = useState('');
	const [idIngredientType, setIdIngredientType] = useState('');
	const [nameError, setNameError] = useState(false);
	const [idIngredientTypeError, setIdIngredientTypeError] = useState(false);
	const [isAddFormOpen, setIsAddFormOpen] = useState(false);

	const handleAddItem = async (e) => {
		e.preventDefault();

		setNameError(false);
		setIdIngredientTypeError(false);

		let error = false;
		if (!name) {
			error = true;
			setNameError(true);
		}
		if (!idIngredientType) {
			error = true;
			setIdIngredientTypeError(true);
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
		setIsAddFormOpen(false);
	};

	return (
		<>
			<ButtonAddItem onClick={() => setIsAddFormOpen(true)} />
			<form
				className={
					isAddFormOpen
						? 'formAddIngredient formAddIngredient--open'
						: 'formAddIngredient'
				}
				onSubmit={handleAddItem}
			>
				<PageTitle title="Ingredientes" />
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
				<Button>Añadir ingrediente</Button>
				<Button secondary type="button" onClick={handleReset}>
					Cancelar
				</Button>
			</form>
		</>
	);
};

export default FormAddIngredient;
