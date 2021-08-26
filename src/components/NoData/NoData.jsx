import { I_LOGO } from '../../logic/constants';

import './NoData.scss';

const NoData = ({ message }) => {
	return (
		<div className="noData">
			{I_LOGO}
			<p>{message}</p>
		</div>
	);
};

export default NoData;
