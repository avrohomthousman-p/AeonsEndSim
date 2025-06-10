"use strict";


/**
 * Handles cards dragged and dropped from one positioninf a list to another 
 * position in the same list.
 * 
 * The list can be the hand, or the discard pile/deck only when viewed in the popup.
 * 
 * This is built for an interface with each card on display and a drop slot 
 * between each card. This object is configured for a specific slot which
 * is the destinationIndex.
 */
export class HandleMoveCardWithinList {
    constructor(destinationIndex) {
        this.destinationIndex = destinationIndex;
    }


    onCardDrop(droppedItem) {
        if (this.destinationIndex === droppedItem.cardPosition)
            return;

        //if user moved a card to the dropZone immediately after it
        if (this.destinationIndex === droppedItem.cardPosition + 1)
            return;
        if (this.isSilentChange(this.destinationIndex, droppedItem))
            return;


        this.reorderCards(this.destinationIndex, droppedItem);
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
    isSilentChange(positionNumber, draggedItem) {
        const startIndex = Math.min(positionNumber, draggedItem.cardPosition);
        const endIndex = Math.max(positionNumber - 1, draggedItem.cardPosition);

        for (let i = startIndex; i <= endIndex; i++) {
            if (draggedItem.cardSrcList[i] !== draggedItem.cardName) {
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
    reorderCards(positionNumber, draggedItem) {
        let src = draggedItem.cardPosition;
        let dest = positionNumber;
        if (dest > src) {
            dest--;
        }

        //Move from src to dest
        let copy = [...draggedItem.cardSrcList];
        copy.splice(src, 1);                            //remove card at src
        copy.splice(dest, 0, draggedItem.cardName);     //insert card into dest;
        draggedItem.setCardSrcList(copy);
    }
}



/**
 * Handles dragging cards from one card list to another (like from 
 * hand to discard pile). The card moved is placed on the top of 
 * the pile.
 * 
 * Adding a card to anywhere other than the top is not supported.
 */
export class HandleCardDropOntoPile {
    constructor(cardDestList, setCardDestList){
        this.cardDestList = cardDestList;
        this.setCardDestList = setCardDestList;
    }

    onCardDrop(droppedItem) {
        //remove card from src
        let copyOfSrcList = [...droppedItem.cardSrcList];
        copyOfSrcList.splice(droppedItem.cardPosition, 1);
        droppedItem.setCardSrcList(copyOfSrcList);


        //put card into of dest
        let copyOfDestList = [...this.cardDestList, droppedItem.cardName];
        this.setCardDestList(copyOfDestList);
    }
}