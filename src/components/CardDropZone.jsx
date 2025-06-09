import "./CardDropZone.css"
import { useDrop } from 'react-dnd';
import { DraggableCardType } from '../data/constants';


/**
 * Component that you can drop a card into, to put it in your hand (in a specific position).
 * @param {number} the position in hand that a card would go if it were dropped into this.
 * @param {string[]} a list of the card names currently in hand.
 * @param {function} setter for changing the cards in hand.
 * @returns a component that you can drop a card into.
 */
export default function CardDropZone({ positionNumber, cardsInHand, setCardsInHand }) {
    const handleItemDropped = (draggedItem) => {
        if(positionNumber === draggedItem.cardPosition)
            return;

        //if user moved a card to the dropZone immediately after it
        if(positionNumber === draggedItem.cardPosition + 1)
            return;
        if(isSilentChange(draggedItem))
            return;
            

        //TODO: change the order of cards in hand
        console.log("Need to reorder hand");
    }



    /**
     * Checks if moving the card would visibly change the array or not. 
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
    const isSilentChange = (draggedItem) => {
        const startIndex = Math.min(positionNumber, draggedItem.cardPosition);
        const endIndex = Math.max(positionNumber - 1, draggedItem.cardPosition);

        for (let i = startIndex; i <= endIndex; i++){
            if(cardsInHand[i] !== draggedItem.cardName){
                return false;
            }
        }

        return true;
    }




    const [{ isOver }, dropRef] = useDrop({
        accept: DraggableCardType,
        drop: handleItemDropped,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });



    return (
        <div
            ref={dropRef}
            className={`drop-zone ${isOver ? "hovered" : ""}`}>
 
        </div>
    )
}