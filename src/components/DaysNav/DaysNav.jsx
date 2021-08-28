import { I_NEXT, I_PREV, DAYS_NAME, MONTHS } from '../../logic/constants';

import { formateDate, sumDays, subtractDays } from './DaysNav.logic';

import './DaysNav.scss';

const DaysNav = ({ selectedDay, onChangeDay }) => {
	const day = new Date(selectedDay);
	const weekDayNum = day.getDay() ? day.getDay() - 1 : 6;
	const firstWeekDay = subtractDays(day, weekDayNum).getTime();
	const selectedWeek = [];

	for (let i = 0; i < 7; i++) {
		const nextDay = sumDays(firstWeekDay, i);
		selectedWeek[i] = formateDate(nextDay);
	}

	return (
		<div className="daysNav">
			<button className="daysNav__prev">{I_PREV}</button>
			{selectedWeek.map(({ month, name, num, timestamp }) => {
				return (
					<button
						key={timestamp}
						className={
							DAYS_NAME[weekDayNum] === name
								? 'daysNav__day daysNav__day--sel'
								: 'daysNav__day'
						}
						onClick={() => onChangeDay(timestamp)}
						type="button"
					>
						<span className="daysNav__month">{MONTHS[month]}</span>
						<span className="daysNav__dayNum">{num}</span>
						<span className="daysNav__dayName">{name}</span>
					</button>
				);
			})}
			<button className="daysNav__next">{I_NEXT}</button>
		</div>
	);
};

export default DaysNav;
