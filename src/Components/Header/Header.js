import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	faBed,
	faPlane,
	faCar,
	faTaxi,
	faCalendarDays,
	faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import "./header.css";
import { Autocomplete,
	TextField,
	Popper,
	ListItem,
	ListItemText,} from "@mui/material";
import { styled } from "@mui/system";

const Header = (props) => {
	const [destination, setDestination] = useState("");
	const [openDate, setOpenDate] = useState(false);
	const [openOptions, setOpenOptions] = useState(false);
	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		room: 1,
	});
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);
	const handleOption = (name, operation) => {
		setOptions((prev) => {
			return {
				...prev,
				[name]: operation === "i" ? options[name] + 1 : options[name] - 1,
			};
		});
	};
	const navigate = useNavigate();
	const handleSearch = () => {
		navigate("/hotels", { state: { destination, date, options } });
	};

	const destinations = [
		{ label: "Nuwara Eliya, Sri Lanka" },
		{ label: "Kandy, Sri Lanka" },
		{ label: "Galle, Sri Lanka" },
		{ label: "Ella, Sri Lanka" },
		{ label: "Colombo, Sri Lanka" },
	];

	// Styled Popper for the dropdown
	const StyledPopper = styled(Popper)({
		borderRadius: "10px",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
		padding: "10px",
		backgroundColor: "#fff",
		zIndex: 1200,
		width: "300px", // Matches input field
	});

// Styled ListItem for each option
	const StyledListItem = styled(ListItem)({
		borderBottom: "1px solid #f0f0f0", // Border between items
		padding: "10px 15px",
		borderRadius: "5px",
		"&:hover": {
			backgroundColor: "#f9f9f9", // Background on hover
			cursor: "pointer",
		},
	});

	const StyledAutocomplete = styled(Autocomplete)({
		"& .MuiAutocomplete-paper": {
			borderRadius: "10px", // Rounded dropdown
			marginTop: "5px",
			backgroundColor: "#fff",
			boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
		},
		"& .MuiAutocomplete-input": {
			fontSize: "14px",
			padding: "10px", // Add spacing inside the input
		},
	});

	return (
		// <div className="header">
		<div
			className={
				props.imgOption === "true" || false ? "headerWithImg" : "header"
			}>
			<div
				className={
					props.type === "list" ? "headerContainer listMode" : "headerContainer"
				}>
				<div className="headerList">
					<div className="headerListItem active">
						<FontAwesomeIcon icon={faBed} />
						<span>Stays</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faPlane} />
						<span>Flights</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faCar} />
						<span>Car Rentals</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faBed} />
						<span>Attractions</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faTaxi} />
						<span>Airport Taxis</span>
					</div>
				</div>

				{props.type !== "list" && (
					<>
						<h1 className="headerTitle" style={{ letterSpacing: "2px" }}>
							A liftime of discounts? It's Genius
						</h1>
						<p className="headerDesc" style={{ letterSpacing: "0.5px" }}>
							Get rewarded for your travels unlock instant savings of 10% or
							more with a free LamaBooking account
						</p>
						<button className="headerBtn">Sign In / Register </button>
						<div className="headerSearch">
							<div className="headerSearchItem">
								<FontAwesomeIcon icon={faBed} className="headerIcon" />
								<StyledAutocomplete
									freeSolo
									value={destination} // Bind the state to the value prop
									onChange={(event, newValue) => setDestination(newValue)} // Update state on selection
									options={destinations.map((option) => option.label)}
									PopperComponent={StyledPopper} // Custom Popper for styling
									renderInput={(params) => (
										<TextField
											{...params}
											placeholder="Where are you going?"
											variant="outlined"
											sx={{
												width: "300px",
												"& .MuiOutlinedInput-root": {
													borderRadius: "0px", // Rounded input field
													backgroundColor: "#f9f9f9",
												},
											}}
										/>
									)}
									renderOption={(props, option) => (
										<StyledListItem {...props}>
											<ListItemText primary={option} />
										</StyledListItem>
									)}
									onInputChange={(event, value) => setDestination(value)} // Update state on manual input
								/>


							</div>
							<div className="headerSearchItem">
								<FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
								<span
									onClick={() => setOpenDate(!openDate)}
									className="headerSearchText">{`${format(
									date[0].startDate,
									"dd/MM/yyyy"
								)} to ${format(date[0].endDate, "dd/MM/yyyy")} `}</span>
								{openDate && (
									<DateRange
										editableDateInputs={true}
										onChange={(item) => setDate([item.selection])}
										moveRangeOnFirstSelection={false}
										ranges={date}
										minDate={new Date()}
										className="date"
									/>
								)}
							</div>
							<div className="headerSearchItem">
								<FontAwesomeIcon icon={faPerson} className="headerIcon" />
								<span
									className="headerSearchText"
									onClick={() =>
										setOpenOptions(!openOptions)
									}>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
								{openOptions && (
									<div className="options">
										<div className="optionItem">
											<span className="optionText">Adult</span>
											<div className="optionCounter">
												<button
													disabled={options.adult <= 1}
													className="optionCounterBtn"
													onClick={() => handleOption("adult", "d")}>
													-
												</button>
												<span className="optionCounterNumber">
													{options.adult}
												</span>
												<button
													className="optionCounterBtn"
													onClick={() => handleOption("adult", "i")}>
													+
												</button>
											</div>
										</div>
										<div className="optionItem">
											<span className="optionText">Children</span>
											<div className="optionCounter">
												<button
													disabled={options.children <= 0}
													className="optionCounterBtn"
													onClick={() => handleOption("children", "d")}>
													-
												</button>
												<span className="optionCounterNumber">
													{options.children}
												</span>
												<button
													className="optionCounterBtn"
													onClick={() => handleOption("children", "i")}>
													+
												</button>
											</div>
										</div>
										<div className="optionItem">
											<span className="optionText">Room</span>
											<div className="optionCounter">
												<button
													disabled={options.room <= 1}
													className="optionCounterBtn"
													onClick={() => handleOption("room", "d")}>
													-
												</button>
												<span className="optionCounterNumber">
													{options.room}
												</span>
												<button
													className="optionCounterBtn"
													onClick={() => handleOption("room", "i")}>
													+
												</button>
											</div>
										</div>
									</div>
								)}
							</div>
							<div className="headerSearchItem">
								<button className="headerBtn" onClick={handleSearch}>
									Search
								</button>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Header;
