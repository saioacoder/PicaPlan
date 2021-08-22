import { useState } from 'react';

import { addItem } from '../../logic/shared';

import Button from '../Button/Button.jsx';
import ButtonAddItem from '../ButtonAddItem/ButtonAddItem.jsx';
import InputField from '../InputField/InputField.jsx';
import PageTitle from '../PageTitle/PageTitle.jsx';

const FormAddIngredientType = ({ onSubmit }) => {
	const [name, setName] = useState('');
	const [nameError, setNameError] = useState(false);
	const [isAddFormOpen, setIsAddFormOpen] = useState(false);

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
			result && handleReset();
		}
	};

	const handleReset = () => {
		setName('');
		setNameError(false);
		setIsAddFormOpen(false);
	};

	return (
		<>
			<ButtonAddItem onClick={() => setIsAddFormOpen(true)} />
			<form
				className={
					isAddFormOpen
						? 'formAddIngredientType formAddIngredientType--open'
						: 'formAddIngredientType'
				}
				onSubmit={handleAddItem}
			>
				<PageTitle title="Tipos de ingredientes" />
				<InputField
					id="name"
					label="Nombre"
					value={name}
					hasError={nameError}
					errorMessage="Campo obligatorio"
					onChange={({ target: { value } }) => setName(value)}
				/>
				<Button>Añadir</Button>
				<Button secondary type="button" onClick={handleReset}>
					Cancelar
				</Button>
			</form>
		</>
	);
};

export default FormAddIngredientType;
