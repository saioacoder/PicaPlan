import { useEffect, useState } from 'react';

import './InputField.scss';

const InputField = ({ id, label, value, onChange, type = 'text' }) => {
	const [labelAside, setLabelAside] = useState(false);
	const [isFocus, setIsFocus] = useState(false);

	useEffect(() => {
		value || isFocus ? setLabelAside(true) : setLabelAside(false);
	}, [value, isFocus]);

	return (
		<div className="inputField">
			<div className="inputField__container">
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
		</div>
	);
};

export default InputField;
