import { useState } from "react";
import { BASE_URL, CardLocations } from "../data/constants";
import CardDropZone from "./CardDropZone";
import DraggableCard from './DraggableCard';
import { HandleCardDropOntoPile } from './CardDropHandlers';



export default function DiscardPile() {
    const [cardsInDiscard, setCardsInDiscard] = useState([]);

    const onDropHandler = new HandleCardDropOntoPile(CardLocations.DiscardPile, setCardsInDiscard);


    
    let imageComponent;
    if (cardsInDiscard.length === 0){
        const imgUrl = BASE_URL + "cards/emptyPile.webp";
        imageComponent = (<img src={imgUrl} alt="discard pile" width="100%" />);
    }
    else {
        const cardPosition = cardsInDiscard.length - 1;
        const cardName = cardsInDiscard[cardPosition];
        imageComponent = (
            <DraggableCard 
                cardName={cardName} 
                cardPosition={cardPosition} 
                locationName={CardLocations.DiscardPile} 
                cardSrcList={cardsInDiscard} 
                setCardSrcList={setCardsInDiscard} />
        );
    }


    return (
        <div style={{ display: "inline-block", width: "12%" }}>
            <p>{cardsInDiscard.length} card{cardsInDiscard.length === 1 ? "" : "s"}</p>
            <CardDropZone cardDropHandler={onDropHandler} stylingClass="card-pile" >
                {imageComponent}
            </CardDropZone>
        </div>
    )
}