import { useState } from 'react';

// import { I_ADD } from '../../logic/constants';
import { addItem } from '../../logic/shared';

// import Button from '../Button/Button.jsx';
// import FieldGroup from '../FieldGroup/FieldGroup.jsx';
import FormManageItem from '../FormManageItem/FormManageItem.jsx';
import InputField from '../InputField/InputField.jsx';
// import SelectField from '../SelectField/SelectField.jsx';
import TextareaField from '../TextareaField/TextareaField.jsx';

const FormPlate = ({ ingredients, onSubmit }) => {
	const [name, setName] = useState('');
	// const [ingredientList, setIngredientList] = useState([]);
	// const [idIngredient, setIdIngredient] = useState('');
	// const [quantity, setQuantity] = useState(null);
	const [recipe, setRecipe] = useState('');

	const [nameError, setNameError] = useState(false);
	// const [ingredientListError, setIngredientListError] = useState(false);
	// const [idIngredientError, setIdIngredientError] = useState(false);
	// const [quantityError, setQuantityError] = useState(false);

	const [isFormOpen, setIsFormOpen] = useState(false);

	// const handleAddIngredient = async (e) => {
	// 	setIdIngredientError(false);
	// 	setQuantityError(false);

	// 	let error = false;
	// 	if (!idIngredient) {
	// 		error = true;
	// 		setIdIngredientError(true);
	// 	}
	// 	if (!quantity) {
	// 		error = true;
	// 		setQuantityError(true);
	// 	}

	// 	if (!error) {
	// 		const item = {
	// 			idIngredient,
	// 			quantity,
	// 		};
	// 		setIngredientList([...ingredientList, item]);
	// 		ingredientListError(false);
	// 	}
	// };

	const handleAddItem = async (e) => {
		e.preventDefault();

		setNameError(false);
		// setIngredientListError(false);
		// setQuantityError(false);

		let error = false;
		if (!name) {
			error = true;
			setNameError(true);
		}
		// if (!ingredientList.length) {
		// 	error = true;
		// 	setIngredientListError(true);
		// }

		if (!error) {
			const item = {
				name,
				// ingredientList,
				recipe,
			};
			const result = addItem('plates', item);
			result && onSubmit();
			handleReset();
		}
	};

	const handleReset = () => {
		setName('');
		// setIngredientList([]);
		setNameError(false);
		// setIngredientListError(false);
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
			{/* <FieldGroup>
				<SelectField
					id="ingredientList"
					label="Ingredientes"
					options={ingredients}
					value={idIngredient}
					hasError={idIngredientError}
					errorMessage="Campo obligatorio"
					onChange={({ target: { value } }) => setIdIngredient(value)}
				/>
				<InputField
					id="quantity"
					label="Cantidad"
					value={quantity}
					type="number"
					hasError={quantityError}
					errorMessage="Campo obligatorio"
					onChange={({ target: { value } }) => setQuantity(value)}
				/>
				<Button type="button" secondary onClick={handleAddIngredient}>
					{I_ADD}
				</Button>
			</FieldGroup> */}
			<TextareaField
				id="recipe"
				label="Receta"
				value={recipe}
				onChange={({ target: { value } }) => setRecipe(value)}
			/>
		</FormManageItem>
	);
};

export default FormPlate;
