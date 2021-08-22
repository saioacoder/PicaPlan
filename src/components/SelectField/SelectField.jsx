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

	useEffect(() => {
		value || isFocus ? setLabelAside(true) : setLabelAside(false);
	}, [value, isFocus]);

	return (
		<div className="selectField">
			<div
				className={
					hasError
						? 'selectField__container selectField__container--error'
						: 'selectField__container'
				}
			>
				<label
					className={
						labelAside
							? 'selectField__label selectField__label--aside'
							: 'selectField__label'
					}
					htmlFor={id}
				>
					{label}
				</label>
				<select
					className="selectField__field"
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
				<p className="selectField__error">{errorMessage}</p>
			)}
		</div>
	);
};

export default SelectField;
