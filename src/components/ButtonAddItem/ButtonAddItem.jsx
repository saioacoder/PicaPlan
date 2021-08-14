import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import './ButtonAddItem.scss'

const ButtonAddItem = ({ type }) => {
	const iAdd = <FontAwesomeIcon icon={faPlus} />
	return (
		<button
			className="buttonAddItem"
			type="button"
			//onClick=""
		>
			{iAdd}
		</button>
	)
}

export default ButtonAddItem
