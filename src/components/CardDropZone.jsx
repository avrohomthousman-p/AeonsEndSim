import "./CardDropZone.css"
import { useDrop } from 'react-dnd';
import { DraggableCardType } from '../data/constants';


/**
 * Component that you can drop a draggable card into, to move it to a specific position 
 * within a list of cards (like your hand or discard pile).
 * @param {Object} an object with a onDropCard function (and all the data it needs) that 
 *      can be used to handle the cardDrop.
 * @returns a component that you can drop a card into.
 */
export default function CardDropZone({ cardDropHandler }) {
    const [{ isOver }, dropRef] = useDrop({
        accept: DraggableCardType,
        drop: (draggedItem) => {
            cardDropHandler.onCardDrop(draggedItem);
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
