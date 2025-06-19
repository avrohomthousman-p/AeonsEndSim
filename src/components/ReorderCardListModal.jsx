import "./Modal.css"
import { ModalShowing } from "../data/constants";
import CardListDisplay from "./CardListDisplay";


/**
 * Modal popup that allows the user to view and re-order a list of cards like the deck or discard pile.
 * @param {ModalShowing} modalShowing - An enum value for which modal is currently being displayed.
 * @param {function} setModalShowing - a Setter function for changing what modal is currently visible.
 * @param {CardLocations} locationName - Enum describing where the card comes from (deck, discard pile, etc).
 * @param {string[]} cardList - The list of cards being displayed.
 * @param {function} setCardList - A setter function for modifying the card list (for re-ordering list).
 */
export default function ReorderCardListModal({ modalShowing, setModalShowing, locationName, cardList, setCardList }) {
    if (modalShowing === ModalShowing.NONE) {
        return null;
    }


    const closeModal = () => {
        setModalShowing(ModalShowing.NONE);
    }


    return (
        <div id="overlay">
            <div className="modal-base-style large-modal">
                <h3 style={{ textDecoration: "underline", fontWeight: "bold" }}>Reorder {locationName}</h3>
                <CardListDisplay locationName={locationName} cardList={cardList} setCardList={setCardList} />

                <button onClick={closeModal} className="close-btn">Close</button>
            </div>
        </div>
    );
}

