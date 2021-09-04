import { useState } from 'react';

import {
	I_EDIT,
	I_REMOVE,
	I_SUBMENU,
	I_SUBMENU_CLOSE,
} from '../../logic/constants';

import './ItemCard.scss';

const ItemCard = ({
	name,
	category = '',
	extraInfo = '',
	icon = '',
	onRemove,
	onEdit,
}) => {
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

	const handleSubmenu = () => {
		setIsSubmenuOpen(!isSubmenuOpen);
	};

	const handleEdit = () => {
		setIsSubmenuOpen(!isSubmenuOpen);
		onEdit();
	};

	const handleRemove = () => {
		setIsSubmenuOpen(!isSubmenuOpen);
		onRemove();
	};

	return (
		<article className="itemCard">
			<div className="itemCard__content">
				<span className="itemCard__icon">{icon}</span>
				<div>
					<h2 className="itemCard__title">{name}</h2>
					{category && (
						<span className="itemCard__category">{category}</span>
					)}
					{extraInfo && (
						<div className="itemCard__extraInfo">{extraInfo}</div>
					)}
				</div>
			</div>
			<button
				type="button"
				className="itemCard__submenuOpen"
				onClick={handleSubmenu}
			>
				{I_SUBMENU}
			</button>
			<div
				className={
					!isSubmenuOpen
						? 'itemCard__actions itemCard__actions--open'
						: 'itemCard__actions'
				}
			>
				<button className="itemCard__submenuClose" onClick={handleSubmenu}>
					{I_SUBMENU_CLOSE}
				</button>
				<button
					type="button"
					className="itemCard__edit"
					onClick={handleEdit}
				>
					{I_EDIT}
				</button>
				<button
					type="button"
					className="itemCard__remove"
					onClick={handleRemove}
				>
					{I_REMOVE}
				</button>
			</div>
		</article>
	);
};

export default ItemCard;
