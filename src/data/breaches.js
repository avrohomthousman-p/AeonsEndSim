/**
 * Stores static data about each type of breach. The key is the breach ID which matches the breach 
 * number for all the regular breaches.
 */
export const BREACHES = Object.freeze({
    1: Object.freeze({
        description: "tier I breach",
        orientations: [
            "https://static.wikia.nocookie.net/aeonsend/images/3/35/Breach1open.png/revision/latest/scale-to-width-down/200?cb=20200307215959",
        ],
    }),
    2: Object.freeze({
        description: "tier II breach",
        orientations: [
            "https://static.wikia.nocookie.net/aeonsend/images/f/f0/Breach2open.png/revision/latest/scale-to-width-down/200?cb=20200312192935",
            "https://static.wikia.nocookie.net/aeonsend/images/2/2b/Breach2D.png/revision/latest/scale-to-width-down/200?cb=20200307212653",
            "https://static.wikia.nocookie.net/aeonsend/images/1/1b/Breach2C.png/revision/latest/scale-to-width-down/200?cb=20200307212639",
            "https://static.wikia.nocookie.net/aeonsend/images/e/e9/Breach2B.png/revision/latest/scale-to-width-down/200?cb=20200307212626",
            "https://static.wikia.nocookie.net/aeonsend/images/c/c3/Breach2A.png/revision/latest/scale-to-width-down/200?cb=20200307212607",
        ],
    }),
    3: Object.freeze({
        description: "tier III breach",
        orientations: [
            "https://static.wikia.nocookie.net/aeonsend/images/2/22/Breach3open.png/revision/latest/scale-to-width-down/200?cb=20200312193103",
            "https://static.wikia.nocookie.net/aeonsend/images/a/ad/Breach3D.png/revision/latest/scale-to-width-down/200?cb=20200307212825",
            "https://static.wikia.nocookie.net/aeonsend/images/f/fd/Breach3C.png/revision/latest/scale-to-width-down/200?cb=20200307212808",
            "https://static.wikia.nocookie.net/aeonsend/images/b/b3/Breach3B.png/revision/latest/scale-to-width-down/200?cb=20200307212751",
            "https://static.wikia.nocookie.net/aeonsend/images/a/a7/Breach3A.png/revision/latest/scale-to-width-down/200?cb=20200307212731",
        ],
    }),
    4: Object.freeze({
        description: "tier IV breach",
        orientations: [
            "https://static.wikia.nocookie.net/aeonsend/images/f/f1/Breach4open.png/revision/latest/scale-to-width-down/200?cb=20200312193122",
            "https://static.wikia.nocookie.net/aeonsend/images/5/57/Breach4D.png/revision/latest/scale-to-width-down/200?cb=20200307212952",
            "https://static.wikia.nocookie.net/aeonsend/images/3/3a/Breach4C.png/revision/latest/scale-to-width-down/200?cb=20200307212923",
            "https://static.wikia.nocookie.net/aeonsend/images/c/c2/Breach4B.png/revision/latest/scale-to-width-down/200?cb=20200307212911",
            "https://static.wikia.nocookie.net/aeonsend/images/6/67/Breach4A.png/revision/latest/scale-to-width-down/200?cb=20200307212858",
        ],
    }),
});