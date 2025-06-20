export const BASE_URL = "https://storage.googleapis.com/aeons-end-pics/";

export const DraggableCardType = "draggableCard"


/**
 * All Places cards could be kept on the screen.
 */
export const CardLocations = {
    Hand: "Hand",
    Deck: "Deck",
    DiscardPile: "Discard Pile",
    DestroyedPile: "Destroyed Pile",
    Breach1: "Breach 1",
    Breach2: "Breach 2",
    Breach3: "Breach 3",
    Breach4: "Breach 4",
}


/**
 * An enum representing the different kinds of modals that could be displayed.
 */
export const ModalShowing = {
    NONE: "none",
    REORDER_DECK: "reorder_deck",
    REORDER_DISCARD: "reorder_discard",
    ADD_NEW_CARDS: "add_new_cards",
};



/**
 * Enum for the different kinds of breaches that exist. A character who 
 * is missing a breach has type NONE.
 */
export const BreachType = {
    REGULAR: "REGULAR",
    NONE: "NONE",
    //TODO: add special breaches for the characters that have them
};

