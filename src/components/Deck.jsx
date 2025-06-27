import Tooltip from "@mui/material/Tooltip";
import { useCallback, useRef } from "react";

import DraggableCard from "../components/DraggableCard";
import { BASE_URL, CardLocations } from "../data/constants";
import { HandleCardDropOntoPile } from "../utils/CardDropHandlers";
import CardDropZone from "./CardDropZone";


/**
 * Componenet representing the dack (draw pile) in the game.
 * @param {string[]} cardsInDeck - An array of cards in the deck (last index is top of the deck).
 * @param {function} setCardsInDeck - A setter function for modifying the deck contennts.
 * @param {function} setCardsInHand - A setter function for modifying the hand contents.
 * @param {string[]} cardsInDiscard - An array of cards in the discard pile (last index is the top of the pile).
 * @param {function} setCardsInDiscard - A setter function for modifying the discard pile contents
 */
export default function Deck({ cardsInDeck, setCardsInDeck, setCardsInHand, cardsInDiscard, setCardsInDiscard }) {
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
                const drawnCard = cardRef.current;
                setCardsInHand(prevHand => [...prevHand, drawnCard]);
                cardRef.current = null;
            }
        });


    }, [setCardsInDeck, setCardsInHand]);


    const resetDeck = useCallback(() => {
        if (cardsInDeck.length > 0 || cardsInDiscard.length === 0)
            return;


        let cardsToTransfer = [];
        setCardsInDiscard(prev => {
            cardsToTransfer = [...prev].reverse();
            return [];
        });


        queueMicrotask(() => setCardsInDeck(prev => cardsToTransfer));
    }, [cardsInDeck, setCardsInDeck, cardsInDiscard, setCardsInDiscard]);



    let deckImage;
    if (cardsInDeck.length === 0) {
        deckImage = (
            <Tooltip title="Double click to refill deck" placement="right" arrow>
                <img
                    src={"/refresh.webp"}
                    onDoubleClick={resetDeck}
                    className="card-image"
                    alt="deck"
                    width="100%" />
            </Tooltip>
        );
    }
    else {
        deckImage = (
            <Tooltip title="Click to draw" placement="right" arrow>
                <div onClick={drawCard}>
                    <DraggableCard
                        cardName={cardsInDeck.at(-1)}
                        cardPosition={cardsInDeck.length - 1}
                        locationName={CardLocations.Deck}
                        cardSrcList={cardsInDeck}
                        setCardSrcList={setCardsInDeck}
                        altImageUrl={BASE_URL + "other/cardBack.webp"} />
                </div>
            </Tooltip>
        );
    }


    return (
        <div style={{ display: "inline-block" }}>
            <p>{cardsInDeck.length} card{cardsInDeck.length === 1 ? "" : "s"}</p>
            <CardDropZone cardDropHandler={onDropHandler} >
                {deckImage}
            </CardDropZone>
        </div>
    )
}
