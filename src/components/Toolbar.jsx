import { useState } from "react";

import { ModalShowing } from "../data/constants";
import { discardHand, drawNewHand } from "../utils/HandOperations";
import TurnTracker from "./TurnTracker";



/**
 * Toolbar component with helpful utilities to make gameplay more smooth.
 */
export default function Toolbar({ setModalShowing, cardsInHand, setCardsInHand, cardsInDeck, setCardsInDeck, cardsInDiscard, setCardsInDiscard }) {
    const [turnNumber, setTurnNumber] = useState(1);
    
    const handleDiscardHand = () => {
        discardHand(cardsInHand, setCardsInHand, setCardsInDiscard);
    }
    
    const handleDrawNewHand = () => {
        drawNewHand(cardsInHand, setCardsInHand, cardsInDeck, setCardsInDeck, cardsInDiscard, setCardsInDiscard);
        setTurnNumber(prev => prev + 1);
    }
    
    return (
        <div id="toolbar" style={toolbarStyle}>
            <h3 style={{ margin: "5px", textDecoration: "underline" }}>ToolBar</h3>
            <TurnTracker turnNumber={turnNumber} setTurnNumber={setTurnNumber} />
            <button className="btn" onClick={handleDrawNewHand}>Draw New Hand</button>
            <button className="btn" onClick={handleDiscardHand}>Discard Hand</button>
            <button className="btn" onClick={() => setModalShowing(ModalShowing.ADD_NEW_CARDS)}>Add New Cards</button>
            <button className="btn" onClick={() => setModalShowing(ModalShowing.REORDER_DECK)}>Reorder Deck</button>
            <button className="btn" onClick={() => setModalShowing(ModalShowing.REORDER_DISCARD)}>Reorder Discard Pile</button>
            {/* TODO: add more tools here */}
        </div>
    );
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
