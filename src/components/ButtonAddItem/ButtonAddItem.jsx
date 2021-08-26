import { I_ADD } from '../../logic/constants';

import './ButtonAddItem.scss';

const ButtonAddItem = ({ onClick }) => {
	return (
		<button className="buttonAddItem" type="button" onClick={onClick}>
			{I_ADD}
		</button>
	);
};

export default ButtonAddItem;
