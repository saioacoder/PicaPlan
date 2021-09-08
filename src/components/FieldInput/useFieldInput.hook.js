import { useState } from 'react';

export default function useFieldInput(defaultValue, isRequired = false) {
	const [value, setValue] = useState(defaultValue);
	const [error, setError] = useState(false);

	const handleChange = (e) => {
		const inputValue = e.target.value;
		const hasError = isRequired && inputValue === '';
		setValue(inputValue);
		setError(hasError);
	};

	return [value, setValue, handleChange, error];
}
