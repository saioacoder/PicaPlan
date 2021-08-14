import './DaysNav.scss'

const DaysNav = ({ selectedDay, onChangeDay }) => {
	return (
		<header className="daysNav">
			<button type="button" className="daysNav__day daysNav__day--sel">
				lun <span className="daysNav__dayNum">30</span>
			</button>
			<button type="button" className="daysNav__day">
				mar <span className="daysNav__dayNum">31</span>
			</button>
			<button type="button" className="daysNav__day">
				mie <span className="daysNav__dayNum">01</span>
			</button>
			<button type="button" className="daysNav__day">
				jue <span className="daysNav__dayNum">02</span>
			</button>
			<button type="button" className="daysNav__day">
				vie <span className="daysNav__dayNum">03</span>
			</button>
			<button type="button" className="daysNav__day">
				sab <span className="daysNav__dayNum">04</span>
			</button>
			<button type="button" className="daysNav__day">
				dom <span className="daysNav__dayNum">05</span>
			</button>
		</header>
	)
}

export default DaysNav
