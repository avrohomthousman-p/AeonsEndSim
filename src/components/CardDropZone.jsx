import "./CardDropZone.css"
import { useDrop } from 'react-dnd';
import { DraggableCardType } from '../data/constants';


/**
 * Component that you can drop a draggable card into, to move it to a specific position 
 * within a list of cards (like your hand or discard pile).
 * @param {Component} (optional) The children components you want inside the drop-zone.
 * @param {Object} an object with a onDropCard function (and all the data it needs) that 
 *      can be used to handle the cardDrop.
 * @param {string} an extra class used to decide what styling to use for the component.
 * @param {string} the id of the element you want to handle click events on this element.
 *                  leave null if you dont want this done.
 * @returns a component that you can drop a card into.
 */
export default function CardDropZone({ children, cardDropHandler, stylingClass = "", underlyingElementID = null }) {
    const [{ isOver }, dropRef] = useDrop({
        accept: DraggableCardType,
        drop: (draggedItem) => {
            cardDropHandler.onCardDrop(draggedItem);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });


    /**
     * When a CardDropZone is placed on top of a breach, the click event and context menu
     * event get caught by the CardDropZone and not the breach. This function forwards
     * the event to the breach so the event can be handled properly.
     */
    const fowardEvent = (e) => {
        if (underlyingElementID == null)
            return


        e.stopPropagation();
        e.preventDefault();


        const target = document.getElementById(underlyingElementID);
        const simulatedEvent = new MouseEvent(e.type, {
            bubbles: true,
            cancelable: true,
            clientX: e.clientX,
            clientY: e.clientY,
            button: e.button,
            buttons: e.buttons,
            ctrlKey: e.ctrlKey,
            shiftKey: e.shiftKey,
            altKey: e.altKey,
            metaKey: e.metaKey,
        });

        target.dispatchEvent(simulatedEvent);
    }


    return (
        <div
            ref={dropRef}
            className={`drop-zone ${isOver ? "hovered" : ""} ${stylingClass}`}
            onClick={fowardEvent}
            onContextMenu={fowardEvent} >


            {children || <span>&nbsp;</span>}
        </div>
    )
}
