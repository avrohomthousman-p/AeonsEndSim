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
        chargeSlots: 5,
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 180 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 90 },
        ],
        topCards: [
            {label: "Arcane Nexus", value: "Arcane_Nexus"}, 
            {label: "Aurora", value: "Aurora"},
        ],
    }),
    Brama: Object.freeze({
        startingHand: ["Buried_Light", "Crystal", "Crystal", "Crystal", "Crystal"],
        startingDeck: ["Spark", "Spark", "Crystal", "Crystal", "Crystal"],
        chargeSlots: 5,
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 180 },
        ],
        topCards: [
            {label: "Arcane Nexus", value: "Arcane_Nexus"}, 
            {label: "Aurora", value: "Aurora"},
        ],
    }),
    Claudia: Object.freeze({
        startingHand: ["Aetherscope", "Crystal", "Crystal", "Crystal", "Crystal"],
        startingDeck: ["Spark", "Crystal", "Crystal", "Crystal", "Crystal"],
        chargeSlots: 5,
        breaches: [
            { breachNumber: 1, breachType: BreachType.NONE, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 270 },
        ],
        topCards: [
            {label: "Arcane Nexus", value: "Arcane_Nexus"},
            {label: "Spirit Lift", value: "Spirit_Lift"},
        ],
    }),
    Dezmodia: Object.freeze({
        startingHand: ["Spark", "Spark", "Oblivion_Shard", "Crystal", "Crystal"],
        startingDeck: ["Spark", "Crystal", "Crystal", "Crystal", "Crystal"],
        chargeSlots: 6,
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 180 },
        ],
        topCards: [
            {label: "Arcane Nexus", value: "Arcane_Nexus"},
            {label: "Aurora", value: "Aurora"},
        ],
    }),
    Garu: Object.freeze({
        startingHand: ["Torch", "Crystal", "Crystal", "Crystal", "Spark"],
        startingDeck: ["Spark", "Spark", "Crystal", "Crystal", "Crystal"],
        chargeSlots: 5,
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 90 },
        ],
        topCards: [
            {label: "Kindle", value: "Kindle"}, 
            {label: "Nerve Jab", value: "Nerve_Jab"},
        ],
    }),
    Gex: Object.freeze({
        startingHand: ["Shattered_Geode", "Crystal", "Crystal", "Crystal", "Spark"],
        startingDeck: ["Spark", "Crystal", "Crystal", "Crystal", "Crystal"],
        chargeSlots: 5,
        breaches: [
            { breachNumber: 1, breachType: BreachType.NONE, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 90 },
        ],
        topCards: [
            {label: "Char", value: "Char"}, 
            {label: "Arcane Nexus", value: "Arcane_Nexus"},
        ],
    }),
    Gygar: Object.freeze({
        startingHand: ["Crystal", "Crystal", "Crystal", "Tidal_Surge", "Spark"],
        startingDeck: ["Spark", "Tidal_Surge", "Crystal", "Crystal", "Crystal"],
        chargeSlots: 5,
        breaches: [
            { breachNumber: 1, breachType: BreachType.ANCIENT, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 90 },
        ],
        topCards: [
            {label: "Bouncing Boom", value: "Bouncing_Boom"}, 
            {label: "Link Conduit", value: "Link_Conduit"},
        ],
    }),
    Ilya: Object.freeze({
        startingHand: ["Spark", "Spark", "Entwined_Amethyst", "Trulite_of_Force", "Crystal"],
        startingDeck: ["Spark", "Spark", "Entwined_Amethyst", "Trulite_of_Force", "Crystal"],
        chargeSlots: 5,
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 180 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 90 },
        ],
        topCards: [
            {label: "Blaze", value: "Blaze"}, 
            {label: "Arcane Nexus", value: "Arcane_Nexus"},
        ],
    }),
    Indira: Object.freeze({
        startingHand: ["Spark", "Twin_Opal", "Crystal", "Crystal", "Crystal"],
        startingDeck: ["Spark", "Twin_Opal", "Crystal", "Crystal", "Crystal"],
        chargeSlots: 4,
        breaches: [
            { breachNumber: 1, breachType: BreachType.NONE, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.NONE, orientation: 360 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.NONE, orientation: 360 },
        ],
        topCards: [
            {label: "Blaze", value: "Blaze"}, 
            {label: "Fiend Catcher", value: "Fiend_Catcher"},
        ],
    }),
    Jian: Object.freeze({
        startingHand: ["Moonstone_Shard", "Crystal", "Crystal", "Spark", "Spark"],
        startingDeck: ["Spark", "Spark", "Crystal", "Crystal", "Crystal"],
        chargeSlots: 4,
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 90 },
        ],
        topCards: [
            {label: "Crystallize", value: "Crystallize"}, 
            {label: "Radiance", value: "Radiance"},
        ],
    }),
    Kadir: Object.freeze({
        startingHand: ["Emerald_Shard", "Crystal", "Crystal", "Crystal", "Spark"],
        startingDeck: ["Spark", "Spark", "Crystal", "Crystal", "Crystal"],
        chargeSlots: 5,
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 180 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 180 },
        ],
        topCards: [
            {label: "Chaos Arc", value: "Chaos_Arc"}, 
            {label: "Flexing Dagger", value: "Flexing_Dagger"},
        ],
    }),
    Kel: Object.freeze({
        startingHand: ["Spark", "Entwined_Amethyst", "Trulite_of_Energy", "Crystal", "Crystal"],
        startingDeck: ["Spark", "Entwined_Amethyst", "Trulite_of_Energy", "Crystal", "Crystal"],
        chargeSlots: 6,
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 0 },
        ],
        topCards: [
            {label: "Tethered Darts", value: "Tethered_Darts"}, 
            {label: "Well of Energy", value: "Well_of_Energy"},
        ],
    }),
    Lash: Object.freeze({
        startingHand: ["Quartz_Shard", "Crystal", "Crystal", "Crystal", "Spark"],
        startingDeck: ["Spark", "Spark", "Crystal", "Crystal", "Crystal"],
        chargeSlots: 5,
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 180 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 180 },
        ],
        topCards: [
            {label: "Arcane Nexus", value: "Arcane_Nexus"}, 
            {label: "Well of Energy", value: "Well_of_Energy"},
        ],
    }),
    Malastar: Object.freeze({
        startingHand: ["Immolate", "Crystal", "Crystal", "Crystal", "Crystal"],
        startingDeck: ["Crystal", "Crystal", "Crystal", "Crystal", "Crystal"],
        chargeSlots: 6,
        breaches: [
            { breachNumber: 1, breachType: BreachType.NONE, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 270 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 90 },
        ],
        topCards: [
            {label: "Arcane Nexus", value: "Arcane_Nexus"}, 
            {label: "Char", value: "Char"},
        ],
    }),
    Mazahaedron: Object.freeze({
        startingHand: ["Spark", "Spark", "Crystal", "Crystal", "Worldheart_Shard"],
        startingDeck: ["Spark", "Crystal", "Crystal", "Crystal", "Crystal"],
        chargeSlots: 4,
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 180 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 90 },
        ],
        topCards: [
            {label: "Arcane Nexus", value: "Arcane_Nexus"},
            {label: "Aurora", value: "Aurora"},
        ],
    }),
    Mist: Object.freeze({
        startingHand: ["Spark", "Crystal", "Crystal", "Crystal", "Garnet_Shard"],
        startingDeck: ["Spark", "Crystal", "Crystal", "Crystal", "Crystal"],
        chargeSlots: 5,
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 180 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 90 },
        ],
        topCards: [
            {label: "Arcane Nexus", value: "Arcane_Nexus"}, 
            {label: "Well of Energy", value: "Well_of_Energy"},
        ],
    }),
    Nym: Object.freeze({
        startingHand: ["Crystal", "Crystal", "Crystal", "Crystal", "Cinder"],
        startingDeck: ["Spark", "Spark", "Crystal", "Crystal", "Crystal"],
        chargeSlots: 5,
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 90 },
        ],
        topCards: [
            {label: "Arcane Nexus", value: "Arcane_Nexus"}, 
            {label: "Well of Energy", value: "Well_of_Energy"},
        ],
    }),
    Phaedraxa: Object.freeze({
        startingHand: ["Spark", "Crystal", "Crystal", "Crystal", "Tourmaline_Shard"],
        startingDeck: ["Spark", "Crystal", "Crystal", "Crystal", "Crystal"],
        chargeSlots: 5,
        breaches: [
            { breachNumber: 1, breachType: BreachType.NONE, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 180 },
        ],
        topCards: [
            {label: "Arcane Nexus", value: "Arcane_Nexus"}, 
            {label: "Aurora", value: "Aurora"},
        ],
    }),
    Quilius: Object.freeze({
        startingHand: ["Crystal", "Crystal", "Crystal", "Extinguish", "Spark"],
        startingDeck: ["Spark", "Extinguish", "Crystal", "Crystal", "Crystal"],
        chargeSlots: 5,
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 90 },
        ],
        topCards: [
            {label: "Arcane Nexus", value: "Arcane_Nexus"}, 
            {label: "Monstrous Inferno", value: "Monstrous_Inferno"},
        ],
    }),
    Reeve: Object.freeze({
        startingHand: ["Spark", "Spark", "Crystal", "Crystal", "Obsidian_Shard"],
        startingDeck: ["Spark", "Spark", "Crystal", "Crystal", "Crystal"],
        chargeSlots: 4,
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 180 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 180 },
        ],
        topCards: [
            {label: "Well of Energy", value: "Well_of_Energy"}, 
            {label: "Radiance", value: "Radiance"},
        ],
    }),
    Remnant: Object.freeze({
        startingHand: ["Void_Shard", "Crystal", "Crystal", "Spark", "Spark"],
        startingDeck: ["Spark", "Crystal", "Crystal", "Crystal", "Crystal"],
        chargeSlots: 5,
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REMNENT, orientation: 0 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 90 },
        ],
        topCards: [
            {label: "Arcane Nexus", value: "Arcane_Nexus"}, 
            {label: "Aurora", value: "Aurora"},
        ],
    }),
    Sahala: Object.freeze({
        startingHand: ["Crystal", "Crystal", "Crystal", "Sparkling_Meteorite", "Spark"],
        startingDeck: ["Spark", "Spark", "Crystal", "Crystal", "Crystal"],
        chargeSlots: 4,
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 180 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 4, breachType: BreachType.CELESTIAL, orientation: 0 },
        ],
        topCards: [
            {label: "Flexing Dagger", value: "Flexing_Dagger"}, 
            {label: "Tethered Darts", value: "Tethered_Darts"},
        ],
    }),
    Soskel: Object.freeze({
        startingHand: ["Crystal", "Crystal", "Crystal", "Lucky_Coin", "Spark"],
        startingDeck: ["Spark", "Crystal", "Crystal", "Crystal", "Crystal"],
        chargeSlots: 4,
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 0 },
        ],
        topCards: [
            {label: "Arcane Nexus", value: "Arcane_Nexus"},
            {label: "Link Conduit", value: "Link_Conduit"},
        ],
    }),
    Sparrow: Object.freeze({
        startingHand: ["Smolder", "Crystal", "Crystal", "Crystal", "Crystal"],
        startingDeck: ["Crystal", "Crystal", "Crystal", "Crystal", "Crystal"],
        chargeSlots: 5,
        breaches: [
            { breachNumber: 1, breachType: BreachType.NONE, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 0 },
        ],
        topCards: [
            {label: "Well of Energy", value: "Well_of_Energy"}, 
            {label: "Fiend Catcher", value: "Fiend_Catcher"},
        ],
    }),
    Taqren: Object.freeze({
        startingHand: ["Crystal", "Crystal", "Crystal", "Crystal", "Gift_of_Spirit"],
        startingDeck: ["Spark", "Crystal", "Crystal", "Crystal", "Crystal"],
        chargeSlots: 4,
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 4, breachType: BreachType.DEFENDER, orientation: 90 },
        ],
        topCards: [
            {label: "Flexing Dagger", value: "Flexing_Dagger"}, 
            {label: "Tethered Darts", value: "Tethered_Darts"},
        ],
    }),
    Ulgimor: Object.freeze({
        startingHand: ["Coal_Shard", "Crystal", "Crystal", "Spark", "Spark"],
        startingDeck: ["Spark", "Spark", "Crystal", "Crystal", "Crystal"],
        chargeSlots: 6,
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 90 },
        ],
        topCards: [
            {label: "Arcane Nexus", value: "Arcane_Nexus"}, 
            {label: "Aurora", value: "Aurora"},
        ],
    }),
    Xaxos: Object.freeze({
        startingHand: ["Crystal", "Crystal", "Crystal", "Crystal", "Flare"],
        startingDeck: ["Spark", "Crystal", "Crystal", "Crystal", "Crystal"],
        chargeSlots: 5,
        breaches: [
            { breachNumber: 1, breachType: BreachType.REGULAR, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 90 },
        ],
        topCards: [
            {label: "Arcane Nexus", value: "Arcane_Nexus"}, 
            {label: "Aurora", value: "Aurora"},
        ],
    }),
    Zhana: Object.freeze({
        startingHand: ["Crystal", "Crystal", "Crystal", "Crystal", "Eternal_Ember"],
        startingDeck: ["Spark", "Crystal", "Crystal", "Crystal", "Crystal"],
        chargeSlots: 5,
        breaches: [
            { breachNumber: 1, breachType: BreachType.NONE, orientation: 360 },
            { breachNumber: 2, breachType: BreachType.REGULAR, orientation: 0 },
            { breachNumber: 3, breachType: BreachType.REGULAR, orientation: 90 },
            { breachNumber: 4, breachType: BreachType.REGULAR, orientation: 270 },
        ],
        topCards: [
            {label: "Arcane Nexus", value: "Arcane_Nexus"},
            {label: "Flexing Dagger", value: "Flexing_Dagger"},
        ],
    }),
});