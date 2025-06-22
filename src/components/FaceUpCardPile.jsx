import { BASE_URL } from "../data/constants";
import CardDropZone from "./CardDropZone";
import DraggableCard from "./DraggableCard";
import { HandleCardDropOntoPile } from "./CardDropHandlers";



/**
 * A component for a face up pile of cards like the discard pile or destroyed pile. Cards
 * can be dropped on the top of the pile and dragged from the top to somewhere else.
 * 
 * @param {CardLocations} pileType - A constant telling the component what pile it represents.
 * @param {string[]} cardList - An array storing the cards in the pile.
 * @param {function} setCardList - A setter function for modifying the array of cards in the pile.
 */
export default function FaceUpCardPile({ pileType, cardList, setCardList }) {
    const onDropHandler = new HandleCardDropOntoPile(pileType, setCardList);


    
    let imageComponent;
    if (cardList.length === 0){
        imageComponent = (<img src="/emptyPile.webp" className="card-image" alt="discard pile" width="100%" />);
    }
    else {
        const cardPosition = cardList.length - 1;
        const cardName = cardList[cardPosition];
        imageComponent = (
            <DraggableCard 
                cardName={cardName} 
                cardPosition={cardPosition} 
                locationName={pileType} 
                cardSrcList={cardList} 
                setCardSrcList={setCardList} />
        );
    }


    return (
        <>
            <p>{cardList.length} card{cardList.length === 1 ? "" : "s"}</p>
            <CardDropZone cardDropHandler={onDropHandler} >
                {imageComponent}
            </CardDropZone>
        </>
    )
}