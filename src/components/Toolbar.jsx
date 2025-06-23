import { ModalShowing, NORMAL_HAND_SIZE } from "../data/constants";
import TurnTracker from "./TurnTracker";



/**
 * Toolbar component with helpful utilities to make gameplay more smooth.
 */
export default function Toolbar({ setModalShowing, cardsInHand, setCardsInHand, cardsInDeck, setCardsInDeck, cardsInDiscard, setCardsInDiscard }) {
    const handleDiscardHand = () => {
        discardHand(cardsInHand, setCardsInHand, setCardsInDiscard);
    }
    
    const handleDrawNewHand = () => {
        drawNewHand(cardsInHand, setCardsInHand, cardsInDeck, setCardsInDeck, cardsInDiscard, setCardsInDiscard);
    }
    
    return (
        <div id="toolbar" style={toolbarStyle}>
            <h3 style={{ margin: "5px", textDecoration: "underline" }}>ToolBar</h3>
            <TurnTracker />
            <button onClick={handleDiscardHand}>Discard Hand</button>
            <button onClick={handleDrawNewHand}>Draw New Hand</button>
            <button onClick={() => setModalShowing(ModalShowing.ADD_NEW_CARDS)}>Add New Cards</button>
            <button onClick={() => setModalShowing(ModalShowing.REORDER_DECK)}>Reorder Deck</button>
            <button onClick={() => setModalShowing(ModalShowing.REORDER_DISCARD)}>Reorder Discard Pile</button>
            {/* TODO: add more tools here */}
        </div>
    );
}



/**
 * Draws {NORMAL_HAND_SIZE} new cards if the users hand is empty. Otherwise does nothing.
 */
function drawNewHand(cardsInHand, setCardsInHand, cardsInDeck, setCardsInDeck, cardsInDiscard, setCardsInDiscard) {
    if (cardsInHand.length > 0)
        return;

    const deckSize = cardsInDeck.length;

    //Draw cards from the deck
    let startIndex = Math.max(0, deckSize - NORMAL_HAND_SIZE);
    let endIndex = deckSize;
    let cardsDrawn = cardsInDeck.slice(startIndex, endIndex);

    if (cardsDrawn.length < NORMAL_HAND_SIZE) {
        //Draw remaining cards from discard pile, and reset the deck.
        const additionalCardsNeeded = Math.min(NORMAL_HAND_SIZE - cardsDrawn.length, cardsInDiscard.length);
        let cardsDrawnFromDiscard = cardsInDiscard.slice(0, additionalCardsNeeded);
        let cardsLeftInDiscard = cardsInDiscard.slice(additionalCardsNeeded, cardsDrawn.length);

        cardsDrawn = [...cardsDrawn, ...cardsDrawnFromDiscard];
        setCardsInDeck(cardsLeftInDiscard);
        setCardsInDiscard([]);
    }
    else {
        //Remove drawn cards from deck
        setCardsInDeck(prev => prev.slice(0, startIndex));
    }


    setCardsInHand(cardsDrawn.reverse());
}



function discardHand(cardsInHand, setCardsInHand, setCardsInDiscard) {
    setCardsInDiscard(prev => [...prev, ...cardsInHand.reverse()]);
    setCardsInHand([]);
}



const toolbarStyle = {
    border: "1px solid #ccc",
    padding: "0px 10px",
    backgroundColor: "#f9f9f9",
    display: "flex",
    flex: "15",
    flexDirection: "column",
    alignItems: "flex-center",
}
