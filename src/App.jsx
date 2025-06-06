import CharacterSelectorPage from './CharacterSelector'
import Simulator from './Simulator'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


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
