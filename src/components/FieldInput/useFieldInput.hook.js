import { useState } from 'react';

export default function useFieldInput(defaultValue) {
	const [value, setValue] = useState(defaultValue);

	const handleChange = (e) => {
		const inputValue = e?.target?.value ?? '';
		setValue(inputValue);
	};

	return [value, setValue, handleChange];
}
