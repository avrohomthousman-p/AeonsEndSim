import { useState } from 'react';
import './Simulator.css'
import { CHARACTERS } from '../data/characters'
import { BASE_URL } from '../data/constants'
import { FaArrowLeft, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useParams } from "react-router-dom"
import SingleBreach from '../components/Breach'
import DraggableCard from '../components/DraggableCard'
import DragToDetector from '../components/DragToDetector'
import CardDropZone from '../components/CardDropZone'
import Deck from '../components/Deck'
import { HandleCardDropIntoList } from '../components/CardDropHandlers'
import { DndProvider, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import React from "react";




function Simulator() {
    return (
        <div>
            <div style={{ position: "relative" }}>
                <a href="/" className='back-link'>
                    <FaArrowLeft style={{ marginRight: '0.5rem' }} />
                    Select a different character
                </a>
                <h3 className='title'>Aeons End Simulator</h3>

                <DndProvider backend={HTML5Backend} >
                    <PlayerArea />
                </DndProvider>
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
            
            <CharacterSection 
                    characterName={characterName} 
                    characterData={data} 
                    cardsInHand={cardsInHand} 
                    setCardsInHand={setCardsInHand} />

            <HandSection cardsInHand={cardsInHand} setCardsInHand={setCardsInHand} />
        </div>
    )
}



function BreachSection({ characterData }) {
    return (
        <div id="breaches">
            {
                characterData.breaches.map(
                    (breachData) =>
                        <SingleBreach
                            key={breachData.breachID}
                            breachNumber={breachData.breachID}
                            startingOrientation={breachData.orientation}
                        />
                )
            }
        </div>
    )
}



function CharacterSection({ characterName, characterData, cardsInHand, setCardsInHand }) {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <Deck characterData={characterData} cardsInHand={cardsInHand} setCardsInHand={setCardsInHand} />

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



function HandSection({ cardsInHand, setCardsInHand }) {
    const [isTabOpen, setIsTabOpen] = useState(false);
    const toggleTab = () => {
        setIsTabOpen(prev => !prev);
    }


    const lastCardDropHandler = new HandleCardDropIntoList(cardsInHand, setCardsInHand, cardsInHand.length);
    const stylingClass = "inside-list";

    return (
        <div id="hand" style={{ position: 'relative' }}>
            <div
                style={{
                    ...styles.collapsableTab,
                    bottom: isTabOpen ? '0px' : '-275px'
                }} >


                <div>
                    <DragToDetector onDragTo={toggleTab}>
                        <div onClick={toggleTab}>
                            {isTabOpen ? (<FaChevronDown />) : (<FaChevronUp />)}
                            <span style={{ padding: "0px 10px" }}>Cards In Hand</span>
                            {isTabOpen ? (<FaChevronDown />) : (<FaChevronUp />)}
                        </div>
                    </DragToDetector>
                </div>

                <div>
                    {cardsInHand.map((cardName, index) => {
                        const cardDropHandler = new HandleCardDropIntoList(cardsInHand, setCardsInHand, index);
                        return (
                            <React.Fragment key={index}>
                                <CardDropZone cardDropHandler={cardDropHandler} stylingClass={stylingClass} />
                                <DraggableCard cardName={cardName} cardPosition={index} />
                            </React.Fragment>
                        )
                    })}

                    <CardDropZone cardDropHandler={lastCardDropHandler} stylingClass={stylingClass} />
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
