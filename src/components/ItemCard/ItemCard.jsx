import { useState } from 'react';

import { removeItem } from '../../logic/shared';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAngleRight,
	faEllipsisV,
	faPen,
	faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';

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

	const iSubmenu = <FontAwesomeIcon icon={faEllipsisV} />;
	const iSubmenuClose = <FontAwesomeIcon icon={faAngleRight} />;
	const iEdit = <FontAwesomeIcon icon={faPen} />;
	const iRemove = <FontAwesomeIcon icon={faTrashAlt} />;

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
				{category && <span className="itemCard__category">{category}</span>}
				{extraInfo && (
					<span className="itemCard__extraInfo">{extraInfo}</span>
				)}
				<h2 className="itemCard__title">{name}</h2>
			</div>
			<button
				type="button"
				className="itemCard__submenuOpen"
				onClick={handleSubmenu}
			>
				{iSubmenu}
			</button>
			<div
				className={
					!isSubmenuOpen
						? 'itemCard__actions itemCard__actions--open'
						: 'itemCard__actions'
				}
			>
				<button className="itemCard__submenuClose" onClick={handleSubmenu}>
					{iSubmenuClose}
				</button>
				<button
					type="button"
					className="itemCard__edit"
					onClick={() => handleEditItem(type, id)}
				>
					{iEdit}
				</button>
				<button
					type="button"
					className="itemCard__remove"
					onClick={() => handleRemoveItem(type, id)}
				>
					{iRemove}
				</button>
			</div>
		</article>
	);
};

export default ItemCard;
