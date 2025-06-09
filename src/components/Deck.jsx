import { useState } from "react"
import { BASE_URL } from "../data/constants"


export default function Deck({ characterData }) {
    const [cardsInDeck, setCardsInDeck] = useState(characterData.startingDeck);

    //TODO: make this a droppable area
    return (
        <div style={{ display: "inline-block", width: "12%" }}>
            <p>{cardsInDeck.length} card{cardsInDeck.length === 1 ? "" : "s"}</p>
            <img src={BASE_URL + "cards/cardBack.webp"} alt="deck" width="100%" />
        </div>
    )
}