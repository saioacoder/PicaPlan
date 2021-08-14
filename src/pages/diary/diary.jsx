import ButtonAddItem from "../../components/ButtonAddItem/ButtonAddItem.jsx"
import DiaryHeader from "../../components/DiaryHeader/DiaryHeader.jsx"
import Meal from "../../components/Meal/Meal.jsx"
import PageLayout from '../../components/PageLayout/PageLayout.jsx'

const Diary = () => {
	return (
		<PageLayout>
			<DiaryHeader type="day"/>
			<section className="container">
				<Meal id="123123213" />
				<Meal id="123123213" />
				<Meal id="123123213" />
				<Meal id="123123213" />
				<Meal id="123123213" />
				<Meal id="123123213" />
				<Meal id="123123213" />
				<Meal id="123123213" />
				<Meal id="123123213" />
				<Meal id="123123213" />
				<Meal id="123123213" />
				<Meal id="123123213" />
				<Meal id="123123213" />
			</section>
			<ButtonAddItem type="day" />
		</PageLayout>
	)
}

export default Diary
