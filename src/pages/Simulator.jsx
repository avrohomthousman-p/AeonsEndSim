import { useState, useRef } from 'react';
import './Simulator.css'
import { CHARACTERS } from '../data/characters'
import { BASE_URL, CardLocations, ModalShowing } from '../data/constants'
import { FaArrowLeft, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useParams } from "react-router-dom"
import SingleBreach from '../components/Breach'
import DraggableCard from '../components/DraggableCard'
import DragToDetector from '../components/DragToDetector'
import CardDropZone from '../components/CardDropZone'
import Deck from '../components/Deck'
import { HandleCardDropIntoList } from '../components/CardDropHandlers'
import ReorderCardListModal from '../components/ReorderCardListModal'
import AddNewCardsModal from "../components/AddNewCardsModal"
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import React from "react";
import FaceUpCardPile from '../components/FaceUpCardPile';




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
    const [cardsInDeck, setCardsInDeck] = useState(data.startingDeck);
    const [cardsInDiscard, setCardsInDiscard] = useState([]);
    const [modalShowing, setModalShowing] = useState(ModalShowing.NONE);


    let correctModal = null;

    switch (modalShowing) {
        case ModalShowing.REORDER_DECK:
            correctModal = (
                <ReorderCardListModal
                    modalShowing={modalShowing}
                    setModalShowing={setModalShowing}
                    cardList={cardsInDeck}
                    setCardList={setCardsInDeck} />
            );
            break;

        case ModalShowing.REORDER_DISCARD:
            correctModal = (
                <ReorderCardListModal
                    modalShowing={modalShowing}
                    setModalShowing={setModalShowing}
                    cardList={cardsInDiscard}
                    setCardList={setCardsInDiscard} />
            );
            break;

        case ModalShowing.ADD_NEW_CARDS:
            correctModal = (
                <AddNewCardsModal
                    modalShowing={modalShowing}
                    setModalShowing={setModalShowing}
                    setCardsInHand={setCardsInHand}
                    setCardsInDeck={setCardsInDeck}
                    setCardsInDiscard={setCardsInDiscard} />
            );
            break;

        default:
            break;
    }


    return (
        <div style={{ display: "flex", height: "100%" }}>
            <div style={{ flex: "8" }}>
                <div style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
                    <BreachSection characterData={data} />

                    <CharacterSection
                        characterName={characterName}
                        cardsInDeck={cardsInDeck}
                        setCardsInDeck={setCardsInDeck}
                        setCardsInHand={setCardsInHand}
                        cardsInDiscard={cardsInDiscard}
                        setCardsInDiscard={setCardsInDiscard} />

                    <HandSection cardsInHand={cardsInHand} setCardsInHand={setCardsInHand} />


                    {correctModal}
                </div>
            </div>
            <div id="toolbar" style={{ flex: "2" }}>
                <h3 style={{ margin: "5px", textDecoration: "underline" }}>ToolBar</h3>
                <button onClick={() => setModalShowing(ModalShowing.ADD_NEW_CARDS)}>Add New Cards</button>
                <button onClick={() => setModalShowing(ModalShowing.REORDER_DECK)}>Reorder Deck</button>
                <button onClick={() => setModalShowing(ModalShowing.REORDER_DISCARD)}>Reorder Discard Pile</button>
                {/* TODO: add more tools here */}
            </div>
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



function CharacterSection({ characterName, cardsInDeck, setCardsInDeck, setCardsInHand, cardsInDiscard, setCardsInDiscard }) {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <Deck
                cardsInDeck={cardsInDeck}
                setCardsInDeck={setCardsInDeck}
                setCardsInHand={setCardsInHand}
                cardsInDiscard={cardsInDiscard}
                setCardsInDiscard={setCardsInDiscard} />

            <div style={{ display: "inline-block", width: "45%" }} >
                <img src={BASE_URL + "characters/" + characterName + ".webp"} alt="player mat" width="100%" />
            </div>

            <FaceUpCardPile pileType={CardLocations.DiscardPile} cardList={cardsInDiscard} setCardList={setCardsInDiscard} />
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
    const stylingClass = (cardsInHand.length > 0 ? "inside-list" : "last-card");

    const cardTabTitle = `Hand: (${cardsInHand.length} Card${cardsInHand.length === 1 ? "" : "s"})`;

    return (
        <div id="hand" style={{ position: 'relative' }}>
            <div
                style={{
                    ...styles.collapsableTab,
                    bottom: isTabOpen ? '0px' : '-295px'
                }} >


                <div>
                    <DragToDetector onDragTo={toggleTab}>
                        <div onClick={toggleTab}>
                            {isTabOpen ? (<FaChevronDown />) : (<FaChevronUp />)}
                            <span style={{ padding: "0px 10px" }}> {cardTabTitle} </span>
                            {isTabOpen ? (<FaChevronDown />) : (<FaChevronUp />)}
                        </div>
                    </DragToDetector>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <button onClick={scrollLeft} style={{ backgroundColor: "LightGray" }}>
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


                    <button onClick={scrollRight} style={{ backgroundColor: "LightGray" }}>
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
