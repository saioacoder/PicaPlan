
import { useState, useEffect } from 'react'
//import styled from 'styled-components'

import { loadList } from '../../logic/shared'
//import { PageHeader, PageTitle } from './ingredients.style'

import Menu from '../../components/Menu/Menu.jsx'

const Ingredients = () => {

	const [ingredients, setIngredients] = useState([])

	useEffect(() => {
		loadList('ingredients', setIngredients)
	}, [])

	return (
		<>
			<Menu />
			<header className="pageHeader">
				<h1>Ingredientes</h1>
			</header>
			{ingredients.map(({ id, name }) => {
				return <li key={id}>{name}</li>
			})}
		</>
	)

}

export default Ingredients



