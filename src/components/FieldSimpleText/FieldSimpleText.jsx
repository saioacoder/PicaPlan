import { useEffect, useState } from 'react';

import './FieldSimpleText.scss';

const FieldSimpleText = ({ label = '', className = '', value }) => {
	const [labelAside, setLabelAside] = useState(false);
	const FIELD_NAME = 'fieldSimpleText';

	useEffect(() => {
		value !== undefined && value !== ''
			? setLabelAside(true)
			: setLabelAside(false);
	}, [value]);

	return (
		<div className={`${FIELD_NAME} ${className}`}>
			<div className={`${FIELD_NAME}__container`}>
				<label
					className={
						labelAside
							? `${FIELD_NAME}__label ${FIELD_NAME}__label--aside`
							: `${FIELD_NAME}__label`
					}
				>
					{label}
				</label>
				<div className={`${FIELD_NAME}__field`}>{value}&nbsp;</div>
			</div>
		</div>
	);
};

export default FieldSimpleText;
