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
    const [{ isOver }, dropRef] = useDrop({
        accept: DraggableCardType,
        drop: (draggedItem) => {
            handleItemDropped(positionNumber, draggedItem, cardsInHand, setCardsInHand)
        },
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


function handleItemDropped(positionNumber, draggedItem, cardsInHand, setCardsInHand) {
    if (positionNumber === draggedItem.cardPosition)
        return;

    //if user moved a card to the dropZone immediately after it
    if (positionNumber === draggedItem.cardPosition + 1)
        return;
    if (isSilentChange(positionNumber, draggedItem, cardsInHand))
        return;


    reorderCards(positionNumber, draggedItem, cardsInHand, setCardsInHand);
}



/**
 * Checks if moving the card would visibly change the array or not. 
 * 
 * E.g. [Crystal, Crystal, Crystal, Crystal, Spark] 
 * moving cards 0-3 to any position other than 4 would be a silent
 * change becuase, even thought it technically changed, there are 
 * still 4 Crystals in a row and array still looks the same.
 * 
 * @param {number} the card position this drop zone represents (i.e. which card in hand).
 * @param {Object.<string, any>} the card that is being moved to this position.
 * @param {string[]} the names of the cards currently in hand.
 * @returns true if moving the card will not result in the array changing, and
 *      false otherwise.
 */
function isSilentChange(positionNumber, draggedItem, cardsInHand) {
    const startIndex = Math.min(positionNumber, draggedItem.cardPosition);
    const endIndex = Math.max(positionNumber - 1, draggedItem.cardPosition);

    for (let i = startIndex; i <= endIndex; i++) {
        if (cardsInHand[i] !== draggedItem.cardName) {
            return false;
        }
    }

    return true;
}



/**
 * Changes the order of the cards in hand to match which card the user dropped and where.
 * @param {number} the card position this drop zone represents (i.e. which card in hand). 
 * @param {Object.<string, any>} the data about the card that was dropped on this drop zone.
 * @param {string[]} a list of cards in hand before the change was applied.
 * @param {function} a state setter for changing the cards in hand.
 */
function reorderCards(positionNumber, draggedItem, cardsInHand, setCardsInHand) {
    let src = draggedItem.cardPosition;
    let dest = positionNumber;
    if (dest > src) {
        dest--;
    }

    //Move from src to dest
    let copy = [...cardsInHand];
    copy.splice(src, 1);                            //remove card at src
    copy.splice(dest, 0, draggedItem.cardName);     //insert card into dest;
    setCardsInHand(copy);
}
