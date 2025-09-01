import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

import { CardLocations, ModalShowing } from "../data/constants";
import { HandleCardDropOntoPile } from "../utils/CardDropHandlers";
import CardDropZone from "./CardDropZone";
import DraggableCard from "./DraggableCard";



/**
 * A component for a face up pile of cards like the discard pile or destroyed pile. Cards
 * can be dropped on the top of the pile and dragged from the top to somewhere else.
 * 
 * @param {CardLocations} pileType - A constant telling the component what pile it represents.
 * @param {string[]} cardList - An array storing the cards in the pile.
 * @param {function} setCardList - A setter function for modifying the array of cards in the pile.
 * @param {function} setModalShowing - A setter function for controlling what modal is showing (if any).
 */
export default function FaceUpCardPile({ pileType, cardList, setCardList, setModalShowing }) {
    const onDropHandler = new HandleCardDropOntoPile(pileType, setCardList);


    
    let imageComponent;
    if (cardList.length === 0){
        imageComponent = (<img src="/emptyPile.webp" className="card-image" alt="discard pile" width="100%" />);
    }
    else {
        const cardPosition = cardList.length - 1;
        const cardName = cardList[cardPosition];
        const modalType = (pileType === CardLocations.DiscardPile ? ModalShowing.REORDER_DISCARD : ModalShowing.REORDER_DESTROYED);
        imageComponent = (
            <div style={{ position: "relative", display: "inline-block" }}>
                <DraggableCard 
                    cardName={cardName} 
                    cardPosition={cardPosition} 
                    locationName={pileType} 
                    cardSrcList={cardList} 
                    setCardSrcList={setCardList} />


                <Tooltip title="View/Reorder" placement="right" arrow>
                    <IconButton
                        size="small"
                        style={{ position: "absolute", top: -8, right: -8, zIndex: 10, backgroundColor: "rgba(106, 215, 239, 0.8)" }}
                        onClick={() => setModalShowing(modalType)} >
                    
                        <VisibilityOutlinedIcon fontSize="small" />
                    
                    </IconButton>
                </Tooltip>
            </div>
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