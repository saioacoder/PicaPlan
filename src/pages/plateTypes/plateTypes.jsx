import { useState, useEffect } from 'react'

import { loadList } from '../../logic/shared'

import Menu from '../../components/Menu/Menu.jsx'

const PlateTypes = () => {

	const [plateTypes, setPlateTypes] = useState([])

	useEffect(() => {
		loadList('plateTypes', setPlateTypes)
	}, [])

	return (
		<>
			<Menu />
			<header className="pageHeader">
				<h1>Tipos de platos</h1>
			</header>
			{plateTypes.map(({ id, name }) => {
				return <li key={id}>{name}</li>
			})}
		</>
	)

}

export default PlateTypes