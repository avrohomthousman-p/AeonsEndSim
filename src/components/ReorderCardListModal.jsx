import "./Modal.css";
import { ModalShowing, CardLocations } from "../data/constants";
import CardListDisplay from "./CardListDisplay";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


/**
 * Modal popup that allows the user to view and re-order a list of cards like the deck or discard pile.
 * @param {ModalShowing} modalShowing - An enum value for which modal is currently being displayed.
 * @param {function} setModalShowing - a Setter function for changing what modal is currently visible.
 * @param {CardLocations} locationName - Enum describing what card list the component is displaying (deck, discard pile, etc).
 * @param {string[]} cardList - The list of cards being displayed.
 * @param {function} setCardList - A setter function for modifying the card list (for re-ordering list).
 */
export default function ReorderCardListModal({ modalShowing, setModalShowing, locationName, cardList, setCardList }) {
    const closeModal = () => {
        setModalShowing(ModalShowing.NONE);
    }

    return (
        <Dialog open={isModalOpen(modalShowing, locationName)}
            slotProps={{
                paper: {
                    sx: {
                        width: "90vw",
                        maxWidth: "none"
                    }
                }
            }} >

            <DialogTitle> View/Reorder the cards in {locationName} </DialogTitle>

            <DialogContent sx={{ overflow: "hidden" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <p>Bottom of {locationName}</p>
                    <div>
                        <h3 style={{ textDecoration: "underline", fontWeight: "bold", display: "inline", marginRight: "10px" }}>
                            Reorder {locationName}
                        </h3>
                        <span>({cardList.length} cards)</span>
                    </div>
                    <p>Top of {locationName}</p>
                </div>
                <CardListDisplay locationName={locationName} cardList={cardList} setCardList={setCardList} />
            </DialogContent>

            <DialogActions>
                <button onClick={closeModal} className="btn close-btn">Close</button>
            </DialogActions>

        </Dialog>
    );
}



/**
 * Tells if the modal should be open or not. This determanation is made by comparing the modal that 
 * should be showing and the location that this modal represents.
 * @param {ModalShowing} modalShowing - An Enum telling which modal is supposed to be visible.
 * @param {CardLocation} locationName - Enum telling which card location the modal represents (discard pile or deck).
 * @returns true if this modal should be visible and fale otherwise.
 */
function isModalOpen(modalShowing, locationName) {
    if (locationName === CardLocations.Deck) {
        return modalShowing === ModalShowing.REORDER_DECK;
    }

    if (locationName === CardLocations.DiscardPile) {
        return modalShowing === ModalShowing.REORDER_DISCARD;
    }


    throw new Error("There is no modal for the card location " + locationName);
}
