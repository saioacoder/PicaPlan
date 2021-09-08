import { useState } from 'react';

export default function useFieldInput(defaultValue, isRequired = false) {
	const [value, setValue] = useState(defaultValue);
	const [error, setError] = useState(false);

	const handleChange = (e) => {
		const inputValue = e.target.value;
		setValue(inputValue);
		isRequired && inputValue === '' ? setError(true) : setError(false);
	};

	return [value, setValue, handleChange, error];
}
