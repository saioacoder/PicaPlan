import { useState, useEffect } from 'react';

import './MessageBox.scss';

const MessageBox = ({
	isError = false,
	isOpen = false,
	autoHideDelay = 4000,
	children,
}) => {
	const [autoHide, setAutoHide] = useState(false);

	const classOpen = isOpen && !autoHide ? 'messageBox--open' : '';
	const classError = isError ? 'messageBox__error' : '';

	useEffect(() => {
		setTimeout(() => {
			setAutoHide(true);
		}, autoHideDelay);
	}, [autoHideDelay]);

	return (
		<div className={`messageBox ${classOpen} ${classError}`}>{children}</div>
	);
};

export default MessageBox;
