import './PlateTypeBlock.scss';

const PlateTypeBlock = ({ title, children }) => {
	return (
		<div className="plateTypeBlock">
			<h2 className="plateTypeBlock__title">{title}</h2>
			{children}
		</div>
	);
};

export default PlateTypeBlock;
