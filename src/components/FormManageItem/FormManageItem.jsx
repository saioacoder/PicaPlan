import Button from '../Button/Button.jsx';
import ButtonAddItem from '../ButtonAddItem/ButtonAddItem.jsx';
import PageTitle from '../PageTitle/PageTitle.jsx';

import './FormManageItem.scss';

const FormManageItem = ({
	pageTitle,
	onCancel,
	onSubmit,
	isFormOpen,
	onFormOpen,
	children,
}) => {
	return (
		<>
			<ButtonAddItem onClick={onFormOpen} />
			<form
				className={
					isFormOpen
						? 'formManageItem formManageItem--open'
						: 'formManageItem'
				}
				onSubmit={onSubmit}
			>
				<PageTitle title={pageTitle} />
				{children}
				<div className="formManageItem__actions">
					<Button type="button" secondary onClick={onCancel}>
						Cancelar
					</Button>
					<Button>Añadir</Button>
				</div>
			</form>
		</>
	);
};

export default FormManageItem;
