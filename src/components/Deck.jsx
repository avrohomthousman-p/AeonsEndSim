import { useState } from "react"
import { BASE_URL } from "../data/constants"
import CardDropZone from "./CardDropZone";
import { HandleCardDropOntoPile } from '../components/CardDropHandlers'


export default function Deck({ characterData }) {
    const [cardsInDeck, setCardsInDeck] = useState(characterData.startingDeck);

    const onDropHandler = new HandleCardDropOntoPile(cardsInDeck, setCardsInDeck, true);

    return (
        <div style={{ display: "inline-block", width: "12%" }}>
            <p>{cardsInDeck.length} card{cardsInDeck.length === 1 ? "" : "s"}</p>
            <CardDropZone cardDropHandler={onDropHandler} stylingClass="card-pile" >
                <img src={BASE_URL + "cards/cardBack.webp"} alt="deck" width="100%" />
            </CardDropZone>
        </div>
    )
}