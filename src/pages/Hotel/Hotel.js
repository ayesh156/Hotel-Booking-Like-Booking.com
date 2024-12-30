import "./hotel.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import MailList from "../../Components/MailList/MailList";
import Footer from "../../Components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocationDot,
	faCircleXmark,
	faCircleArrowLeft,
	faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
	const [slideNumber, setSlideNumber] = useState(0);
	const [open, setOpen] = useState(false);
	const photos = [
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/206683386.jpg?k=b63335d3b0e3ecaed0a67ea1663a1bb5b88b2ae2bc948a5dd19e7bd2744328a9&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/204827666.jpg?k=45256cbdc57efcafc2107d97e89e7407cc231bc915e599c336d441e7fbdbad52&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/204828779.jpg?k=06765578216cc9738a0fc348a48fb3d3ee1ff8fde959966c69d2314b1bfe76be&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/206683143.jpg?k=08f0e806d1a39e09892ca7fff5537ec42a8f06b2fe136766c62444275069e878&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/206683143.jpg?k=08f0e806d1a39e09892ca7fff5537ec42a8f06b2fe136766c62444275069e878&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/206683143.jpg?k=08f0e806d1a39e09892ca7fff5537ec42a8f06b2fe136766c62444275069e878&o=&hp=1",
		},
	];
	const handleOpen = (i) => {
		setSlideNumber(i);
		setOpen(true);
	};
	const handleMove = (direction) => {
		let newSliderNumber;
		if (direction === "l") {
			newSliderNumber = slideNumber === 0 ? 5 : slideNumber - 1;
		} else if (direction === "r") {
			newSliderNumber = slideNumber === 5 ? 0 : slideNumber + 1;
		}
		setSlideNumber(newSliderNumber);
	};
	return (
		<div>
			<Navbar />
			<Header type="list" />
			<div className="hotelContainer">
				{open && (
					<div className="slider">
						<FontAwesomeIcon
							icon={faCircleXmark}
							className="close"
							onClick={() => setOpen(false)}
						/>
						<FontAwesomeIcon
							icon={faCircleArrowLeft}
							className="arrow"
							onClick={() => handleMove("l")}
						/>
						<div className="sliderWrapper">
							<img src={photos[slideNumber].src} className="sliderImg" alt="" />
						</div>
						<FontAwesomeIcon
							icon={faCircleArrowRight}
							className="arrow"
							onClick={() => handleMove("r")}
						/>
					</div>
				)}
				<div className="hotelWrapper">
					<button className="bookNow">Reserve or Book Now!</button>
					<h1 className="hotelTitle">Grand Hotel</h1>
					<div className="hotelAddress">
						<FontAwesomeIcon icon={faLocationDot} />
						<span>Elton St 125 New york</span>
					</div>
					<span className="hotelDistance">
						Excellent location - 500m from center
					</span>
					<span className="hotelPriceHighLight">
						Book a stay over $114 at this property and get a free airport taxi
					</span>
					<div className="hotelImages">
						{photos.map((photo, i) => (
							<div className="hotelImgWrapper">
								<img
									src={photo.src}
									className="hotelImg"
									alt=""
									onClick={() => handleOpen(i)}
								/>
							</div>
						))}
					</div>
					<div className="hotelDetails">
						<div className="hotelDetailsTexts">
							<h1 className="hotelTitle">Stay in the heart of Krakow</h1>
							<p className="hotelDesc">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
								quam id ad obcaecati asperiores labore fuga doloribus quibusdam
								quasi delectus molestiae repellat repudiandae soluta esse vel
								dolore nihil error consectetur dolores doloremque accusantium
								deleniti, voluptatum assumenda! Qui quis provident assumenda
								dolorum minima quidem autem sapiente. Temporibus quaerat quia
								magni saepe.
							</p>
						</div>
						<div className="hotelDetailsPrice">
							<h1>Perfect for a 9-night stay!</h1>
							<span>
								Located in the real heart of Krakow, this property has an
								excellent location score of 9.8!
							</span>
							<h2>
								<b>$945</b> (9 nights)
							</h2>
							<button>Reserve or Book Now!</button>
						</div>
					</div>
				</div>
				<MailList />
				<Footer />
			</div>
		</div>
	);
};

export default Hotel;
