import { useState } from 'react';

import {
	I_EDIT,
	I_REMOVE,
	I_SUBMENU,
	I_SUBMENU_CLOSE,
} from '../../logic/constants';
import { removeItem } from '../../logic/shared';

import './ItemCard.scss';

const ItemCard = ({
	id,
	name,
	type,
	category = '',
	extraInfo = '',
	size = '',
	onClickRemove,
}) => {
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

	const handleSubmenu = () => {
		setIsSubmenuOpen(!isSubmenuOpen);
	};

	const handleEditItem = async (type, id) => {
		console.log('editar', type, id);
	};

	const handleRemoveItem = async (type, id) => {
		const result = await removeItem(type, id);
		result && onClickRemove();
	};

	return (
		<article
			className={size === 'small' ? 'itemCard itemCard--small' : 'itemCard'}
		>
			<div className="itemCard__content">
				<h2 className="itemCard__title">{name}</h2>
				{category && <span className="itemCard__category">{category}</span>}
				{extraInfo && (
					<span className="itemCard__extraInfo">{extraInfo}</span>
				)}
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
					onClick={() => handleEditItem(type, id)}
				>
					{I_EDIT}
				</button>
				<button
					type="button"
					className="itemCard__remove"
					onClick={() => handleRemoveItem(type, id)}
				>
					{I_REMOVE}
				</button>
			</div>
		</article>
	);
};

export default ItemCard;
