import { useEffect, useState } from 'react';

import './FieldSelect.scss';

const FieldSelect = ({
	id,
	label,
	className = '',
	options,
	value,
	onChange,
	hasError,
	errorMessage,
}) => {
	const [labelAside, setLabelAside] = useState(false);
	const [isFocus, setIsFocus] = useState(false);
	const FIELD_NAME = 'fieldSelect';

	useEffect(() => {
		value || isFocus ? setLabelAside(true) : setLabelAside(false);
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
				<select
					className={`${FIELD_NAME}__field`}
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
				<p className={`${FIELD_NAME}__error`}>{errorMessage}</p>
			)}
		</div>
	);
};

export default FieldSelect;
