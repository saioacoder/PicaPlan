import { I_LOGO } from '../../logic/constants';

import './NoData.scss';

const NoData = ({ children }) => {
	return (
		<div className="noData">
			<div>{children}</div>
		</div>
	);
};

export default NoData;
