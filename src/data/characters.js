import { BreachType } from "./constants";

/**
 * Stores static data about character setup. The breach orientation can only be a value from 0-4 (inclusive).
 * The number represents how many focuses it is away from opening. 0 means its already open, and 1 means 
 * focusing it once would open it. The same for 2, 3, and 4.
 */
export const CHARACTERS = Object.freeze({
    Kadir: Object.freeze({
        startingHand: ["Emerald_Shard", "Crystal", "Crystal", "Crystal", "Spark"],
        startingDeck: ["Spark", "Spark", "Crystal", "Crystal", "Crystal"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 180 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 180 },
        ],
    }),
    Adelheim: Object.freeze({
        startingHand: ["Amethyst_Shard", "Crystal", "Crystal", "Spark", "Spark"],
        startingDeck: ["Crystal", "Crystal", "Crystal", "Crystal", "Crystal"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 180 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 90 },
        ],
    }),
    Brama: Object.freeze({
        startingHand: ["Buried_Light", "Crystal", "Crystal", "Crystal", "Crystal"],
        startingDeck: ["Spark", "Spark", "Crystal", "Crystal", "Crystal"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 180 },
        ],
    }),
    Garu: Object.freeze({
        startingHand: ["Torch", "Crystal", "Crystal", "Crystal", "Spark"],
        startingDeck: ["Spark", "Spark", "Crystal", "Crystal", "Crystal"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 90 },
        ],
    }),
    Jian: Object.freeze({
        startingHand: ["Moonstone_Shard", "Crystal", "Crystal", "Spark", "Spark"],
        startingDeck: ["Spark", "Spark", "Crystal", "Crystal", "Crystal"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 90 },
        ],
    }),
    Lash: Object.freeze({
        startingHand: ["Quartz_Shard", "Crystal", "Crystal", "Crystal", "Spark"],
        startingDeck: ["Spark", "Spark", "Crystal", "Crystal", "Crystal"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 180 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 180 },
        ],
    }),
    Sparrow: Object.freeze({
        startingHand: ["Smolder", "Crystal", "Crystal", "Crystal", "Crystal"],
        startingDeck: ["Crystal", "Crystal", "Crystal", "Crystal", "Crystal"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.NONE, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 0 },
        ],
    }),
    Claudia: Object.freeze({
        startingHand: ["Aetherscope", "Crystal", "Crystal", "Crystal", "Crystal"],
        startingDeck: ["Spark", "Crystal", "Crystal", "Crystal", "Crystal"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.NONE, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 270 },
        ],
    }),
    Dezmodia: Object.freeze({
        startingHand: ["Spark", "Spark", "Oblivion_Shard", "Crystal", "Crystal"],
        startingDeck: ["Spark", "Crystal", "Crystal", "Crystal", "Crystal"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 180 },
        ],
    }),
    // TODO: more characters
});