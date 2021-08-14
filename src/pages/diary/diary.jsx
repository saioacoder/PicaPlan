import { useState, useEffect } from 'react'

import { loadList } from '../../logic/shared'

import ButtonAddItem from "../../components/ButtonAddItem/ButtonAddItem.jsx"
import DaysNav from "../../components/DaysNav/DaysNav.jsx"
import Meal from "../../components/Meal/Meal.jsx"
import PageLayout from '../../components/PageLayout/PageLayout.jsx'

const Diary = () => {

	const [selectedDay, setSelectedDay] = useState({})
	const [days, setDays] = useState([])

	useEffect(() => {
		loadList('days', setDays)
	}, [])

	return (
		<PageLayout>
			<DaysNav
				selectedDay={selectedDay}
				onChangeDay={setSelectedDay}
			/>
			{days.map(({ id, name }) => {
				return <Meal key={id} />
			})}
			<ButtonAddItem type="day" />
		</PageLayout>
	)
}

export default Diary
