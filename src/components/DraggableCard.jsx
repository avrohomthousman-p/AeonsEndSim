import { useDrag } from 'react-dnd';
import { BASE_URL, DraggableCardType } from '../data/constants'


/**
 * Represents a card in hand, that can be moved out of your hand
 * or to another place in your hand.
 * @param {string} the name of the card that can be dragged.
 * @param {number} where the card is (by index) in the source list.
 * @param {string[]} a reference to the list of cards that this card is in.
 * @param {function} setter for setting the card sorce list. 
 */
export default function DraggableCard({ cardName, cardPosition, cardSrcList, setCardSrcList }) {
    const [{ isDragging }, dragRef] = useDrag({
        type: DraggableCardType,
        item: { 
            "cardName": cardName,
            "cardPosition": cardPosition,
            "cardSrcList": cardSrcList,
            "setCardSrcList": setCardSrcList,
        },
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