import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List/List";
import Home from "./pages/Home/Home";
import Hotel from "./pages/Hotel/Hotel";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/hotels" element={<List />}></Route>
				<Route path="/hotel/:id" element={<Hotel />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
