import { useState } from 'react';

import { addItem } from '../../logic/shared';

import FormLayout from '../FormLayout/FormLayout.jsx';
import InputField from '../InputField/InputField.jsx';

const FormPlateType = ({
	isFormOpen,
	setIsFormOpen,
	setMessageBox,
	onSubmit,
}) => {
	const [name, setName] = useState('');
	const [nameError, setNameError] = useState(false);

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
			const result = addItem('plateTypes', item);
			if (result) {
				onSubmit();
				handleReset();
				setMessageBox({
					content: 'Tipo de plato añadido',
					isError: false,
				});
			}
		}
	};

	const handleReset = () => {
		setName('');
		setNameError(false);
		setIsFormOpen(false);
	};

	return (
		<FormLayout
			pageTitle="Tipos de platos"
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
		</FormLayout>
	);
};

export default FormPlateType;
