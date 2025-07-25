import { useDrag } from "react-dnd";

import { BASE_URL, DraggableCardType } from "../data/constants"


/**
 * Represents a card in hand, that can be moved out of your hand
 * or to another place in your hand.
 * @param {string} cardName - The name of the card that can be dragged.
 * @param {number} cardPosition - Where the card is (by index) in the source list.
 * @param {CardLocations} locationName - A constant that tells the component what source location it represents.
 * @param {string[]} cardSrcList - A reference to the list of cards that this card is in.
 * @param {function} setCardSrcList - Setter for setting the card sorce list. 
 * @param {optional - string} altImageUrl - The url for the image to be displayed. If not provided, uses
 *                          BASE_URL + "cards/[cardName].webp" instead.
 */
export default function DraggableCard({ cardName, cardPosition, locationName, cardSrcList, setCardSrcList, altImageUrl=null }) {
    const [{ isDragging }, dragRef] = useDrag({
        type: DraggableCardType,
        item: { 
            "cardName": cardName,
            "cardPosition": cardPosition,
            "locationName": locationName,
            "cardSrcList": cardSrcList,
            "setCardSrcList": setCardSrcList,
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });


    const url = altImageUrl || BASE_URL + "cards/" + cardName + ".webp";

    return (
        <img
            ref={dragRef}
            src={url}
            alt={cardName}
            className="card-image"
            style={{ 
                width: "175px",
                height: "auto",
                margin: "5px 10px",
                opacity: isDragging ? 0.5 : 1,
                cursor: "grab",
            }}
        />
    )
}