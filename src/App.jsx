import { BrowserRouter, Route, Routes } from "react-router-dom";

import CharacterSelectorPage from "./pages/CharacterSelector";
import Simulator from "./pages/Simulator";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <CharacterSelectorPage /> } />
				<Route path="/simulator/:characterName" element={ <Simulator />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
