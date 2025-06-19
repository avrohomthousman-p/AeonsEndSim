import { useState } from "react";
import "./Modal.css";
import { ModalShowing } from "../data/constants";
import { SORTED_CARD_NAMES } from "../data/cards";
import Select from "react-select";


/**
 * Modal popup that allows users to add new cards to their deck/hand/discard pile.
 * @param {ModalShowing} modalShowing - A enum that tells which modal popup is currently visible.
 * @param {function} setModalShowing - A setter function for changing which modal is showing.
 * @param {function} setCardsInHand - A setter function for modifying the user's cards in hand.
 * @param {function} setCardsInDeck - A setter function for modifying the cards in theuser's deck.
 * @param {function} setCardsInDiscard - A setter function for modifying the cards in the user's discard pile.
 */
export default function AddNewCardsModal({ modalShowing, setModalShowing, setCardsInHand, setCardsInDeck, setCardsInDiscard }) {
    if (modalShowing === ModalShowing.NONE) {
        return null;
    }


    const closeModal = () => {
        setModalShowing(ModalShowing.NONE);
    }


    return (
        <div id="overlay">
            <div className="modal-base-style">
                <h3>Add a Card to Your Deck</h3>
                <CardSearch setCardsInHand={setCardsInHand} setCardsInDeck={setCardsInDeck} setCardsInDiscard={setCardsInDiscard} />

                <button onClick={closeModal} className="close-btn">Close</button>
            </div>
        </div>
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
                <button onClick={() => addCardToList(false, setCardsInHand)}>Put Into Hand</button>
                <button onClick={() => addCardToList(true, setCardsInDeck)}>Put On Top of Deck</button>
                <button onClick={() => addCardToList(true, setCardsInDiscard)}>Put On Top Of Discard Pile</button>
            </div>
        </div>
    );
}

