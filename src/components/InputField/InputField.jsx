import { useEffect, useState } from 'react';

import './InputField.scss';

const InputField = ({
	id,
	label,
	value,
	onChange,
	type = 'text',
	hasError,
	errorMessage,
}) => {
	const [labelAside, setLabelAside] = useState(false);
	const [isFocus, setIsFocus] = useState(false);
	const fieldName = 'inputField';

	useEffect(() => {
		value || isFocus ? setLabelAside(true) : setLabelAside(false);
	}, [value, isFocus]);

	return (
		<div className={fieldName}>
			<div
				className={
					hasError
						? `${fieldName}__container ${fieldName}__container--error`
						: `${fieldName}__container`
				}
			>
				<label
					className={
						labelAside
							? `${fieldName}__label ${fieldName}__label--aside`
							: `${fieldName}__label`
					}
					htmlFor={id}
				>
					{label}
				</label>
				<input
					className={`${fieldName}__field`}
					id={id}
					type={type}
					value={value}
					onChange={onChange}
					onFocus={() => setIsFocus(true)}
					onBlur={() => setIsFocus(false)}
				/>
			</div>
			{hasError && errorMessage && (
				<p className={`${fieldName}__error`}>{errorMessage}</p>
			)}
		</div>
	);
};

export default InputField;
