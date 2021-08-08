import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import './Meal.scss'

const Meal = ({ id }) => {
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(true)
	const iSubmenuOpen = <FontAwesomeIcon icon={faAngleRight} />
	const iSubmenuClose = <FontAwesomeIcon icon={faAngleLeft} />
	const iEdit = <FontAwesomeIcon icon={faPen} />
	const iRemove = <FontAwesomeIcon icon={faTrashAlt} />

	const handleSubmenu = () => {
		setIsSubmenuOpen(!isSubmenuOpen)
	}

	return (
		<article className="meal">
			<div className="meal__content">
				<span className="meal__type">Desayuno</span>
				<span className="meal__time">08:34</span>
				<h2 className="meal__title">Melón con jamón y muchas más cosas para comer</h2>
			</div>
			<button type="button" className="meal__submenuOpen" onClick={handleSubmenu}>{iSubmenuOpen}</button>
			<div className={isSubmenuOpen ? 'meal__actions meal__actions--open' : 'meal__actions'}>
				<button type="button" className="meal__submenuClose" onClick={handleSubmenu}>{iSubmenuClose}</button>
				<button type="button" className="meal__edit">{iEdit}</button>
				<button type="button" className="meal__remove">{iRemove}</button>
			</div>
		</article>
	)
}

export default Meal