import { useState } from "react";
import "./Simulator.css"
import { CHARACTERS } from "../data/characters"
import { BASE_URL, CardLocations, ModalShowing } from "../data/constants"
import { FaArrowLeft, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useParams } from "react-router-dom"
import SingleBreach from "../components/Breach"
import DragToDetector from "../components/DragToDetector"
import Deck from "../components/Deck"
import ReorderCardListModal from "../components/ReorderCardListModal"
import AddNewCardsModal from "../components/AddNewCardsModal"
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import FaceUpCardPile from "../components/FaceUpCardPile";
import CardListDisplay from "../components/CardListDisplay";
import TurnTracker from "../components/TurnTracker";



/**
 * The main component of the simulator page.
 */
function Simulator() {
    return (
        <div>
            <div style={{ position: "relative" }}>
                <a href="/" className="back-link">
                    <FaArrowLeft style={{ marginRight: "0.5rem" }} />
                    Select a different character
                </a>
                <h3 className="title">Aeons End Simulator</h3>

                <DndProvider backend={HTML5Backend} >
                    <PlayerArea />
                </DndProvider>
            </div>
        </div>
    )
}


export default Simulator



/**
 * The main area of the page that displays all the game components.
 */
function PlayerArea() {
    const { characterName } = useParams();
    const data = CHARACTERS[characterName];

    const [cardsInHand, setCardsInHand] = useState(data.startingHand);
    const [cardsInDeck, setCardsInDeck] = useState(data.startingDeck);
    const [cardsInDiscard, setCardsInDiscard] = useState([]);
    const [destroyedCards, setDestroyedCards] = useState([]);
    const [modalShowing, setModalShowing] = useState(ModalShowing.NONE);


    let correctModal = null;

    switch (modalShowing) {
        case ModalShowing.REORDER_DECK:
            correctModal = (
                <ReorderCardListModal
                    modalShowing={modalShowing}
                    setModalShowing={setModalShowing}
                    locationName={CardLocations.Deck}
                    cardList={cardsInDeck}
                    setCardList={setCardsInDeck} />
            );
            break;

        case ModalShowing.REORDER_DISCARD:
            correctModal = (
                <ReorderCardListModal
                    modalShowing={modalShowing}
                    setModalShowing={setModalShowing}
                    locationName={CardLocations.DiscardPile}
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
            <div style={{ flex: "70" }}>
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

            <div style={{ flex: "15" }}>
                <p><strong> Destroyed Cards </strong></p>
                <FaceUpCardPile pileType={CardLocations.DestroyedPile} cardList={destroyedCards} setCardList={setDestroyedCards} />
            </div>

            <div id="toolbar" style={{ flex: "15" }}>
                <h3 style={{ margin: "5px", textDecoration: "underline" }}>ToolBar</h3>
                <TurnTracker />
                <button onClick={() => setModalShowing(ModalShowing.ADD_NEW_CARDS)}>Add New Cards</button>
                <button onClick={() => setModalShowing(ModalShowing.REORDER_DECK)}>Reorder Deck</button>
                <button onClick={() => setModalShowing(ModalShowing.REORDER_DISCARD)}>Reorder Discard Pile</button>
                {/* TODO: add more tools here */}
            </div>
        </div>
    )
}



/**
 * Componenet that holds all the breaches.
 * @param {Object} characterData - All the data needed for the chosen character's setup as defined
 *                          in data/characters.js.
 */
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



/**
 * Component that displays the player mat, deck, and discard pile.
 */
function CharacterSection({ characterName, cardsInDeck, setCardsInDeck, setCardsInHand, cardsInDiscard, setCardsInDiscard }) {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <Deck
                cardsInDeck={cardsInDeck}
                setCardsInDeck={setCardsInDeck}
                setCardsInHand={setCardsInHand}
                cardsInDiscard={cardsInDiscard}
                setCardsInDiscard={setCardsInDiscard} />

            <div style={{ display: "inline-block", width: "58%" }} >
                <img src={BASE_URL + "characters/" + characterName + ".webp"} alt="player mat" width="100%" />
            </div>

            <div style={{ width: "15%" }}>
                <FaceUpCardPile pileType={CardLocations.DiscardPile} cardList={cardsInDiscard} setCardList={setCardsInDiscard} />
            </div>
        </div>
    )
}



/**
 * A component for displaying the hand in a collapsable tab so it doesnt get in the way of the rest of
 * the game board.
 */
function HandSection({ cardsInHand, setCardsInHand }) {
    const [isTabOpen, setIsTabOpen] = useState(false);
    const toggleTab = () => {
        setIsTabOpen(prev => !prev);
    }

    

    const cardTabTitle = `Hand: (${cardsInHand.length} Card${cardsInHand.length === 1 ? "" : "s"})`;

    return (
        <div id="hand" style={{ position: "relative" }}>
            <div
                style={{
                    ...styles.collapsableTab,
                    bottom: isTabOpen ? "0px" : "-295px"
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

                <CardListDisplay locationName={CardLocations.Hand} cardList={cardsInHand} setCardList={setCardsInHand} />
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
        position: "fixed",
        left: 0,
        right: 0,
        backgroundColor: "#edebe6",
        padding: "10px 20px",
        borderTop: "1px solid #444",
        cursor: "pointer",
        transition: "transform 0.3s ease-in-out",
        zIndex: 1000,
    },
}
