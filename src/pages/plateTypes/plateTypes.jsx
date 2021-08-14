import { useState, useEffect } from 'react'

import { loadList } from '../../logic/shared'

import ButtonAddItem from "../../components/ButtonAddItem/ButtonAddItem.jsx"
import PageLayout from '../../components/PageLayout/PageLayout.jsx'

const PlateTypes = () => {

	const [plateTypes, setPlateTypes] = useState([])

	useEffect(() => {
		loadList('plateTypes', setPlateTypes)
	}, [])

	return (
		<PageLayout>
			<header className="pageHeader">
				<h1>Tipos de platos</h1>
			</header>
			{plateTypes.map(({ id, name }) => {
				return <li key={id}>{name}</li>
			})}
			<ButtonAddItem type="plateType" />
		</PageLayout>
	)

}

export default PlateTypes