import { useState } from 'react';
import './Simulator.css'
import { CHARACTERS } from './data/characters'
import { FaArrowLeft, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useParams } from "react-router-dom"
import SingleBreach from './Breach'


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
    const [cardsInHand, setCardsInHand] = useState(data.startingHand);


    return (
        <div>
            <BreachSection characterData={data} />
            <CharacterSection characterName={characterName} cardsInHand={cardsInHand} />
            <HandSection cardsInHand={cardsInHand} />
        </div>
    )
}



function BreachSection({ characterData }) {
    return (
        <div id="breaches">
            {
                characterData.breaches.map(
                    (breachData) =>
                        <SingleBreach breachNumber={breachData.breachID} startingOrientation={breachData.orientation} />
                )
            }
        </div>
    )
}



function CharacterSection({ characterName, cardsInHand }) {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <div style={{ display: "inline-block", width: "12%" }}>
                <p>{cardsInHand.length} card{cardsInHand.length === 1 ? "" : "s"}</p>
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



function HandSection({ cardsInHand }) {
    const [isOpen, setIsOpen] = useState(false);


    const toggleTab = () => {
        setIsOpen(prev => !prev);
    }


    return (
        <div id="hand" style={{ position: 'relative' }}>
            <div
                style={{
                    ...styles.collapsableTab,
                    bottom: isOpen ? '0px' : '-275px'
                }} >


                <div onClick={toggleTab}>
                    {isOpen ? (<FaChevronDown />) : (<FaChevronUp />)}
                    <span style={{ padding: "0px 10px" }}>Cards In Hand</span>
                    {isOpen ? (<FaChevronDown />) : (<FaChevronUp />)}
                </div>
                <div>
                    {cardsInHand.map((cardName) => (
                        <img
                            src={BASE_URL + "cards/" + cardName + ".webp"}
                            alt={cardName}
                            style={{ margin: "5px 10px" }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}



/** 
 * Static styles should be stored in Simulator.css. A style should only be
 * here if the code needs to use it together with non-static styling like
 *      style={{ ...styles.myStyle, dynamicStyleHere }}
*/
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
}
