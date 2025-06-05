import logo from '/icon.jpg'
import './App.css'
import { CHARACTERS } from './data/characters'

function App() {
	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={logo} className="logo" alt="logo" />
				</a>
			</div>
			<h1>Aeons End Simulator</h1>
			<div>
				<p>Pick a character</p>
				<CharacterPicker />
			</div>
		</>
	)
}

export default App



function CharacterPicker(){
	return (
		<div>
			{Object.keys(CHARACTERS).map((name) => (
				<button key={name} className="btn">{name}</button>
			))}
		</div>
	)
}
