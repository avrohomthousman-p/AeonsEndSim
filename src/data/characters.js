import { BreachType } from "./constants";

/**
 * Stores static data about character setup. The breach orientation can only be a value from 0-4 (inclusive).
 * The number represents how many focuses it is away from opening. 0 means its already open, and 1 means 
 * focusing it once would open it. The same for 2, 3, and 4.
 */
export const CHARACTERS = Object.freeze({
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
    Dorian: Object.freeze({
        startingHand: ["Spark", "Spatial_Distortion", "Crystal", "Crystal", "Crystal"],
        startingDeck: ["Spark", "Crystal", "Crystal", "Crystal", "Crystal"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 180 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 180 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 0 },
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
    Gex: Object.freeze({
        startingHand: ["Shattered_Geode", "Crystal", "Crystal", "Crystal", "Spark"],
        startingDeck: ["Spark", "Crystal", "Crystal", "Crystal", "Crystal"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.NONE, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 3600 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 90 },
        ],
    }),
    Ilya: Object.freeze({
        startingHand: ["Spark", "Spark", "Entwined_Amethyst", "Trulite_of_Force", "Crystal"],
        startingDeck: ["Spark", "Spark", "Entwined_Amethyst", "Trulite_of_Force", "Crystal"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 180 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 90 },
        ],
    }),
    Indira: Object.freeze({
        startingHand: ["Spark", "Twin_Opal", "Crystal", "Crystal", "Crystal"],
        startingDeck: ["Spark", "Twin_Opal", "Crystal", "Crystal", "Crystal"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.NONE, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.NONE, orientation: 360 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.NONE, orientation: 360 },
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
    Kel: Object.freeze({
        startingHand: ["Spark", "Entwined_Amethyst", "Trulite_of_Energy", "Crystal", "Crystal"],
        startingDeck: ["Spark", "Entwined_Amethyst", "Trulite_of_Energy", "Crystal", "Crystal"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 0 },
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
    Malastar: Object.freeze({
        startingHand: ["Immolate", "Crystal", "Crystal", "Crystal", "Crystal"],
        startingDeck: ["Crystal", "Crystal", "Crystal", "Crystal", "Crystal"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.NONE, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 270 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 90 },
        ],
    }),
    Mazahaedron: Object.freeze({
        startingHand: ["Spark", "Spark", "Crystal", "Crystal", "Worldheart_Shard"],
        startingDeck: ["Spark", "Crystal", "Crystal", "Crystal", "Crystal"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 180 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 90 },
        ],
    }),
    Mist: Object.freeze({
        startingHand: ["Spark", "Crystal", "Crystal", "Crystal", "Garnet_Shard"],
        startingDeck: ["Spark", "Crystal", "Crystal", "Crystal", "Crystal"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 180 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 90 },
        ],
    }),
    Nym: Object.freeze({
        startingHand: ["Crystal", "Crystal", "Crystal", "Crystal", "Cinder"],
        startingDeck: ["Spark", "Spark", "Crystal", "Crystal", "Crystal"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 90 },
        ],
    }),
    Phaedraxa: Object.freeze({
        startingHand: ["Spark", "Crystal", "Crystal", "Crystal", "Tourmaline_Shard"],
        startingDeck: ["Spark", "Crystal", "Crystal", "Crystal", "Crystal"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.NONE, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 180 },
        ],
    }),
    Reeve: Object.freeze({
        startingHand: ["Spark", "Spark", "Crystal", "Crystal", "Obsidian_Shard"],
        startingDeck: ["Spark", "Spark", "Crystal", "Crystal", "Crystal"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 180 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
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
    Xaxos: Object.freeze({
        startingHand: ["Crystal", "Crystal", "Crystal", "Crystal", "Flare"],
        startingDeck: ["Spark", "Crystal", "Crystal", "Crystal", "Crystal"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 90 },
        ],
    }),
    Zhana: Object.freeze({
        startingHand: ["Crystal", "Crystal", "Crystal", "Crystal", "Eternal_Ember"],
        startingDeck: ["Spark", "Crystal", "Crystal", "Crystal", "Crystal"],
        breaches: [
            { breachNumber: 1, breachType: BreachType.NONE, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 270 },
        ],
    }),
});