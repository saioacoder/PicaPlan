import { useState, useEffect } from 'react'

import { loadList } from '../../logic/shared'

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
		</PageLayout>
	)

}

export default PlateTypes