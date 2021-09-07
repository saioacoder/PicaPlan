import { I_CLOSE } from '../../logic/constants';

import './FieldTag.scss';

const FieldTag = ({ name, subtext }) => {
	return (
		<div className="fieldTag">
			<div className="fieldTag__content">
				{name}
				<span className="fieldTag__subtext">({subtext})</span>
			</div>
			<button className="fieldTag__button">{I_CLOSE}</button>
		</div>
	);
};

export default FieldTag;
