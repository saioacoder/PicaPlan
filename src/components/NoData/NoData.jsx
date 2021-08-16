import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';

import './NoData.scss';

const NoData = ({ message }) => {
	const iEmpty = <FontAwesomeIcon icon={faCarrot} />;
	return (
		<div className="noData">
			{iEmpty}
			<p>{message}</p>
		</div>
	);
};

export default NoData;
