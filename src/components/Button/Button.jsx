import './Button.scss';

const Button = ({ onClick, type = 'submit', secondary = false, children }) => {
	return (
		<button
			className={secondary ? 'button button__secondary' : 'button'}
			onClick={onClick}
			type={type}
		>
			{children}
		</button>
	);
};

export default Button;
