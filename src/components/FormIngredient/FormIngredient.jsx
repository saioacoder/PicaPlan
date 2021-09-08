import { useState, useEffect } from 'react';

import { FOODMAP_LEVEL } from '../../logic/constants';
import { addItem, updateItem } from '../../logic/shared';
import useFieldInput from '../FieldInput/useFieldInput.hook';

import FormLayout from '../FormLayout/FormLayout.jsx';
import FieldInput from '../FieldInput/FieldInput.jsx';
import FieldSelect from '../FieldSelect/FieldSelect.jsx';

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
	const [name, setName, handleChangeName, nameError] = useFieldInput('', true);
	const [idIngredientType, setIdIngredientType] = useState('');
	const [foodmapLevel, setFoodmapLevel] = useState('');
	const [idUnit, setIdUnit] = useState('');

	const [idIngredientTypeError, setIdIngredientTypeError] = useState(false);
	const [foodmapLevelError, setFoodmapLevelError] = useState(false);
	const [idUnitError, setIdUnitError] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		setIdIngredientTypeError(false);
		setFoodmapLevelError(false);
		setIdUnitError(false);

		let error = false;
		if (nameError) {
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
	}, [fieldValues, setName]);

	return (
		<FormLayout
			pageTitle="Ingredientes"
			onSubmit={handleSubmit}
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
				onChange={handleChangeName}
			/>
			<FieldSelect
				id="idIngredientType"
				label="Tipo de ingrediente"
				options={ingredientTypesList}
				value={idIngredientType}
				hasError={idIngredientTypeError}
				errorMessage="Campo obligatorio"
				onChange={({ target: { value } }) => setIdIngredientType(value)}
			/>
			<FieldSelect
				id="foodmapLevel"
				label="Nivel de Foodmap"
				options={FOODMAP_LEVEL}
				value={foodmapLevel}
				hasError={foodmapLevelError}
				errorMessage="Campo obligatorio"
				onChange={({ target: { value } }) => setFoodmapLevel(value)}
			/>
			<FieldSelect
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
