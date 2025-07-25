import { useRef } from "react";
import React from "react";

import { HandleCardDropIntoList } from "../utils/CardDropHandlers";
import CardDropZone from "./CardDropZone";
import DraggableCard from "./DraggableCard";
import DragToDetector from "./DragToDetector";


/**
 * A componenet for displaying all the cards in a list and allowing the user to rearrange the order by
 * dragging and dropping them into different places in the list.
 * 
 * @param {CardLocations} locationName - the location of the cards being displayed (hand, deck, discard).
 * @param {string[]} cardList - the list of cards on display.
 * @param {function} setCardsList - the appropriate state setter to use when modifying the cardList.
 */
export default function CardListDisplay({ locationName, cardList, setCardList }) {
    const containerRef = useRef(null);

    const scrollLeft = () => {
        containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }

    const scrollRight = () => {
        containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }


    const lastCardDropHandler = new HandleCardDropIntoList(locationName, cardList.length, cardList, setCardList);
    const stylingClass = (cardList.length > 0 ? "inside-list" : "last-card");


    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
            <DragToDetector onDragTo={scrollLeft}>
                <button onClick={scrollLeft} style={styles.arrowBtn}>
                    <img src="/left-arrow.webp" alt="left arrow" />
                </button>
            </DragToDetector>


            <div ref={containerRef}
                style={{
                    flexGrow: 1,
                    overflowX: "auto",
                    scrollBehavior: "smooth",
                    padding: "10px",
                }}>
                <div
                    style={{
                        display: "inline-flex",
                        gap: "5px",
                        minWidth: "100%",
                        justifyContent: "center",
                    }}>
                    {cardList.map((cardName, index) => {
                        const cardDropHandler = new HandleCardDropIntoList(locationName, index, cardList, setCardList);

                        return (
                            <React.Fragment key={index}>
                                <CardDropZone cardDropHandler={cardDropHandler} stylingClass={stylingClass} />
                                <DraggableCard
                                    cardName={cardName}
                                    cardPosition={index}
                                    locationName={locationName}
                                    cardSrcList={cardList}
                                    setCardSrcList={setCardList} />

                            </React.Fragment>
                        )
                    })}

                    <CardDropZone cardDropHandler={lastCardDropHandler} stylingClass={stylingClass} />
                </div>
            </div>


            <DragToDetector onDragTo={scrollRight}>
                <button onClick={scrollRight} style={styles.arrowBtn}>
                    <img src="/right-arrow.webp" alt="right arrow" />
                </button>
            </DragToDetector>
        </div>
    );
}


const styles = {
    arrowBtn: {
        backgroundColor: "LightGray",
        border: "none",
        paddingTop: "10px",
        paddingBottom: "10px",
    }
}
