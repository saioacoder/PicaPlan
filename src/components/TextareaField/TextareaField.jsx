import { useEffect, useState } from 'react';

import './TextareaField.scss';

const TextareaField = ({
	id,
	label,
	value,
	rows = 5,
	onChange,
	hasError = '',
	errorMessage = '',
}) => {
	const [labelAside, setLabelAside] = useState(false);
	const [isFocus, setIsFocus] = useState(false);
	const [state, setState] = useState({
		value,
		rows,
	});
	const FIELD_NAME = 'textareaField';

	const handleChange = (e) => {
		const item = e.target;
		const textareaLineHeight = 24;
		item.rows = state.rows;
		const currentRows = ~~(item.scrollHeight / textareaLineHeight);
		item.rows = currentRows;
		item.scrollTop = item.scrollHeight;
		setState({
			value: item.value,
			rows: currentRows,
		});
		onChange(e);
	};

	useEffect(() => {
		state.value || isFocus ? setLabelAside(true) : setLabelAside(false);
	}, [state, isFocus]);

	return (
		<div className={FIELD_NAME}>
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
				<textarea
					className={`${FIELD_NAME}__field`}
					id={id}
					value={value}
					rows={rows}
					onChange={handleChange}
					onFocus={() => setIsFocus(true)}
					onBlur={() => setIsFocus(false)}
				></textarea>
			</div>
			{hasError && errorMessage && (
				<p className={`${FIELD_NAME}__error`}>{errorMessage}</p>
			)}
		</div>
	);
};

export default TextareaField;
