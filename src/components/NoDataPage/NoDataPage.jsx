import { I_LOGO } from '../../logic/constants';

import './NoDataPage.scss';

const NoDataPage = ({ children }) => {
	return (
		<div className="noDataPage">
			{I_LOGO}
			<div>{children}</div>
		</div>
	);
};

export default NoDataPage;
