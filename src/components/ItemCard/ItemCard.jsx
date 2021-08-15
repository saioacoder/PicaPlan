import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAngleRight,
	faPen,
	faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';

import './ItemCard.scss';

const ItemCard = ({ name, category = '', extraInfo = '' }) => {
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

	const iSubmenu = <FontAwesomeIcon icon={faAngleRight} />;
	const iEdit = <FontAwesomeIcon icon={faPen} />;
	const iRemove = <FontAwesomeIcon icon={faTrashAlt} />;

	const handleSubmenu = () => {
		setIsSubmenuOpen(!isSubmenuOpen);
	};

	return (
		<article className="itemCard">
			<div className="itemCard__content">
				{category && <span className="itemCard__type">{category}</span>}
				{extraInfo && <span className="itemCard__time">{extraInfo}</span>}
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
					{iSubmenu}
				</button>
				<button type="button" className="itemCard__edit">
					{iEdit}
				</button>
				<button type="button" className="itemCard__remove">
					{iRemove}
				</button>
			</div>
		</article>
	);
};

export default ItemCard;
