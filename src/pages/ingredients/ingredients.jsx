import { useState, useEffect } from 'react'

import { loadList } from '../../logic/shared'

import ButtonAddItem from "../../components/ButtonAddItem/ButtonAddItem.jsx"
import PageLayout from '../../components/PageLayout/PageLayout.jsx'

const Ingredients = () => {

	const [ingredients, setIngredients] = useState([])

	useEffect(() => {
		loadList('ingredients', setIngredients)
	}, [])

	return (
		<PageLayout>
			<header className="pageHeader">
				<h1>Ingredientes</h1>
			</header>
			{ingredients.map(({ id, name }) => {
				return <li key={id}>{name}</li>
			})}
			<ButtonAddItem type="ingredient" />
		</PageLayout>
	)

}

export default Ingredients



