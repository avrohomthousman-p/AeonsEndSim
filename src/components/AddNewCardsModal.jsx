import { useState } from "react";
import "./Modal.css";
import { ModalShowing } from "../data/constants";
import { SORTED_CARD_NAMES } from "../data/cards";
import Select from "react-select";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


/**
 * Modal popup that allows users to add new cards to their deck/hand/discard pile.
 * @param {function} setCardsInHand - A setter function for modifying the user's cards in hand.
 * @param {function} setCardsInDeck - A setter function for modifying the cards in theuser's deck.
 * @param {function} setCardsInDiscard - A setter function for modifying the cards in the user's discard pile.
 */
export default function AddNewCardsModal({modalShowing, setModalShowing, setCardsInHand, setCardsInDeck, setCardsInDiscard }) {
    const closeModal = () => {
        setModalShowing(ModalShowing.NONE);
    }

    return (
        <Dialog open={modalShowing === ModalShowing.ADD_NEW_CARDS} 
            slotProps={{
                paper: {
                    sx: {
                        width: "45vw",
                        maxWidth: "none"
                    }
                }
            }} >

            <DialogTitle>Add New Cards To The Game</DialogTitle>

            <DialogContent sx={{ overflow: "hidden", textAlign: "center" }}>
                <CardSearch setCardsInHand={setCardsInHand} setCardsInDeck={setCardsInDeck} setCardsInDiscard={setCardsInDiscard} />
            </DialogContent>

            <DialogActions>
                <button onClick={closeModal} className="btn close-btn">Close</button>
            </DialogActions>

        </Dialog>
    );
}


/**
 * A widget that lets the user search for any Aeons End card they want to add.
 * @param {function} setCardsInHand - A setter for the user's cards in hand.
 * @param {function} setCardsInDeck - A setter for the cards in the user's deck.
 * @param {function} setCardsInDiscard - A setter for the cards in the user's discard pile.
 */
function CardSearch({ setCardsInHand, setCardsInDeck, setCardsInDiscard }) {
    const [selectedItem, setSelectedItem] = useState(null);


    const addCardToList = (putAtEnd, listSetter) => {
        if (selectedItem === null) {
            return;
        }

        if (putAtEnd) {
            listSetter(prev => [...prev, selectedItem.value]);
        }
        else {
            listSetter(prev => [selectedItem.value, ...prev]);
        }

        setSelectedItem(null);
    }


    return (
        <div className="vertical-stack">
            <div style={{ marginBottom: "20px" }}>
                <Select
                    options={SORTED_CARD_NAMES}
                    value={selectedItem}
                    onChange={setSelectedItem}
                    isSearchable={true}
                    placeholder="Enter Card Name..." />
            </div>

            <div>
                <div style={{ marginBottom: "10px", marginTop: "20px", color: "#888" }}>
                    Put that card in...
                </div>
                <button className="btn" onClick={() => addCardToList(false, setCardsInHand)}>Hand</button>
                <button className="btn" onClick={() => addCardToList(true, setCardsInDeck)}>Deck (Top)</button>
                <button className="btn" onClick={() => addCardToList(true, setCardsInDiscard)}>Discard Pile (Top)</button>
                <button className="btn" onClick={() => addCardToList(false, setCardsInDiscard)}>Discard Pile (Bottom)</button>
            </div>
        </div>
    );
}

