import { useDrag } from 'react-dnd';
import { BASE_URL, DraggableCardType } from '../data/constants'


/**
 * Represents a card in hand.
 */
export default function DraggableCard({ cardName }) {
    const [{ isDragging }, dragRef] = useDrag({
        type: DraggableCardType,
        item: { cardName },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <img
            ref={dragRef}
            src={BASE_URL + "cards/" + cardName + ".webp"}
            alt={cardName}
            style={{ 
                margin: "5px 10px",
                opacity: isDragging ? 0.5 : 1,
                cursor: "grab",
            }}
        />
    )
}