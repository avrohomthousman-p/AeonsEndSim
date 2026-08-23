import "./CharacterSelector.css";

import { useEffect, useState } from "react";
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
            <SmallScreenWarning />
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



function SmallScreenWarning() {
    const [showWarning, setShowWarning] = useState(window.innerWidth < 800);


    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWarning(false);
        }, 5500);

        return () => clearTimeout(timer);
    }, []);


    if (showWarning) {
        return (
            <div style={smallScreenWarningStyle}>
                <p>
                    For best experience please use a larger screen. You will not get the best experience on a screen this size.
                </p>
            </div>
        );
    }
    else {
        return null;
    }
}



const smallScreenWarningStyle = {
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgba(0,0,0,0.8)",
    color: "white",
    padding: "12px 18px",
    borderRadius: "8px",
    zIndex: 100,
    maxWidth: "90vw",
    textAlign: "center",
};
