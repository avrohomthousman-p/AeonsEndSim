/**
 * @fileoverview This file contains utility functions for operations involving the player's hand.
 * This does not include cards bing dragged/dropped to and from the players hand, as that is handled
 * by CardDropHandlers.js
 */


"use-strict"
import { NORMAL_HAND_SIZE } from "../data/constants";



/**
 * Draws a new hand following the standard rules of the game:
 * 
 * Draw until you have NORMAL_HAND_SIZE cards.
 * If the deck runs out, flip the discard pile into the deck and continue drawing.
 * If the deck and discard pile are both empty, draw as many cards as you can.
 */
export function drawNewHand(
    cardsInHand, setCardsInHand,
    cardsInDeck, setCardsInDeck,
    cardsInDiscard, setCardsInDiscard
) {
    let cardsNeeded = NORMAL_HAND_SIZE - cardsInHand.length;
    if (cardsNeeded <= 0)
        return;


    // Make local copies so we don't mutate React state until we are ready
    let deck = [...cardsInDeck];
    let discard = [...cardsInDiscard];
    let cardsDrawn = [];


    // 1. Draw from deck until it runs out or we reach NORMAL_HAND_SIZE cards
    while (cardsNeeded > 0 && deck.length > 0) {
        cardsDrawn.push(deck.pop()); // top of deck = last index
        cardsNeeded--;
    }


    // 2. If we still need cards, flip discard into deck
    if (deck.length === 0 &&cardsNeeded > 0 && discard.length > 0) {
        deck = discard.reverse(); // flip discard pile
        discard = [];

        while (cardsNeeded > 0 && deck.length > 0) {
            cardsDrawn.push(deck.pop());
            cardsNeeded--;
        }
    }


    // 3. Commit state updates
    setCardsInDeck(deck);
    setCardsInDiscard(discard);
    setCardsInHand(prev => [...prev, ...cardsDrawn]);
}



export function discardHand(cardsInHand, setCardsInHand, setCardsInDiscard) {
    setCardsInDiscard(prev => [...prev, ...cardsInHand.reverse()]);
    setCardsInHand([]);
}
