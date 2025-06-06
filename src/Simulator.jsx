import './Simulator.css'
import { CHARACTERS } from './data/characters'
import { FaArrowLeft } from 'react-icons/fa';
import { useParams } from "react-router-dom"


function Simulator() {
    return (
        <div>
            <div style={{ position: "relative" }}>
                <a href="/" className='back-link'>
                    <FaArrowLeft style={{ marginRight: '0.5rem' }} />
                    Select a different character
                </a>
                <h3 className='title'>Aeons End Simulator</h3>

                <PlayerMat />
            </div>
        </div>
    )
}


export default Simulator



function PlayerMat() {
    const { characterName } = useParams();
    const data = CHARACTERS[characterName];
    const baseUrl = "https://storage.googleapis.com/aeons-end-pics/";


    return (
        <div>
            <div id="breaches">
                {
                    data.breaches.map(
                        (breachData) =>
                            <img
                                src={`${baseUrl}breaches/breach${breachData.breachID}-${breachData.orientation}.webp`}
                                alt="breach"
                                width="12%"
                            />
                    )
                }
            </div>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
                <div style={{ display: "inline-block", width: "12%" }}>
                    <p>5 cards</p>
                    <img src={baseUrl + "cards/cardBack.webp"} alt="deck" width="100%" />
                </div>

                <div style={{ display: "inline-block", width: "35%" }} >
                    <img src={baseUrl + "characters/" + characterName + ".webp"} alt="player mat" width="100%" />
                </div>

                <div style={{ display: "inline-block", width: "12%" }}>
                    <p>0 cards</p>
                    <img src={baseUrl + "cards/noCard.webp"} alt="discard pile" width="100%" />
                </div>
            </div>

        </div>
    )
}

