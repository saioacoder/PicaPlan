import './Button.scss';

const Button = ({ onClick, type, children }) => {
	return (
		<button
			className="button"
			onClick={onClick}
			type={type === undefined ? 'submit' : type}
		>
			{children}
		</button>
	);
};

export default Button;
