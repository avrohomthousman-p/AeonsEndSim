import { useDrop } from "react-dnd";
import { DraggableCardType } from "../data/constants"


/**
 * Executes the onDragTo fucntion when a DraggableCard is dragged to this component.
 * Used as a signal for if the card is being dragged to hand or somewhere else.
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