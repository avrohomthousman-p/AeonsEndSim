
import { BASE_URL } from '../data/constants'

/**
 * Represents a card in hand.
 */
export default function Card({ cardName, cardNumber }) {
    return (
        <img
            key={cardNumber}
            src={BASE_URL + "cards/" + cardName + ".webp"}
            alt={cardName}
            style={{ margin: "5px 10px" }}
        />
    )
}