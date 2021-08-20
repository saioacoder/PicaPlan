import './SelectField.scss';

const SelectField = ({ id, label, value, onChange }) => {
	return (
		<div className="selectField">
			<label>{label}</label>
			<select id={id} name={id} value={value} onChange={onChange}>
				{value.map((item) => {
					return <option value={item.id}>{item.name}</option>;
				})}
			</select>
		</div>
	);
};

export default SelectField;
