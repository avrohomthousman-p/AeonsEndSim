import { BreachType } from "./constants";

/**
 * Stores static data about character setup. The breach orientation can only be a value from 0-4 (inclusive).
 * The number represents how many focuses it is away from opening. 0 means its already open, and 1 means 
 * focusing it once would open it. The same for 2, 3, and 4.
 */
export const CHARACTERS = Object.freeze({
    Kadir: Object.freeze({
        startingDeck: ["Spark", "Spark", "Crystal", "Crystal", "Crystal"],
        startingHand: ["Emerald_Shard", "Crystal", "Crystal", "Crystal", "Spark"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 180 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 180 },
        ],
    }),
    Adelheim: Object.freeze({
        startingDeck: ["Crystal", "Crystal", "Crystal", "Crystal", "Crystal"],
        startingHand: ["Amethyst_Shard", "Crystal", "Crystal", "Spark", "Spark"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 180 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 90 },
        ],
    }),
    Brama: Object.freeze({
        startingDeck: ["Spark", "Spark", "Crystal", "Crystal", "Crystal"],
        startingHand: ["Buried_Light", "Crystal", "Crystal", "Crystal", "Crystal"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 180 },
        ],
    }),
    Garu: Object.freeze({
        startingDeck: ["Spark", "Spark", "Crystal", "Crystal", "Crystal"],
        startingHand: ["Torch", "Crystal", "Crystal", "Crystal", "Spark"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 90 },
        ],
    }),
    Jian: Object.freeze({
        startingDeck: ["Spark", "Spark", "Crystal", "Crystal", "Crystal"],
        startingHand: ["Moonstone_Shard", "Crystal", "Crystal", "Spark", "Spark"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 90 },
        ],
    }),
    Lash: Object.freeze({
        startingDeck: ["Spark", "Spark", "Crystal", "Crystal", "Crystal"],
        startingHand: ["Quartz_Shard", "Crystal", "Crystal", "Crystal", "Spark"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 180 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 180 },
        ],
    }),
    Sparrow: Object.freeze({
        startingDeck: ["Crystal", "Crystal", "Crystal", "Crystal", "Crystal"],
        startingHand: ["Smolder", "Crystal", "Crystal", "Crystal", "Crystal"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.NONE, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 0 },
        ],
    }),
    Claudia: Object.freeze({
        startingDeck: ["Spark", "Crystal", "Crystal", "Crystal", "Crystal"],
        startingHand: ["Aetherscope", "Crystal", "Crystal", "Crystal", "Crystal"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.NONE, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 270 },
        ],
    }),
    Dezmodia: Object.freeze({
        startingDeck: ["Spark", "Crystal", "Crystal", "Crystal", "Crystal"],
        startingHand: ["Spark", "Spark", "Oblivion_Shard", "Crystal", "Crystal"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 180 },
        ],
    }),
    // TODO: more characters
});