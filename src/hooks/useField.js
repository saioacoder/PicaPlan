import { useState } from 'react';

export default function useField(defaultValues) {
	const getDefaultErrors = Object.keys(defaultValues).map((key) => {
		return { [key]: false };
	});

	const [values, setValues] = useState(defaultValues);
	const [errors, setErrors] = useState(getDefaultErrors);

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.id]: e.target.value,
		});
	};

	return [values, handleChange, errors];
}
