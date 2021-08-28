import { I_LOGO } from '../../logic/constants';

import './NoData.scss';

const NoData = ({ children }) => {
	return (
		<div className="noData">
			{I_LOGO}
			<div>{children}</div>
		</div>
	);
};

export default NoData;
