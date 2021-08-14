import { useState, useEffect } from 'react'

import { loadList } from '../../logic/shared'

import PageLayout from '../../components/PageLayout/PageLayout.jsx'

const IngredientTypes = () => {

	const [ingredientTypes, setIngredientTypes] = useState([])

	useEffect(() => {
		loadList('ingredientTypes', setIngredientTypes)
	}, [])

	return (
		<PageLayout>
			<header className="pageHeader">
				<h1>Tipos de ingredientes</h1>
			</header>
			{ingredientTypes.map(({ id, name }) => {
				return <li key={id}>{name}</li>
			})}
		</PageLayout>
	)

}

export default IngredientTypes



