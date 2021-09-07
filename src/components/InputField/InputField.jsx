import { useEffect, useState } from 'react';

import './InputField.scss';

const InputField = ({
	id,
	label,
	className = '',
	value,
	onChange,
	type = 'text',
	hasError,
	errorMessage,
}) => {
	const [labelAside, setLabelAside] = useState(false);
	const [isFocus, setIsFocus] = useState(false);
	const FIELD_NAME = 'inputField';

	useEffect(() => {
		(value !== undefined && value !== '') || isFocus
			? setLabelAside(true)
			: setLabelAside(false);
	}, [value, isFocus]);

	return (
		<div className={`${FIELD_NAME} ${className}`}>
			<div
				className={
					hasError
						? `${FIELD_NAME}__container ${FIELD_NAME}__container--error`
						: `${FIELD_NAME}__container`
				}
			>
				<label
					className={
						labelAside
							? `${FIELD_NAME}__label ${FIELD_NAME}__label--aside`
							: `${FIELD_NAME}__label`
					}
					htmlFor={id}
				>
					{label}
				</label>
				<input
					className={`${FIELD_NAME}__field`}
					id={id}
					type={type}
					value={value}
					onChange={onChange}
					onFocus={() => setIsFocus(true)}
					onBlur={() => setIsFocus(false)}
				/>
			</div>
			{hasError && errorMessage && (
				<p className={`${FIELD_NAME}__error`}>{errorMessage}</p>
			)}
		</div>
	);
};

export default InputField;
