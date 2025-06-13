import { useEffect, useState, useRef } from 'react';
import './Simulator.css'
import { CHARACTERS } from '../data/characters'
import { BASE_URL, CardLocations } from '../data/constants'
import { FaArrowLeft, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useParams } from "react-router-dom"
import SingleBreach from '../components/Breach'
import DraggableCard from '../components/DraggableCard'
import DragToDetector from '../components/DragToDetector'
import CardDropZone from '../components/CardDropZone'
import Deck from '../components/Deck'
import { HandleCardDropIntoList } from '../components/CardDropHandlers'
import Modal from '../components/Modal'
import { DndProvider, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import React from "react";
import DiscardPile from '../components/DiscardPile';




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
    const [cardsInDiscard, setCardsInDiscard] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalType, setModalType] = useState(null);


    const openModal = (newModalType) => {
        setModalType(newModalType);
        setModalIsOpen(true);
    }


    return (
        <div>
            <BreachSection characterData={data} />

            <CharacterSection
                characterName={characterName}
                characterData={data}
                setCardsInHand={setCardsInHand}
                cardsInDiscard={cardsInDiscard}
                setCardsInDiscard={setCardsInDiscard} />

            <HandSection cardsInHand={cardsInHand} setCardsInHand={setCardsInHand} />
            

            <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} modalType={modalType} />
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



function CharacterSection({ characterName, characterData, setCardsInHand, cardsInDiscard, setCardsInDiscard }) {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <Deck characterData={characterData} setCardsInHand={setCardsInHand} cardsInDiscard={cardsInDiscard} setCardsInDiscard={setCardsInDiscard} />

            <div style={{ display: "inline-block", width: "35%" }} >
                <img src={BASE_URL + "characters/" + characterName + ".webp"} alt="player mat" width="100%" />
            </div>

            <DiscardPile cardsInDiscard={cardsInDiscard} setCardsInDiscard={setCardsInDiscard} />
        </div>
    )
}



function HandSection({ cardsInHand, setCardsInHand }) {
    const [isTabOpen, setIsTabOpen] = useState(false);
    const toggleTab = () => {
        setIsTabOpen(prev => !prev);
    }

    const containerRef = useRef(null);

    const scrollLeft = () => {
        containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }

    const scrollRight = () => {
        containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }


    const lastCardDropHandler = new HandleCardDropIntoList(CardLocations.Hand, cardsInHand.length, cardsInHand, setCardsInHand);
    const stylingClass = ( cardsInHand.length > 0 ? "inside-list" : "last-card");

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

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <button onClick={scrollLeft}>
                        <img src="/left-arrow.webp" alt="left arrow" />
                    </button>


                    <div ref={containerRef}
                        style={{
                            flexGrow: 1,
                            overflowX: 'auto',
                            scrollBehavior: 'smooth',
                            padding: '10px',
                        }}>
                        <div
                            style={{
                                display: 'inline-flex',
                                gap: '10px',
                                minWidth: '100%',
                                justifyContent: 'center',
                            }}>
                            {cardsInHand.map((cardName, index) => {
                                const cardDropHandler = new HandleCardDropIntoList(CardLocations.Hand, index, cardsInHand, setCardsInHand);

                                return (
                                    <React.Fragment key={index}>
                                        <CardDropZone cardDropHandler={cardDropHandler} stylingClass={stylingClass} />
                                        <DraggableCard
                                            cardName={cardName}
                                            cardPosition={index}
                                            locationName={CardLocations.Hand}
                                            cardSrcList={cardsInHand}
                                            setCardSrcList={setCardsInHand} />

                                    </React.Fragment>
                                )
                            })}

                            <CardDropZone cardDropHandler={lastCardDropHandler} stylingClass={stylingClass} />
                        </div>
                    </div>


                    <button onClick={scrollRight}>
                        <img src="/right-arrow.webp" alt="right arrow" />
                    </button>
                </div>

            </div>
        </div >
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
