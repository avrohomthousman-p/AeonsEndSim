import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { useCallback, useRef } from "react";

import DraggableCard from "../components/DraggableCard";
import { BASE_URL, CardLocations, ModalShowing } from "../data/constants";
import { HandleCardDropOntoPile } from "../utils/CardDropHandlers";
import CardDropZone from "./CardDropZone";


/**
 * Componenet representing the dack (draw pile) in the game.
 * @param {string[]} cardsInDeck - An array of cards in the deck (last index is top of the deck).
 * @param {function} setCardsInDeck - A setter function for modifying the deck contennts.
 * @param {function} setCardsInHand - A setter function for modifying the hand contents.
 * @param {string[]} cardsInDiscard - An array of cards in the discard pile (last index is the top of the pile).
 * @param {function} setCardsInDiscard - A setter function for modifying the discard pile contents
 * @param {function} setModalShowing - A setter function for controlling what modal is showing (if any).
 */
export default function Deck({ cardsInDeck, setCardsInDeck, setCardsInHand, cardsInDiscard, setCardsInDiscard, setModalShowing }) {
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
    let deckActionButton;
    if (cardsInDeck.length === 0) {
        deckImage = <EmptyDeckImage resetDeck={resetDeck} />;
        deckActionButton = <ResetDeckButton resetDeck={resetDeck} />;
    }
    else {
        deckImage = <FullDeckImage drawCard={drawCard} cardsInDeck={cardsInDeck} setCardsInDeck={setCardsInDeck} />;
        deckActionButton = <ReorderDeckButton setModalShowing={setModalShowing} />;
    }


    return (
        <div style={{ display: "inline-block" }}>
            <p>{cardsInDeck.length} card{cardsInDeck.length === 1 ? "" : "s"}</p>
            <CardDropZone cardDropHandler={onDropHandler} >

                <div style={{ position: "relative", display: "inline-block" }}>
                    {deckActionButton}
                    {deckImage}
                </div>

            </CardDropZone>
        </div>
    )
}



/**
 * Displays the empty deck.
 * @param {function} resetDeck - A reference to the function used to reset the deck when it is empty. 
 */
function EmptyDeckImage({ resetDeck }) {
    return (
        <Tooltip title="Double click to refill deck" placement="right" arrow>
            <img
                src={"/refresh.webp"}
                onDoubleClick={resetDeck}
                className="card-image"
                alt="deck"
                width="100%" />
        </Tooltip>
    )
}



/**
 * Displays the deck.
 * 
 * @param {function} drawCard - A reference to the function used to draw a card from the deck.
 * @param {string[]} cardsInDeck - An array of cards in the deck (last index is top of the deck).
 * @param {function} setCardsInDeck - A setter function for modifying the deck contennts.
 */
function FullDeckImage({ drawCard, cardsInDeck, setCardsInDeck }) {
    return (
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
    )
}



/**
 * Renders an icon button used to reset the deck when it is empty.
 * 
 * This button should be rendered **inside a container with `position: relative`** 
 * to ensure correct absolute positioning in the top-right corner.
 * 
 * @param {Function} resetDeck - A reference to the function used to reset the deck when the icon is clicked.
 * @returns {JSX.Element} A styled MUI IconButton for resetting the deck.
 */
function ResetDeckButton({ resetDeck }) {
    return (
        <IconButton
            size="small"
            style={{ position: "absolute", top: 4, right: 4, zIndex: 10, backgroundColor: "rgba(106, 215, 239, 0.8)" }}
            onClick={resetDeck} >

            <LoopOutlinedIcon fontSize="small" />

        </IconButton>
    )
}



/**
 * Renders an icon button used to open a modal for viewing or reordering the deck.
 * 
 * This button should be rendered **inside a container with `position: relative`** 
 * to ensure correct absolute positioning in the top-right corner.
 * 
 * @param {Function} setModalShowing - Function used to make the deck modal visible when the icon is clicked.
 * @returns {JSX.Element} A styled MUI IconButton for viewing and reordering the deck.
 */
function ReorderDeckButton({ setModalShowing }) {
    return (
        <IconButton
            size="small"
            style={{ position: "absolute", top: 4, right: 4, zIndex: 10, backgroundColor: "rgba(106, 215, 239, 0.8)" }}
            onClick={() => setModalShowing(ModalShowing.REORDER_DECK)} >

            <VisibilityOutlinedIcon fontSize="small" />

        </IconButton>
    )
}
