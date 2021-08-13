import { useState, useEffect } from 'react'

import { loadList } from '../../logic/shared'

import Menu from '../../components/Menu/Menu.jsx'

const Plates = () => {

	const [plates, setPlates] = useState([])

	useEffect(() => {
		loadList('plates', setPlates)
	}, [])

	return (
		<>
			<Menu />
			<header className="pageHeader">
				<h1>Platos</h1>
			</header>
			{plates.map(({ id, name }) => {
				return <li key={id}>{name}</li>
			})}
		</>
	)

}

export default Plates