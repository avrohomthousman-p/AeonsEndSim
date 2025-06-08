import logo from '/icon.jpg'
import './CharacterSelector.css'
import { CHARACTERS } from '../data/characters'
import { useNavigate } from 'react-router-dom'


function CharacterSelectorPage() {
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

export default CharacterSelectorPage



function CharacterPicker(){
    const navigate = useNavigate();

    return (
        <div>
            {Object.keys(CHARACTERS).map((name) => (
                <button 
                    key={name}
                    className="btn"
                    onClick={ () => navigate(`/simulator/${name}`) }>
                        
                {name}</button>
            ))}
        </div>
    )
}
