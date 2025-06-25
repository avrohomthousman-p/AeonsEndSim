/**
 * @fileoverview This file contains utility functions for operations involving the player's hand.
 * This does not include cards bing dragged/dropped to and from the players hand, as that is handled
 * by CardDropHandlers.js
 */


"use-strict"
import { NORMAL_HAND_SIZE } from "../data/constants";



/**
 * Draws {NORMAL_HAND_SIZE} new cards if the users hand is empty. Otherwise does nothing.
 */
export function drawNewHand(cardsInHand, setCardsInHand, cardsInDeck, setCardsInDeck, cardsInDiscard, setCardsInDiscard) {
    if (cardsInHand.length > 0)
        return;

    const deckSize = cardsInDeck.length;

    //Draw cards from the deck
    let startIndex = Math.max(0, deckSize - NORMAL_HAND_SIZE);
    let endIndex = deckSize;
    let cardsDrawn = cardsInDeck.slice(startIndex, endIndex);

    if (cardsDrawn.length < NORMAL_HAND_SIZE) {
        //Draw remaining cards from discard pile, and reset the deck.
        const additionalCardsNeeded = Math.min(NORMAL_HAND_SIZE - cardsDrawn.length, cardsInDiscard.length);
        let cardsDrawnFromDiscard = cardsInDiscard.slice(0, additionalCardsNeeded);
        let cardsLeftInDiscard = cardsInDiscard.slice(additionalCardsNeeded, cardsInDiscard.length);

        cardsDrawn = [...cardsDrawn, ...cardsDrawnFromDiscard];
        setCardsInDeck(cardsLeftInDiscard);
        setCardsInDiscard([]);
    }
    else {
        //Remove drawn cards from deck
        setCardsInDeck(prev => prev.slice(0, startIndex));
    }


    setCardsInHand(cardsDrawn.reverse());
}



export function discardHand(cardsInHand, setCardsInHand, setCardsInDiscard) {
    setCardsInDiscard(prev => [...prev, ...cardsInHand.reverse()]);
    setCardsInHand([]);
}

