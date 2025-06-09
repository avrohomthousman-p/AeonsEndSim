"use strict";


/**
 * Handles cards dropped into a specific position of an ordered list of cards, 
 * like the hand (or the discard pile/deck only when viewed in the popup).
 * 
 * This is built for an interface with each card on display and a drop slot 
 * between each card. This object is configured for a specific slot which
 * is the destinationIndex.
 */
export class HandleCardDropIntoList {
    constructor(cardsList, setCardsList, destinationIndex) {
        this.cardsList = cardsList;
        this.setCardsList = setCardsList;
        this.destinationIndex = destinationIndex;
    }


    onCardDrop(droppedItem) {
        if (this.destinationIndex === droppedItem.cardPosition)
            return;

        //if user moved a card to the dropZone immediately after it
        if (this.destinationIndex === droppedItem.cardPosition + 1)
            return;
        if (this.isSilentChange(this.destinationIndex, droppedItem, this.cardsList))
            return;


        this.reorderCards(this.destinationIndex, droppedItem, this.cardsList, this.setCardsList);
    }


    /**
    * Checks if moving the card would visibly change the array or not. 
    * 
    * E.g. [Crystal, Crystal, Crystal, Crystal, Spark] 
    * moving cards 0-3 to any position other than 4 would be a silent
    * change becuase, even thought it technically changed, there are 
    * still 4 Crystals in a row and array still looks the same.
    * 
    * @param {number} the card position this drop zone represents (i.e. which card in hand/deck/etc).
    * @param {Object.<string, any>} the card that is being moved to this position.
    * @param {string[]} the names of the cards currently in hand/deck/etc.
    * @returns true if moving the card will not result in the array changing, and
    *      false otherwise.
    */
    isSilentChange(positionNumber, draggedItem, cardsList) {
        const startIndex = Math.min(positionNumber, draggedItem.cardPosition);
        const endIndex = Math.max(positionNumber - 1, draggedItem.cardPosition);

        for (let i = startIndex; i <= endIndex; i++) {
            if (cardsList[i] !== draggedItem.cardName) {
                return false;
            }
        }

        return true;
    }



    /**
     * Changes the order of the cards in the card list to match which card the user dropped and where.
     * @param {number} the card position this drop zone represents (i.e. which card in hand). 
     * @param {Object.<string, any>} the data about the card that was dropped on this drop zone.
     * @param {string[]} a list of cards in hand/deck/discard pile before the change was applied.
     * @param {function} a state setter for changing the card list.
     */
    reorderCards(positionNumber, draggedItem, cardsList, setCardsList) {
        let src = draggedItem.cardPosition;
        let dest = positionNumber;
        if (dest > src) {
            dest--;
        }

        //Move from src to dest
        let copy = [...cardsList];
        copy.splice(src, 1);                            //remove card at src
        copy.splice(dest, 0, draggedItem.cardName);     //insert card into dest;
        setCardsList(copy);
    }

}



/**
 * Handles cards dropped onto things like the discard pile or deck, 
 * by putting the card on the top of the pile.
 */
export class HandleCardDropOntoPile {
    constructor(cardSrcList, setCardSrcList, cardDestList, setCardDestList){
        this.cardSrcList = cardSrcList;
        this.setCardSrcList = setCardSrcList;
        this.cardDestList = cardDestList;
        this.setCardDestList = setCardDestList;
    }

    onCardDrop(droppedItem) {
        //remove card from src
        let copyOfSrcList = [...this.cardSrcList];
        copyOfSrcList.splice(droppedItem.cardPosition, 1);
        this.setCardSrcList(copyOfSrcList);


        //put card into of dest
        let copyOfDestList = [droppedItem.cardName, ...this.cardDestList];
        this.setCardDestList(copyOfDestList);
    }
}