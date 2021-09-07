import { I_REMOVE } from '../../logic/constants';

import './FieldTag.scss';

const FieldTag = ({ name, subtext }) => {
	return (
		<div className="fieldTag">
			<div className="fieldTag__content">
				{name} <span className="fieldTag__subtext">({subtext})</span>
			</div>
			<button className="fieldTag__button">{I_REMOVE}</button>
		</div>
	);
};

export default FieldTag;
