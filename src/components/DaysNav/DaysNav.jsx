import { DAYS_NAME } from '../../logic/constants';

import { formateDate, sumDays, subtractDays } from './DaysNav.logic';

import './DaysNav.scss';

const DaysNav = ({ selectedDay, onChangeDay }) => {
	const day = new Date(selectedDay);
	const weekDayNum = day.getDay();
	const firstWeekDay = subtractDays(day, weekDayNum).getTime();
	const selectedWeek = [];

	for (let i = 0; i < 7; i++) {
		const nextDay = sumDays(firstWeekDay, i);
		selectedWeek[i] = formateDate(nextDay);
	}

	return (
		<div className="daysNav">
			{selectedWeek.map(({ name, num, timestamp }) => {
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
						{name}
						<span className="daysNav__dayNum">{num}</span>
					</button>
				);
			})}
		</div>
	);
};

export default DaysNav;
