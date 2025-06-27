import { useState } from "react";
import "./Simulator.css";
import { CHARACTERS } from "../data/characters";
import { BASE_URL, CardLocations, ModalShowing, GetChargeTrackPosition } from "../data/constants";
import { FaArrowLeft, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useParams } from "react-router-dom";
import SingleBreach from "../components/Breach";
import DragToDetector from "../components/DragToDetector";
import Deck from "../components/Deck";
import ReorderCardListModal from "../components/ReorderCardListModal";
import AddNewCardsModal from "../components/AddNewCardsModal";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import FaceUpCardPile from "../components/FaceUpCardPile";
import CardListDisplay from "../components/CardListDisplay";
import Toolbar from "../components/Toolbar";



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



    return (
        <div style={{ display: "flex", height: "100%" }}>
            <div style={{ flex: "70" }}>
                <div style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
                    <BreachSection characterData={data} />

                    <CharacterSection
                        characterName={characterName}
                        characterData={data}
                        cardsInDeck={cardsInDeck}
                        setCardsInDeck={setCardsInDeck}
                        setCardsInHand={setCardsInHand}
                        cardsInDiscard={cardsInDiscard}
                        setCardsInDiscard={setCardsInDiscard} />

                    <HandSection cardsInHand={cardsInHand} setCardsInHand={setCardsInHand} />

                    <Modals
                        modalShowing={modalShowing}
                        setModalShowing={setModalShowing}
                        setCardsInHand={setCardsInHand}
                        cardsInDeck={cardsInDeck}
                        setCardsInDeck={setCardsInDeck}
                        cardsInDiscard={cardsInDiscard}
                        setCardsInDiscard={setCardsInDiscard} />
                </div>
            </div>

            <div style={{ flex: "15" }}>
                <p><strong> Destroyed Cards </strong></p>
                <FaceUpCardPile pileType={CardLocations.DestroyedPile} cardList={destroyedCards} setCardList={setDestroyedCards} />
            </div>

            <Toolbar
                setModalShowing={setModalShowing}
                cardsInHand={cardsInHand}
                setCardsInHand={setCardsInHand}
                cardsInDeck={cardsInDeck}
                setCardsInDeck={setCardsInDeck}
                cardsInDiscard={cardsInDiscard}
                setCardsInDiscard={setCardsInDiscard} />
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
                            key={breachData.breachNumber}
                            breachNumber={breachData.breachNumber}
                            breachType={breachData.breachType}
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
function CharacterSection({ characterName, characterData, cardsInDeck, setCardsInDeck, setCardsInHand, cardsInDiscard, setCardsInDiscard }) {
    const [chargeCount, setChargeCount] = useState(0);

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <Deck
                cardsInDeck={cardsInDeck}
                setCardsInDeck={setCardsInDeck}
                setCardsInHand={setCardsInHand}
                cardsInDiscard={cardsInDiscard}
                setCardsInDiscard={setCardsInDiscard} />

            <div style={{ display: "inline-block", width: "55%", position: "relative" }} >
                <img src={BASE_URL + "characters/" + characterName + ".webp"} alt="player mat" width="100%" />

                <div id="charge-track" style={GetChargeTrackPosition(characterData.chargeSlots)}>
                    {Array.from({ length: characterData.chargeSlots }).map((_, index) => (
                        <img
                            key={index}
                            src={BASE_URL + "other/Charge.webp"}
                            alt="charge"
                            className="charge"
                            style={{
                                left: `${3 * index}vw`,
                                opacity: chargeCount >= index + 1 ? "1" : "0"
                            }}
                            onClick={() => HandleChargeSlotClick(index + 1, setChargeCount)}
                        />
                    ))}
                </div>
            </div>

            <div>
                <FaceUpCardPile pileType={CardLocations.DiscardPile} cardList={cardsInDiscard} setCardList={setCardsInDiscard} />
            </div>
        </div>
    )
}



/**
 * Click handler for adjusting charges when the user clicks on a charge slot.
 * 
 * In accordance with normal gameplay, charges are added left to right (and removed right
 * to left). So clicking the left-most empty charge slot adds a charge to that slot. Clicking
 * the right-most filled charge slot, removes the charge from that slot. Clicking anywhere
 * else does nothing.
 * 
 * E.g.  [filled, filled, empty, empty, empty]
 * A new charge could only be added in index 2 (charge slot 3)
 * A charge could only be removed from index 1 (charge slot 2)
 * @param {number} chargeSlotClicked - 1 based index of which charge slot was clicked.
 * @param {function} setChargeCount - State setter for modifying charge count.
 */
function HandleChargeSlotClick(chargeSlotClicked, setChargeCount) {
    setChargeCount((chargeCount) => {
        const isLastFilledSlot = chargeSlotClicked === chargeCount;
        const isFirstEmptySlot = chargeSlotClicked === chargeCount + 1;

        if (isLastFilledSlot) {
            return chargeCount - 1;
        }
        else if (isFirstEmptySlot) {
            return chargeCount + 1;
        }
        else {
            return chargeCount;
        }
    });
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
 * Componenent that contains all the modals
 */
function Modals({ modalShowing, setModalShowing, setCardsInHand, cardsInDeck, setCardsInDeck, cardsInDiscard, setCardsInDiscard }) {
    return (
        <>
            <ReorderCardListModal
                    modalShowing={modalShowing}
                    setModalShowing={setModalShowing}
                    locationName={CardLocations.Deck}
                    cardList={cardsInDeck}
                    setCardList={setCardsInDeck} />

            <ReorderCardListModal
                    modalShowing={modalShowing}
                    setModalShowing={setModalShowing}
                    locationName={CardLocations.DiscardPile}
                    cardList={cardsInDiscard}
                    setCardList={setCardsInDiscard} />

            <AddNewCardsModal
                    modalShowing={modalShowing}
                    setModalShowing={setModalShowing}
                    setCardsInHand={setCardsInHand}
                    setCardsInDeck={setCardsInDeck}
                    setCardsInDiscard={setCardsInDiscard} />
        </>
    );
}



/** 
 * Static styles should be stored in Simulator.css. A style should only be
 * here if the code needs to use it together with non-static styling like
 *      style={{ ...styles.myStyle, dynamicStyleHere }}
*/
const styles = {
    collapsableTab: {
        position: "fixed",
        height: "310px",
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
