import './Simulator.css'
import { CHARACTERS } from './data/characters'
import { FaArrowLeft } from 'react-icons/fa';
import { useParams } from "react-router-dom"


const BASE_URL = "https://storage.googleapis.com/aeons-end-pics/";


function Simulator() {
    return (
        <div>
            <div style={{ position: "relative" }}>
                <a href="/" className='back-link'>
                    <FaArrowLeft style={{ marginRight: '0.5rem' }} />
                    Select a different character
                </a>
                <h3 className='title'>Aeons End Simulator</h3>

                <PlayerArea />
            </div>
        </div>
    )
}


export default Simulator



function PlayerArea() {
    const { characterName } = useParams();
    const data = CHARACTERS[characterName];


    return (
        <div>
            <BreachSection characterData={data} />
            <CharacterSection characterName={characterName} />
            <HandSection />
        </div>
    )
}



function BreachSection({ characterData }) {
    return (
        <div id="breaches">
            {
                characterData.breaches.map(
                    (breachData) =>
                        <img
                            src={`${BASE_URL}breaches/breach${breachData.breachID}-${breachData.orientation}.webp`}
                            alt="breach"
                            width="12%"
                        />
                )
            }
        </div>
    )
}



function CharacterSection({ characterName }) {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <div style={{ display: "inline-block", width: "12%" }}>
                <p>5 cards</p>
                <img src={BASE_URL + "cards/cardBack.webp"} alt="deck" width="100%" />
            </div>

            <div style={{ display: "inline-block", width: "35%" }} >
                <img src={BASE_URL + "characters/" + characterName + ".webp"} alt="player mat" width="100%" />
            </div>

            <div style={{ display: "inline-block", width: "12%" }}>
                <p>0 cards</p>
                <img src={BASE_URL + "cards/noCard.webp"} alt="discard pile" width="100%" />
            </div>
        </div>
    )
}



function HandSection(){
    //TODO
    return(
        <div id="hand">

        </div>
    )
}

