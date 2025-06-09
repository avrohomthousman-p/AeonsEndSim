import "./CardDropZone.css"
import { useDrop } from 'react-dnd';
import { DraggableCardType } from '../data/constants';


/**
 * Component that you can drop a draggable card into, to move it to a specific position 
 * within a list of cards (like your hand or discard pile).
 * @param {number} the position in hand that a card would go if it were dropped into this.
 * @param {string[]} a list of the card names currently in a place like your hand, deck, or discard pile.
 * @param {function} setter for changing the cards in the list.
 * @returns a component that you can drop a card into.
 */
export default function CardDropZone({ positionNumber, cardsList, setCardsList }) {
    const [{ isOver }, dropRef] = useDrop({
        accept: DraggableCardType,
        drop: (draggedItem) => {
            handleItemDropped(positionNumber, draggedItem, cardsList, setCardsList)
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


function handleItemDropped(positionNumber, draggedItem, cardsList, setCardsList) {
    if (positionNumber === draggedItem.cardPosition)
        return;

    //if user moved a card to the dropZone immediately after it
    if (positionNumber === draggedItem.cardPosition + 1)
        return;
    if (isSilentChange(positionNumber, draggedItem, cardsList))
        return;


    reorderCards(positionNumber, draggedItem, cardsList, setCardsList);
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
function isSilentChange(positionNumber, draggedItem, cardsList) {
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
function reorderCards(positionNumber, draggedItem, cardsList, setCardsList) {
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
