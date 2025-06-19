import { useDrop } from "react-dnd";
import { DraggableCardType } from "../data/constants"


/**
 * Component that detects when a draggable card is being dragged (not dropped) over it,
 * and excecutes special code when that happens. Use to set up a triggered event that 
 * happens only when you drag a card to a certain place.
 * 
 * @param {Component} children - The componenet to be displayed inside this component as a direct child.
 * @param {function} onDragTo - A function to excecute when a draggable card is dragged over this componenet.
 * 
 */
export default function DragToDetector({ children, onDragTo }){
    const [{ item }, dropRef] = useDrop({
        accept: DraggableCardType,
        collect: (monitor) => ({
            item: monitor.getItem(),
        }),
        hover: (item, monitor) => {
            const hand = document.getElementById("hand");
            const clientOffset = monitor.getClientOffset();
            if (!clientOffset || !hand) return;

            onDragTo();
        },
    });


    return (
        <div ref={dropRef}>
            {children}
        </div>
    )
}