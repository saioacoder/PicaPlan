import './Button.scss';

const Button = ({ onClick, type, secondary = false, children }) => {
	return (
		<button
			className={secondary ? 'button button__secondary' : 'button'}
			onClick={onClick}
			type={type === undefined ? 'submit' : type}
		>
			{children}
		</button>
	);
};

export default Button;
