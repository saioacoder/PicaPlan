import { useState } from 'react';

import { addItem } from '../../../../logic/shared';

import InputField from '../../../../components/InputField/InputField.jsx';
import SelectField from '../../../../components/SelectField/SelectField.jsx';

const FormAddIngredient = ({ onSubmit }) => {
	const [name, setName] = useState('');
	const [ingredientTypes, setIngredientTypes] = useState([]);

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
		<form onSubmit={handleAddItem}>
			<InputField
				id="name"
				label="Nombre"
				value={name}
				onChange={({ target: { value } }) => setName(value)}
			/>
			<SelectField
				id="idIngredientType"
				label="Tipo de ingrediente"
				value={ingredientTypes}
				onChange={({ target: { value } }) => setName(value)}
			/>
			<button type="submit">Añadir</button>
		</form>
	);
};

export default FormAddIngredient;
