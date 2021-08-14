
import { useState, useEffect } from 'react'
//import styled from 'styled-components'

import { loadList } from '../../logic/shared'
//import { PageHeader, PageTitle } from './ingredients.style'

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
		</PageLayout>
	)

}

export default Ingredients



