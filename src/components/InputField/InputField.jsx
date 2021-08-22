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

	useEffect(() => {
		value || isFocus ? setLabelAside(true) : setLabelAside(false);
	}, [value, isFocus]);

	return (
		<div className="inputField">
			<div
				className={
					hasError
						? 'inputField__container inputField__container--error'
						: 'inputField__container'
				}
			>
				<label
					className={
						labelAside
							? 'inputField__label inputField__label--aside'
							: 'inputField__label'
					}
					htmlFor={id}
				>
					{label}
				</label>
				<input
					className="inputField__field"
					id={id}
					type={type}
					value={value}
					onChange={onChange}
					onFocus={() => setIsFocus(true)}
					onBlur={() => setIsFocus(false)}
				/>
			</div>
			{hasError && errorMessage && (
				<p className="inputField__error">{errorMessage}</p>
			)}
		</div>
	);
};

export default InputField;
