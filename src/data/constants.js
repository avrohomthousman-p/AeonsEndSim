export const BASE_URL = "https://storage.googleapis.com/aeons-end-pics/";

export const NORMAL_HAND_SIZE = 5; //number of cards drawn at end of turn

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


/**
 * The charge slots displayed on charcter mats are displayed in slightly different places
 * when there are more or fewer charge slots. As such, for the charges to be aligned 
 * correctly, they need dynamic CSS that offsets them from the player mat based on the
 * number of charges.
 * @param {number} numCharges - The maximum number of charges the character can have (number of charge slots).
 * @returns A style that can be applied to the charge image to align it with the charge slots.
 */
export function GetChargeTrackPosition(numCharges){
    switch(numCharges){
        case 4:
            return {left: "55%"};
        case 5:
            return {left: "51%"};
        case 6:
            return {left: "48%"}
        default:
            throw new Error("Invalid number of charges");
    }
}

