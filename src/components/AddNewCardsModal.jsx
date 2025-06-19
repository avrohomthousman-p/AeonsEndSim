import { useState } from "react";
import "./Modal.css";
import { ModalShowing } from "../data/constants";
import { SORTED_CARD_NAMES } from "../data/cards";
import Select from "react-select";


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

