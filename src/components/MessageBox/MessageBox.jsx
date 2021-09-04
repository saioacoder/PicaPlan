import { useState, useEffect } from 'react';

import './MessageBox.scss';

const MessageBox = ({
	isError = false,
	autoHideDelay = 3500,
	setMessageBox,
	children,
}) => {
	const [autoHide, setAutoHide] = useState(false);

	const classOpen = children !== '' && !autoHide ? 'messageBox--open' : '';
	const classError = isError ? 'messageBox__error' : '';

	useEffect(() => {
		if (children !== '') {
			setTimeout(() => {
				setAutoHide(true);
				setMessageBox({
					content: '',
					isError: false,
				});
				setAutoHide(false);
			}, autoHideDelay);
		}
	}, [children, autoHideDelay, setMessageBox]);

	return (
		<div className={`messageBox ${classOpen} ${classError}`}>{children}</div>
	);
};

export default MessageBox;
