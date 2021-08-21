import { useEffect, useState } from 'react';

import './SelectField.scss';

const SelectField = ({ id, label, options, value, onChange }) => {
	const [labelAside, setLabelAside] = useState(false);
	const [isFocus, setIsFocus] = useState(false);

	useEffect(() => {
		value || isFocus ? setLabelAside(true) : setLabelAside(false);
	}, [value, isFocus]);

	return (
		<div className="selectField">
			<div className="selectField__container">
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
		</div>
	);
};

export default SelectField;
