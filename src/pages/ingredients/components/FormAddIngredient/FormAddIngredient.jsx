import { useState } from 'react';

import { addItem } from '../../../../logic/shared';

import Button from '../../../../components/Button/Button.jsx';
import ButtonAddItem from '../../../../components/ButtonAddItem/ButtonAddItem.jsx';
import InputField from '../../../../components/InputField/InputField.jsx';
import SelectField from '../../../../components/SelectField/SelectField.jsx';

import './FormAddIngredient.scss';

const FormAddIngredient = ({ ingredientTypes, onSubmit }) => {
	const [name, setName] = useState('');
	const [idIngredientType, setIdIngredientType] = useState('');
	const [isAddFormOpen, setIsAddFormOpen] = useState(false);

	const handleAddItem = async (e) => {
		e.preventDefault();
		const item = {
			name,
			idIngredientType: '6VJaDulLoNTGvT2Ie9zZ',
		};
		const result = addItem('ingredients', item);
		result && onSubmit();
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
				<InputField
					id="name"
					label="Nombre"
					value={name}
					onChange={({ target: { value } }) => setName(value)}
				/>
				<SelectField
					id="idIngredientType"
					label="Tipo de ingrediente"
					options={ingredientTypes}
					value={idIngredientType}
					onChange={({ target: { value } }) => setIdIngredientType(value)}
				/>
				<Button>Añadir ingrediente</Button>
			</form>
		</>
	);
};

export default FormAddIngredient;
