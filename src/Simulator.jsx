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
                        <SingleBeach breachNumber={breachData.breachID} startingOrientation={breachData.orientation} />
                )
            }
        </div>
    )
}



/**
* The breach orientation indicates the direction it faces. 0 is the state that
* is farthest away from open. 90 is one rotation closer to biend open, 180 is
* 2 rotations closer, ect. 360 means its already open.
*/
function SingleBeach({ breachNumber, startingOrientation }) {
    const [breachState, setBreachState] = useState({
        orientation: Math.min(startingOrientation, 360),
        isOpen: startingOrientation >= 360
    });


    const focusBreach = () => {
        if (breachState.isOpen) {
            return;
        }
        
        //increment the orientation by 90 degrees, and mark the breach as opened if needed.
        setBreachState(({ orientation }) => {
            const newOrientation = orientation + 90;
            return {
                orientation: newOrientation,
                isOpen: newOrientation === 360,
            }
        });
    }


    //URL must be dynamic, based on state
    const url = BASE_URL + `breaches/breach${breachNumber}-${breachState.isOpen ? "open" : "closed"}.webp`;


    return (
        <img
            key={breachNumber}
            src={url}
            alt="breach"
            width="12%"
            onClick={focusBreach}
            style={{
                transform: `rotate(${breachState.orientation || 0}deg)`,
                transition: 'transform 0.2s ease-in-out',
                cursor: 'pointer'
            }}
        />
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
