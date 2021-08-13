import PageLayout from '../../components/PageLayout/PageLayout.jsx'
import Meal from "../../components/Meal/Meal.jsx"
import DiaryHeader from "../../components/DiaryHeader/DiaryHeader.jsx"

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
		</PageLayout>
	)
}

export default Diary
