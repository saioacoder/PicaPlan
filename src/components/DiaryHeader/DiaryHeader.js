import './DiaryHeader.scss';

const DiaryHeader = ({ type }) => {
	return (
		<header className="diaryHeader">
			<div className="container">
				<button type="button" className="diaryHeader__day diaryHeader__day--sel">
					lun <span className="diaryHeader__dayNum">30</span>
				</button>
				<button type="button" className="diaryHeader__day">
					mar <span className="diaryHeader__dayNum">31</span>
				</button>
				<button type="button" className="diaryHeader__day">
					mie <span className="diaryHeader__dayNum">01</span>
				</button>
				<button type="button" className="diaryHeader__day">
					jue <span className="diaryHeader__dayNum">02</span>
				</button>
				<button type="button" className="diaryHeader__day">
					vie <span className="diaryHeader__dayNum">03</span>
				</button>
				<button type="button" className="diaryHeader__day">
					sab <span className="diaryHeader__dayNum">04</span>
				</button>
				<button type="button" className="diaryHeader__day">
					dom <span className="diaryHeader__dayNum">05</span>
				</button>
			</div>
		</header>
	);
};

export default DiaryHeader;
