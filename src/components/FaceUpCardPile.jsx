import { BASE_URL } from "../data/constants";
import CardDropZone from "./CardDropZone";
import DraggableCard from './DraggableCard';
import { HandleCardDropOntoPile } from './CardDropHandlers';



export default function FaceUpCardPile({ pileType, cardList, setCardList }) {
    const onDropHandler = new HandleCardDropOntoPile(pileType, setCardList);


    
    let imageComponent;
    if (cardList.length === 0){
        const imgUrl = BASE_URL + "cards/emptyPile.webp";
        imageComponent = (<img src={imgUrl} alt="discard pile" width="100%" />);
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