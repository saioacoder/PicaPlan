import Button from '../Button/Button.jsx';
import ButtonAddItem from '../ButtonAddItem/ButtonAddItem.jsx';

import './FormLayout.scss';

const FormLayout = ({
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
					isFormOpen ? 'formLayout formLayout--open' : 'formLayout'
				}
				onSubmit={onSubmit}
			>
				<h2 className="formLayout__title">{pageTitle}</h2>
				{children}
				<div className="formLayout__actions">
					<Button type="button" secondary onClick={onCancel}>
						Cancelar
					</Button>
					<Button>{isEdit ? 'Editar' : 'Añadir'}</Button>
				</div>
			</form>
		</>
	);
};

export default FormLayout;
