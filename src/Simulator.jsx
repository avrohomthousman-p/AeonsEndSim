import { useParams } from "react-router-dom"


function Simulator(){
    const { characterName } = useParams();
    return (<p>I'm still building this part, { characterName }</p>)
}


export default Simulator
