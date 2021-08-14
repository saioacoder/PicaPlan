import { DAYS_NAME } from '../../logic/constants';
import { addDays, subtractDays } from './DaysNav.logic';

import './DaysNav.scss';

const DaysNav = ({ selectedDay, onChangeDay }) => {
	const day = new Date(selectedDay);
	const weekDay = day.getDay();
	const firstWeekDay = subtractDays(day, weekDay - 1).getTime();

	const formatedDate = (d) => {
		const newDay = new Date(d);
		const newWeekDay = newDay.getDay();
		return {
			name: DAYS_NAME[newWeekDay],
			num: newDay.getDate(),
			timestamp: newDay.getTime(),
		};
	};

	const selectedWeek = [];
	for (let i = 0; i < 7; i++) {
		const nextDay = addDays(firstWeekDay, i);
		selectedWeek[i] = formatedDate(nextDay);
	}

	return (
		<div className="daysNav">
			{selectedWeek.map(({ name, num, timestamp }) => {
				return (
					<button
						key={timestamp}
						type="button"
						className={
							DAYS_NAME[weekDay] === name
								? 'daysNav__day daysNav__day--sel'
								: 'daysNav__day'
						}
						onClick={onChangeDay}
					>
						{name}
						<span className="daysNav__dayNum">{num}</span>
					</button>
				);
			})}
		</div>
	);
};

export default DaysNav;
