import { useDrag } from 'react-dnd';
import { BASE_URL } from '../data/constants'

/**
 * Represents a card in hand.
 */
export default function DraggableCard({ cardName }) {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'DraggableCard',
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