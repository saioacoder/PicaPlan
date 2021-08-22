import { useEffect, useState } from 'react';

import './SelectField.scss';

const SelectField = ({
	id,
	label,
	options,
	value,
	onChange,
	hasError,
	errorMessage,
}) => {
	const [labelAside, setLabelAside] = useState(false);
	const [isFocus, setIsFocus] = useState(false);
	const fieldName = 'selectField';

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
				<select
					className={`${fieldName}__field`}
					id={id}
					value={value}
					onChange={onChange}
					onFocus={() => setIsFocus(true)}
					onBlur={() => setIsFocus(false)}
				>
					<option value=""></option>
					{options.map(({ id, name }) => {
						return (
							<option key={id} value={id}>
								{name}
							</option>
						);
					})}
				</select>
			</div>
			{hasError && errorMessage && (
				<p className={`${fieldName}__error`}>{errorMessage}</p>
			)}
		</div>
	);
};

export default SelectField;
