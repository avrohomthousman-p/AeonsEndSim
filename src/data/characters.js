
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
            { breachID: 1, orientation: 360 },
            { breachID: 2, orientation: 180 },
            { breachID: 3, orientation: 90 },
            { breachID: 4, orientation: 180 },
        ],
    }),
    Adelheim: Object.freeze({
        startingDeck: ["Crystal", "Crystal", "Crystal", "Crystal", "Crystal"],
        startingHand: ["Amethyst_Shard", "Crystal", "Crystal", "Spark", "Spark"],
        breaches: [
            { breachID: 1, orientation: 360 },
            { breachID: 2, orientation: 180 },
            { breachID: 3, orientation: 0 },
            { breachID: 4, orientation: 90 },
        ],
    }),
    Brama: Object.freeze({
        startingDeck: ["Spark", "Spark", "Crystal", "Crystal", "Crystal"],
        startingHand: ["Buried_Light", "Crystal", "Crystal", "Crystal", "Crystal"],
        breaches: [
            { breachID: 1, orientation: 360 },
            { breachID: 2, orientation: 90 },
            { breachID: 3, orientation: 0 },
            { breachID: 4, orientation: 180 },
        ],
    }),
    Garu: Object.freeze({
        startingDeck: ["Spark", "Spark", "Crystal", "Crystal", "Crystal"],
        startingHand: ["Torch", "Crystal", "Crystal", "Crystal", "Spark"],
        breaches: [
            { breachID: 1, orientation: 360 },
            { breachID: 2, orientation: 0 },
            { breachID: 3, orientation: 90 },
            { breachID: 4, orientation: 90 },
        ],
    }),
    Jian: Object.freeze({
        startingDeck: ["Spark", "Spark", "Crystal", "Crystal", "Crystal"],
        startingHand: ["Moonstone_Shard", "Crystal", "Crystal", "Spark", "Spark"],
        breaches: [
            { breachID: 1, orientation: 360 },
            { breachID: 2, orientation: 360 },
            { breachID: 3, orientation: 0 },
            { breachID: 4, orientation: 90 },
        ],
    }),
    Lash: Object.freeze({
        startingDeck: ["Spark", "Spark", "Crystal", "Crystal", "Crystal"],
        startingHand: ["Quartz_Shard", "Crystal", "Crystal", "Crystal", "Spark"],
        breaches: [
            { breachID: 1, orientation: 360 },
            { breachID: 2, orientation: 180 },
            { breachID: 3, orientation: 0 },
            { breachID: 4, orientation: 180 },
        ],
    }),
    // TODO: more characters
});