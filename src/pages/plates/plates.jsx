import { useState, useEffect } from 'react'

import { loadList } from '../../logic/shared'

import ButtonAddItem from "../../components/ButtonAddItem/ButtonAddItem.jsx"
import PageLayout from '../../components/PageLayout/PageLayout.jsx'

const Plates = () => {

	const [plates, setPlates] = useState([])

	useEffect(() => {
		loadList('plates', setPlates)
	}, [])

	return (
		<PageLayout>
			<header className="pageHeader">
				<h1>Platos</h1>
			</header>
			{plates.map(({ id, name }) => {
				return <li key={id}>{name}</li>
			})}
			<ButtonAddItem type="plate" />
		</PageLayout>
	)

}

export default Plates