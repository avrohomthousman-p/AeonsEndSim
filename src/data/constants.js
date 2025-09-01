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
    REORDER_DESTROYED: "reorder_destroyed",
    ADD_NEW_CARDS: "add_new_cards",
};



/**
 * Enum for the different kinds of breaches that exist. A character who 
 * is missing a breach has type NONE.
 */
export const BreachType = {
    REGULAR: "REGULAR",
    NONE: "NONE",
    ANCIENT: "ANCIENT", //Special breach for character Gygar
    REMNENT: "REMNENT", //Special breach for character Remnent
    CELESTIAL: "CELESTIAL", //Special breach for character Sahala
    DEFENDER: "DEFENDER", //Special breach for character Taqren
    //TODO: add special breaches for the characters that have them
};



/**
 * Gets the proper filename for a breach image url.
 * @param {BreachType} breachType - enum value deciding what kind of breach is being displayed.
 * @param {boolean} isOpen - Tells if should use the breach image that is open or not.
 * @param {number} breachNumber - Which breach is being displayed (tier 1-4). This argument is 
 *              only required when BreachType is regular or none.
 * @returns The filename of the image url: As is `${BASE_URL}breaches/${filename}.
 */
export function GetBreachFileName(breachType, isOpen, breachNumber) {
    const open = (isOpen ? "open" : "closed");

    switch (breachType) {
        case BreachType.REGULAR:
            return `breach${breachNumber}-${open}.webp`;
        case BreachType.NONE:
            return null;
        case BreachType.ANCIENT:
            return "ancient-breach-open.webp"
        case BreachType.REMNENT:
            return `remnant-breach-${open}.webp`;
        case BreachType.CELESTIAL:
            return `celestial-breach-${open}.webp`;
        case BreachType.DEFENDER:
            return `defender-breach-${open}.webp`;
        default:
            throw new Error("invalid breach type: " + breachType);
    }
}


/**
 * A standard 7 cards to include in the market regaurdless of player. You should
 * add each players topCards to this list before using it.
 */
export const StandardMarket = Object.freeze([
    { label: "Clouded Sapphire", value: "Clouded_Sapphire" },
    { label: "Scoria Slag", value: "Scoria_Slag" },
    { label: "V'riswood Amber", value: "V'riswood_Amber" },
    { label: "Bottled Vortex", value: "Bottled_Vortex" },
    { label: "Unstable Prism", value: "Unstable_Prism" },
    { label: "Spectral Echo", value: "Spectral_Echo" },
    { label: "Conjure the Lost", value: "Conjure_the_Lost" },
]);


/**
 * The charge slots displayed on charcter mats are displayed in slightly different places
 * when there are more or fewer charge slots. As such, for the charges to be aligned 
 * correctly, they need dynamic CSS that offsets them from the player mat based on the
 * number of charges.
 * @param {number} numCharges - The maximum number of charges the character can have (number of charge slots).
 * @returns A style that can be applied to the charge image to align it with the charge slots.
 */
export function GetChargeTrackPosition(numCharges) {
    switch (numCharges) {
        case 4:
            return { left: "55%" };
        case 5:
            return { left: "51%" };
        case 6:
            return { left: "48%" }
        default:
            throw new Error("Invalid number of charges");
    }
}

