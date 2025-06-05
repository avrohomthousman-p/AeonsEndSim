import logo from '/icon.jpg'
import './App.css'

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
			<button className="btn" >Garu</button>
			<button className="btn" >Kadir</button>
		</div>
	)
}
