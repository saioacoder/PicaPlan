import { useEffect, useState } from 'react';

import './TextareaField.scss';

const TextareaField = ({
	id,
	label,
	value,
	rows = 5,
	onChange,
	type = 'text',
	hasError = '',
	errorMessage = '',
}) => {
	const [labelAside, setLabelAside] = useState(false);
	const [isFocus, setIsFocus] = useState(false);
	const [state, setState] = useState({
		value,
		rows,
	});
	const fieldName = 'textareaField';

	const handleChange = (e) => {
		const item = e.target;
		const textareaLineHeight = 24;
		item.rows = rows;
		const currentRows = ~~(item.scrollHeight / textareaLineHeight);
		item.rows = currentRows;
		item.scrollTop = item.scrollHeight;
		setState({
			value: item.value,
			rows: currentRows,
		});
		//onChange();
	};

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
				<textarea
					className={`${fieldName}__field`}
					id={id}
					type={type}
					value={state.value}
					rows={state.rows}
					onChange={handleChange}
					onFocus={() => setIsFocus(true)}
					onBlur={() => setIsFocus(false)}
				></textarea>
			</div>
			{hasError && errorMessage && (
				<p className={`${fieldName}__error`}>{errorMessage}</p>
			)}
		</div>
	);
};

export default TextareaField;
