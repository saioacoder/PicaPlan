import './InputField.scss';

const InputField = ({ id, label, value, onChange, type = 'text' }) => {
	return (
		<div className="inputField">
			<label>{label}</label>
			<input
				type={type}
				id={id}
				name={id}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default InputField;
