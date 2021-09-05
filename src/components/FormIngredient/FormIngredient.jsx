import { useState, useEffect } from 'react';

import { FOODMAP_LEVEL } from '../../logic/constants';
import { addItem, updateItem } from '../../logic/shared';

import FormLayout from '../FormLayout/FormLayout.jsx';
import InputField from '../InputField/InputField.jsx';
import SelectField from '../SelectField/SelectField.jsx';

const FormIngredient = ({
	id,
	ingredientTypesList,
	unitsList,
	isFormOpen,
	setIsFormOpen,
	setMessageBox,
	setIsEdit,
	isEdit,
	fieldValues,
	onSubmit,
}) => {
	const [name, setName] = useState('');
	const [idIngredientType, setIdIngredientType] = useState('');
	const [foodmapLevel, setFoodmapLevel] = useState('');
	const [idUnit, setIdUnit] = useState('');

	const [nameError, setNameError] = useState(false);
	const [idIngredientTypeError, setIdIngredientTypeError] = useState(false);
	const [foodmapLevelError, setFoodmapLevelError] = useState(false);
	const [idUnitError, setIdUnitError] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		setNameError(false);
		setIdIngredientTypeError(false);
		setFoodmapLevelError(false);
		setIdUnitError(false);

		let error = false;
		if (!name) {
			setNameError(true);
			error = true;
		}
		if (!idIngredientType) {
			setIdIngredientTypeError(true);
			error = true;
		}
		if (!foodmapLevel) {
			setFoodmapLevelError(true);
			error = true;
		}
		if (!idUnit) {
			setIdUnitError(true);
			error = true;
		}

		if (!error) {
			const item = {
				name,
				idIngredientType,
				foodmapLevel,
				idUnit,
			};
			const result = isEdit
				? await updateItem('ingredients', id, item)
				: await addItem('ingredients', item);
			const content = result
				? `Ingrediente ${isEdit ? 'editado' : 'añadido'}`
				: `¡Error! Ingrediente no ${isEdit ? 'editado' : 'añadido'}`;
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
		setIdIngredientType('');
		setFoodmapLevel(false);
		setIdUnit(false);

		setNameError(false);
		setIdIngredientTypeError(false);
		setFoodmapLevelError(false);
		setIdUnitError(false);

		setIsFormOpen(false);
		setIsEdit(false);
	};

	useEffect(() => {
		setName(fieldValues.name);
		setIdIngredientType(fieldValues.idIngredientType);
		setFoodmapLevel(fieldValues.foodmapLevel);
		setIdUnit(fieldValues.idUnit);
	}, [fieldValues]);

	return (
		<FormLayout
			pageTitle="Ingredientes"
			onSubmit={handleSubmit}
			onCancel={handleReset}
			isFormOpen={isFormOpen}
			isEdit={isEdit}
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
				options={ingredientTypesList}
				value={idIngredientType}
				hasError={idIngredientTypeError}
				errorMessage="Campo obligatorio"
				onChange={({ target: { value } }) => setIdIngredientType(value)}
			/>
			<SelectField
				id="foodmapLevel"
				label="Nivel de Foodmap"
				options={FOODMAP_LEVEL}
				value={foodmapLevel}
				hasError={foodmapLevelError}
				errorMessage="Campo obligatorio"
				onChange={({ target: { value } }) => setFoodmapLevel(value)}
			/>
			<SelectField
				id="idUnit"
				label="Unidad"
				options={unitsList}
				value={idUnit}
				hasError={idUnitError}
				errorMessage="Campo obligatorio"
				onChange={({ target: { value } }) => setIdUnit(value)}
			/>
		</FormLayout>
	);
};

export default FormIngredient;
