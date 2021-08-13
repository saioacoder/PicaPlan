import { useState, useEffect } from 'react'

import { loadList } from '../../logic/shared'

import Menu from '../../components/Menu/Menu.jsx'

const IngredientTypes = () => {

	const [ingredientTypes, setIngredientTypes] = useState([])

	useEffect(() => {
		loadList('ingredientTypes', setIngredientTypes)
	}, [])

	return (
		<>
			<Menu />
			<header className="pageHeader">
				<h1>Tipos de ingredientes</h1>
			</header>
			{ingredientTypes.map(({ id, name }) => {
				return <li key={id}>{name}</li>
			})}
		</>
	)

}

export default IngredientTypes



