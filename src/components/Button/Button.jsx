import './Button.scss';

const Button = ({
	onClick,
	type = 'submit',
	className = '',
	secondary = false,
	children,
}) => {
	return (
		<button
			className={
				secondary
					? `button button__secondary ${className}`
					: `button ${className}`
			}
			onClick={onClick}
			type={type}
		>
			{children}
		</button>
	);
};

export default Button;
