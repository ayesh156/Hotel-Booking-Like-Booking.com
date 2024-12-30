import "./featured.css";

const Featured = () => {
	return (
		<div className="featured">
			<div className="featuredItem">
				<img
					src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
					alt=""
					className="featuredImg"
				/>

				<div className="featuredTitles">
					<h1>New Delhi</h1>
					<h2>123 properties</h2>
				</div>
			</div>
			<div className="featuredItem">
				<img
					src="https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o="
					alt=""
					className="featuredImg"
				/>
				<div className="featuredTitles">
					<h1>Bangalore</h1>
					<h2>203 properties</h2>
				</div>
			</div>
			<div className="featuredItem">
				<img
					src="https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o="
					alt=""
					className="featuredImg"
				/>
				<div className="featuredTitles">
					<h1>Mumbai</h1>
					<h2>324 properties</h2>
				</div>
			</div>
		</div>
	);
};

export default Featured;
