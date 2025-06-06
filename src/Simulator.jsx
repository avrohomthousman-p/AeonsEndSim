import { useState } from 'react';
import './Simulator.css'
import { CHARACTERS } from './data/characters'
import { FaArrowLeft, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useParams } from "react-router-dom"


const BASE_URL = "https://storage.googleapis.com/aeons-end-pics/";


function Simulator() {
    return (
        <div>
            <div style={{ position: "relative" }}>
                <a href="/" className='back-link'>
                    <FaArrowLeft style={{ marginRight: '0.5rem' }} />
                    Select a different character
                </a>
                <h3 className='title'>Aeons End Simulator</h3>

                <PlayerArea />
            </div>
        </div>
    )
}


export default Simulator



function PlayerArea() {
    const { characterName } = useParams();
    const data = CHARACTERS[characterName];


    return (
        <div>
            <BreachSection characterData={data} />
            <CharacterSection characterName={characterName} />
            <HandSection />
        </div>
    )
}



function BreachSection({ characterData }) {
    return (
        <div id="breaches">
            {
                characterData.breaches.map(
                    (breachData) =>
                        <img
                            src={`${BASE_URL}breaches/breach${breachData.breachID}-${breachData.orientation}.webp`}
                            alt="breach"
                            width="12%"
                        />
                )
            }
        </div>
    )
}



function CharacterSection({ characterName }) {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <div style={{ display: "inline-block", width: "12%" }}>
                <p>5 cards</p>
                <img src={BASE_URL + "cards/cardBack.webp"} alt="deck" width="100%" />
            </div>

            <div style={{ display: "inline-block", width: "35%" }} >
                <img src={BASE_URL + "characters/" + characterName + ".webp"} alt="player mat" width="100%" />
            </div>

            <div style={{ display: "inline-block", width: "12%" }}>
                <p>0 cards</p>
                <img src={BASE_URL + "cards/noCard.webp"} alt="discard pile" width="100%" />
            </div>
        </div>
    )
}



function HandSection(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleTab = () => {
        setIsOpen(prev => !prev);
    }


    return(
        <div id="hand" style={{ position: 'relative' }}>
            <div 
                style={{ 
                    ...styles.collapsableTab,
                    bottom: isOpen ? '0px' : '-65px'
                }} >


                <div onClick={toggleTab}>
                    {isOpen ? (<FaChevronDown />) : (<FaChevronUp />)}
                    <span style={{ padding: "0px 10px"}}>Cards In Hand</span>
                    {isOpen ? (<FaChevronDown />) : (<FaChevronUp />)}
                </div>
                <div>
                    <p>TODO: card images here</p>
                </div>
            </div>
        </div>
    )
}



const styles = {
    collapsableTab: {
        position: 'fixed',
        left: 0,
        right: 0,
        backgroundColor: '#edebe6',
        padding: '10px 20px',
        borderTop: '1px solid #444',
        cursor: 'pointer',
        transition: 'transform 0.3s ease-in-out',
        zIndex: 1000,
    },
    handContent: {
        position: 'fixed',
        left: 0,
        right: 0,
        backgroundColor: '#edebe6',
        padding: '20px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflowX: 'auto',
        transition: 'bottom 0.3s ease-in-out',
        zIndex: 999,
    }
}
