import "./CharacterSelector.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "/icon.jpg";

import { CHARACTERS } from "../data/characters";
import { BASE_URL } from "../data/constants";


function CharacterSelectorPage() {
    return (
        <>
            <div>
                <h1 style={{ margin: "4px" }}>
                    <img src={logo} className="logo" alt="logo" />
                    Aeons End Simulator
                    <img src={logo} className="logo" alt="logo" />
                </h1>
            </div>
            <div>
                <p style={{ marginBottom: "4px" }} >Pick a character</p>
                <CharacterPicker />
            </div>
        </>
    )
}

export default CharacterSelectorPage



function CharacterPicker() {
    const navigate = useNavigate();
    const [hoveredCharacter, setHoveredCharacter] = useState(null);


    return (
        <div id="character-picker">
            <div>
                {Object.keys(CHARACTERS).map((name) => (
                    <button
                        key={name}
                        className="btn"
                        onClick={() => navigate(`/simulator/${name}`)}
                        onMouseEnter={() => setHoveredCharacter(name)} >

                        {name}</button>
                ))}
            </div>
            <div>
                <img 
                    src={hoveredCharacter ? `${BASE_URL}characters/${hoveredCharacter}.webp` : null}
                    style={{ height: "56vh" }} />
            </div>
        </div>
    )
}
