import './Button.scss';

const Button = ({ className, disabled, onClick, type, children }) => {
	className = className ? ` ${className}` : '';
	return (
		<button
			className={`button ${className}`}
			onClick={onClick}
			disabled={disabled}
			type={type === undefined ? 'button' : type}
		>
			{children}
		</button>
	);
};

export default Button;