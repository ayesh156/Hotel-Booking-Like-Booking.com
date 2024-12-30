import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import "./list.css";
import { DateRange } from "react-date-range";
import SearchItem from "../../Components/SearchItem/SearchItem";
const List = () => {
	const location = useLocation();
	//console.log(location);
	const [destination, setDestination] = useState(location.state.destination);
	const [date, setDate] = useState(location.state.date);
	const [options, setOptions] = useState(location.state.options);
	const [openDate, setOpenDate] = useState(false);
	return (
		<div>
			<Navbar />
			<Header type="list" imgOption="flase" />
			<div className="listContainer">
				<div className="listWrapper">
					<div className="listSearch">
						<h1 className="lsTitle">Search</h1>
						<div className="lsItem">
							<label htmlFor="">Destination</label>
							<input type="text" placeholder={destination} className="lsText" />
						</div>
						<div className="lsItem">
							<label htmlFor="">Check-in date</label>
							<span onClick={() => setOpenDate(!openDate)}>{`${format(
								date[0].startDate,
								"dd/MM/yyyy"
							)} to ${format(date[0].endDate, "dd/MM/yyyy")} `}</span>
							{openDate && (
								<DateRange
									onChange={(item) => setDate([item.selection])}
									minDate={new Date()}
									range={date}
								/>
							)}
						</div>
						<div className="lsItem">
							<label htmlFor="Options">Options</label>
							<div className="lsOptions">
								<div className="lsOptionItem">
									<span className="lsOptionText">
										Min price <small>per night</small>
									</span>
									<input type="number" className="lsOptionInput" />
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">
										Max price <small>per night</small>
									</span>
									<input type="number" className="lsOptionInput" />
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">Adult</span>
									<input
										type="number"
										min={1}
										placeholder={options.adult}
										className="lsOptionInput"
									/>
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">Children</span>
									<input
										type="number"
										min={0}
										placeholder={options.children}
										className="lsOptionInput"
									/>
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">Room</span>
									<input
										type="number"
										min={1}
										placeholder={options.room}
										className="lsOptionInput"
									/>
								</div>
							</div>
						</div>
						<button>Search</button>
					</div>
					<div className="listResult">
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
					</div>
				</div>
			</div>
		</div>
	);
};

export default List;
