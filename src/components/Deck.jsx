import { useCallback, useRef } from "react";
import { BASE_URL, CardLocations } from "../data/constants";
import CardDropZone from "./CardDropZone";
import { HandleCardDropOntoPile } from "../components/CardDropHandlers";
import DraggableCard from "../components/DraggableCard";
import { Tooltip } from "react-tooltip";


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
            <img 
                src={"/refresh.webp"} 
                data-tooltip-id="deck-tooltip"
                data-tooltip-content="Double Click to move discard pile into deck"
                data-tooltip-place="top"
                onDoubleClick={resetDeck} 
                className="card-image" 
                alt="deck" 
                width="100%" />
        );
    }
    else {
        deckImage = (
            <div 
                data-tooltip-id="deck-tooltip"
                data-tooltip-content="Click to draw a card"
                data-tooltip-place="right"
                onClick={drawCard}>

                <DraggableCard
                    cardName={cardsInDeck.at(-1)}
                    cardPosition={cardsInDeck.length - 1}
                    locationName={CardLocations.Deck}
                    cardSrcList={cardsInDeck}
                    setCardSrcList={setCardsInDeck}
                    altImageUrl={BASE_URL + "other/cardBack.webp"} />
            </div>
        );
    }


    return (
        <div style={{ display: "inline-block" }}>
            <p>{cardsInDeck.length} card{cardsInDeck.length === 1 ? "" : "s"}</p>
            <Tooltip id="deck-tooltip" />
            <CardDropZone cardDropHandler={onDropHandler} >
                {deckImage}
            </CardDropZone>
        </div>
    )
}
