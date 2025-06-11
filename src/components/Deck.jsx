import { useState, useCallback, useRef } from "react"
import { BASE_URL, CardLocations } from "../data/constants"
import CardDropZone from "./CardDropZone";
import { HandleCardDropOntoPile } from "../components/CardDropHandlers"


export default function Deck({ characterData, setCardsInHand }) {
    const [cardsInDeck, setCardsInDeck] = useState(characterData.startingDeck);


    const onDropHandler = new HandleCardDropOntoPile(CardLocations.Deck, setCardsInDeck);


    const cardRef = useRef(null);

    const drawCard = useCallback(() => {
        setCardsInDeck(prevDeck => {
            if (prevDeck.length === 0) {
                cardRef.current = null;
                return prevDeck;
            }

            const newDeck = [...prevDeck];
            cardRef.current = newDeck.pop();

            return newDeck;
        });


        queueMicrotask(() => {
            if (cardRef.current) {
                setCardsInHand(prevHand => [...prevHand, cardRef.current]);
                cardRef.current = null;
            }
        });


    }, [setCardsInDeck, setCardsInHand]);


    return (
        <div style={{ display: "inline-block", width: "12%" }}>
            <p>{cardsInDeck.length} card{cardsInDeck.length === 1 ? "" : "s"}</p>
            <CardDropZone cardDropHandler={onDropHandler} stylingClass="card-pile" >
                <img src={BASE_URL + "cards/cardBack.webp"} onClick={drawCard} alt="deck" width="100%" />
            </CardDropZone>
        </div>
    )
}
