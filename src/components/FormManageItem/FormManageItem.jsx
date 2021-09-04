import Button from '../Button/Button.jsx';
import ButtonAddItem from '../ButtonAddItem/ButtonAddItem.jsx';

import './FormManageItem.scss';

const FormManageItem = ({
	pageTitle,
	onCancel,
	onSubmit,
	isFormOpen,
	isEdit,
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
				<h2 className="formManageItem__title">{pageTitle}</h2>
				{children}
				<div className="formManageItem__actions">
					<Button type="button" secondary onClick={onCancel}>
						Cancelar
					</Button>
					<Button>{isEdit ? 'Editar' : 'Añadir'}</Button>
				</div>
			</form>
		</>
	);
};

export default FormManageItem;
