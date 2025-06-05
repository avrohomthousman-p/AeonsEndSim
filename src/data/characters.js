
/**
 * Stores static data about character setup. The breach orientation can only be a value from 0-4 (inclusive).
 * The number represents how many focuses it is away from opening. 0 means its already open, and 1 means 
 * focusing it once would open it. The same for 2, 3, and 4.
 */
export const CHARACTERS = Object.freeze({
    Kadir: Object.freeze({
        image: "https://static.wikia.nocookie.net/aeonsend/images/8/89/Kadir1.jpg/revision/latest/scale-to-width-down/1000?cb=20200216064236",
        startingDeck: ["Crystal", "Crystal", "Crystal", "Spark", "Spark"],
        startingHand: ["Emerald Shard", "Crystal", "Crystal", "Crystal", "Spark"],
        breaches: [
            { breachID: 1, orientation: 0 },
            { breachID: 2, orientation: 2 },
            { breachID: 3, orientation: 3 },
            { breachID: 4, orientation: 2 },
        ],
    }),
    // TODO: more characters
});