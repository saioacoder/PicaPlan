import { useState, useEffect } from 'react';

import { addItem, updateItem, reloadList } from '../../logic/shared';
import { getUnitName } from '../../pages/plates/plates.logic';

import Button from '../Button/Button.jsx';
import FieldGroup from '../FieldGroup/FieldGroup.jsx';
import FieldTag from '../FieldTag/FieldTag.jsx';
import FormLayout from '../FormLayout/FormLayout.jsx';
import FieldInput from '../FieldInput/FieldInput.jsx';
import FieldSelect from '../FieldSelect/FieldSelect.jsx';
import SimpleTextField from '../SimpleTextField/SimpleTextField.jsx';
import TextareaField from '../TextareaField/TextareaField.jsx';

const FormPlate = ({
	id,
	ingredientsList,
	isFormOpen,
	setIsFormOpen,
	setMessageBox,
	setIsEdit,
	isEdit,
	fieldValues,
	onSubmit,
}) => {
	const [name, setName] = useState('');
	const [ingredients, setIngredients] = useState([]);
	const [idIngredient, setIdIngredient] = useState('');
	const [quantity, setQuantity] = useState(1);
	const [recipe, setRecipe] = useState('');

	const [nameError, setNameError] = useState(false);
	const [ingredientListError, setIngredientListError] = useState(false);
	const [idIngredientError, setIdIngredientError] = useState(false);
	// const [quantityError, setQuantityError] = useState(false);

	const [unitsList, setUnitsList] = useState([]);
	const [unitName, setUnitName] = useState('');

	const handleAddIngredient = async (e) => {
		setIdIngredientError(false);
		// setQuantityError(false);

		let error = false;
		if (!idIngredient) {
			error = true;
			setIdIngredientError(true);
		}
		// if (!quantity) {
		// 	error = true;
		// 	setQuantityError(true);
		// }

		if (!error) {
			const item = {
				idIngredient,
				quantity,
			};
			setIngredients([...ingredients, item]);
			ingredientListError(false);
		}
	};

	const handleAddItem = async (e) => {
		e.preventDefault();

		setNameError(false);
		setIngredientListError(false);
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
				recipe,
				ingredients,
			};
			const result = isEdit
				? await updateItem('plates', id, item)
				: await addItem('plates', item);
			const content = result
				? `Plato ${isEdit ? 'editado' : 'añadido'}`
				: `¡Error! Plato no ${isEdit ? 'editado' : 'añadido'}`;
			setMessageBox({
				content,
				isError: !result,
			});
			handleReset();
			onSubmit();
		}
	};

	const handleReset = () => {
		setName('');
		setIngredients([]);

		setNameError(false);
		setIngredientListError(false);

		setIsFormOpen(false);
		setIsEdit(false);
	};

	useEffect(() => {
		setName(fieldValues.name);
		setRecipe(fieldValues.recipe);
		setRecipe(fieldValues.ingredientList);
	}, [fieldValues]);

	useEffect(() => {
		if (ingredientsList) {
			const selectedIngredient = ingredientsList.filter(
				(item) => item.id === idIngredient
			);
			selectedIngredient.length &&
				setUnitName(getUnitName(selectedIngredient[0].idUnit, unitsList));
		}
	}, [idIngredient]);

	useEffect(() => {
		reloadList('units', 'name', setUnitsList);
	}, []);

	return (
		<FormLayout
			pageTitle="Platos"
			onSubmit={handleAddItem}
			onCancel={handleReset}
			isFormOpen={isFormOpen}
			isEdit={isEdit}
			onFormOpen={() => setIsFormOpen(true)}
		>
			<FieldInput
				id="name"
				label="Nombre"
				value={name}
				hasError={nameError}
				errorMessage="Campo obligatorio"
				onChange={({ target: { value } }) => setName(value)}
			/>
			<FieldGroup>
				<FieldTag name="Azucar" subtext="10 gr" />
				<FieldTag name="Leche" subtext="2 l" />
			</FieldGroup>
			<FieldGroup>
				<FieldSelect
					id="ingredientList"
					label="Ingredientes"
					className="w_100"
					options={ingredientsList}
					value={idIngredient}
					hasError={idIngredientError}
					errorMessage="Campo obligatorio"
					onChange={({ target: { value } }) => setIdIngredient(value)}
				/>
				<FieldInput
					id="quantity"
					label="Cantidad"
					value={quantity}
					className="fx_grow_1"
					type="number"
					errorMessage="Campo obligatorio"
					onChange={({ target: { value } }) => setQuantity(value)}
				/>
				<SimpleTextField
					label="Unidad"
					value={unitName}
					className="fx_grow_1"
				/>
				<Button
					type="button"
					secondary
					className="w_100"
					onClick={handleAddIngredient}
				>
					Añadir ingrediente
				</Button>
			</FieldGroup>
			<TextareaField
				id="recipe"
				label="Receta"
				value={recipe}
				onChange={({ target: { value } }) => setRecipe(value)}
			/>
		</FormLayout>
	);
};

export default FormPlate;
