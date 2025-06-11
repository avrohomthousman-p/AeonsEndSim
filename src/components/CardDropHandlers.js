"use strict";


/**
 * Handles cards dragged and dropped to a specific position within a list, either 
 * from a different list or from the same list.
 * 
 * Lists can be the hand, or the discard pile/deck only when viewed in the popup.
 * 
 * This is built for an interface with each card on display and a drop slot 
 * between each card. This object is configured for a specific slot which
 * is the destinationIndex.
 */
export class HandleCardDropIntoList {
    constructor(destinationName, destinationIndex, destinationList, setDestinationList) {
        this.destinationName = destinationName;
        this.destinationIndex = destinationIndex;
        this.destinationList = destinationList;
        this.setDestinationList = setDestinationList;
    }


    onCardDrop(droppedItem) {
        //If the card is being dragged from a different list, 
        //not just being around moved with one list
        if (this.destinationName !== droppedItem.locationName){
            this.moveCardsBetweenLists(droppedItem);
            return;
        }


        if (this.destinationIndex === droppedItem.cardPosition)
            return;

        //if user moved a card to the dropZone immediately after it
        if (this.destinationIndex === droppedItem.cardPosition + 1)
            return;
        if (this.isSilentChange(droppedItem))
            return;


        this.reorderCardsWithinList(droppedItem);
    }


    /**
     * Handles state updates when moving a card from one list to another.
     * Not intended for use when moving cards around within a single list.
     * @param {Object.<string, any>} the card item being dropped.
     */
    moveCardsBetweenLists(droppedItem){
        //Remove from src list
        let srcCopy = [...droppedItem.cardSrcList];
        srcCopy.splice(droppedItem.cardPosition, 1);
        droppedItem.setCardSrcList(srcCopy);


        //Insert into dest list
        let destCopy = [...this.destinationList];
        destCopy.splice(this.destinationIndex, 0, droppedItem.cardName);
        this.setDestinationList(destCopy);
    }



    /**
    * Checks if moving the card within one list would visibly change the array or not. 
    * (not intended for use when moving card from one list to another)
    * 
    * E.g. [Crystal, Crystal, Crystal, Crystal, Spark] 
    * moving cards 0-3 to any position other than 4 would be a silent
    * change becuase, even thought it technically changed, there are 
    * still 4 Crystals in a row and array still looks the same.
    * 
    * @param {Object.<string, any>} the card that is being moved to this position.
    * @returns true if moving the card will not result in the array changing, and
    *      false otherwise.
    */
    isSilentChange(draggedItem) {
        const startIndex = Math.min(this.destinationIndex, draggedItem.cardPosition);
        const endIndex = Math.max(this.destinationIndex - 1, draggedItem.cardPosition);

        for (let i = startIndex; i <= endIndex; i++) {
            if (draggedItem.cardSrcList[i] !== draggedItem.cardName) {
                return false;
            }
        }

        return true;
    }



    /**
     * Changes the order of the cards in the card list to match which card the user dropped and where.
     * Use only when moving cards around within one list, and not for moving between 2 lists.
     *  
     * @param {Object.<string, any>} the data about the card that was dropped on this drop zone.
     */
    reorderCardsWithinList(draggedItem) {
        let src = draggedItem.cardPosition;
        let dest = this.destinationIndex;
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
    constructor(destinationName, setCardDestList){
        this.destinationName = destinationName;
        this.setCardDestList = setCardDestList;
    }

    onCardDrop(droppedItem) {
        if (droppedItem.locationName === this.destinationName){
            return;
        }


        //remove card from src
        droppedItem.setCardSrcList(prev => {
            let copyOfSrcList = [...prev];
            copyOfSrcList.splice(droppedItem.cardPosition, 1);
            return copyOfSrcList;
        });


        //put card into of dest
        this.setCardDestList(prev => [...prev, droppedItem.cardName]);
    }
}