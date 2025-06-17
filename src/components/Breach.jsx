import React, { useEffect, useState, useRef } from 'react';
import './Breach.css';
import { BASE_URL } from '../data/constants'
import CardDropZone from './CardDropZone';
import DraggableCard from './DraggableCard';
import { HandleCardDropOntoPile } from "./CardDropHandlers";
import { CardLocations } from '../data/constants';
import { PiX } from 'react-icons/pi';



/**
* The breach orientation indicates the direction it faces. 0 is the state that
* is farthest away from open. 90 is one rotation closer to biend open, 180 is
* 2 rotations closer, ect. 360 means its already open.
*/
export default function SingleBreach({ breachNumber, startingOrientation }) {
    const [preppedSpells, setPreppedSpells] = useState([]);

    const cardDropHandler = new HandleCardDropOntoPile(preppedSpells, setPreppedSpells);

    let location = "";
    switch (breachNumber) {
        case 1: location = CardLocations.Breach1; break;
        case 2: location = CardLocations.Breach2; break;
        case 3: location = CardLocations.Breach3; break;
        case 4: location = CardLocations.Breach4; break;
    }

    const breachID = `tier-${breachNumber}-breach`;


    return (
        <div className="breach-container">
            {
                breachNumber === 1 ?
                    (<Tier1Breach />) :
                    (<RegularBreach breachNumber={breachNumber} startingOrientation={startingOrientation} preppedSpells={preppedSpells} />)
            }

            <div className="breach-dropzone">
                <CardDropZone cardDropHandler={cardDropHandler} stylingClass={"on-breach"} underlyingElementID={breachID} >
                    {preppedSpells.length > 0 && (
                        <DraggableCard
                            cardName={preppedSpells[preppedSpells.length - 1]}
                            cardPosition={preppedSpells.length - 1}
                            locationName={location}
                            cardSrcList={preppedSpells}
                            setCardSrcList={setPreppedSpells}
                        />
                    )}
                </CardDropZone>
            </div>
        </div>
    );
}



function Tier1Breach() {
    const url = BASE_URL + "breaches/breach1-open.webp";

    return (
        <img
            id="tier-1-breach"
            src={url}
            alt="tier 1 breach"
            width="16%"
            style={{ cursor: 'pointer' }}
        />
    );
}



function RegularBreach({ breachNumber, startingOrientation, preppedSpells }) {
    const [breachState, setBreachState] = useState({
        orientation: Math.min(startingOrientation, 360),
        isOpen: startingOrientation >= 360
    });

    const [contextMenu, setContextMenu] = useState({
        visible: false,
        x: 0,
        y: 0,
    });


    const breachRef = useRef(null);


    const showContextMenu = (event) => {
        event.preventDefault();

        if (preppedSpells.length > 0) {
            return;
        }

        
        const breachRect = event.currentTarget.getBoundingClientRect();

        //If the click is in the CardDropZone but outside the breach
        if (event.clientY > breachRect.bottom)
            return;
        

        setContextMenu({
            visible: true,
            x: event.clientX - breachRect.left,
            y: event.clientY - breachRect.bottom,
        })
    };



    const hideContextMenu = () => {
        if (contextMenu.visible) {
            setContextMenu({
                visible: false,
                x: 0,
                y: 0,
            })
        }
    };



    useEffect(() => {
        if (!contextMenu.visible)
            return;

        document.addEventListener("click", hideContextMenu);
        return () => {
            document.removeEventListener("click", hideContextMenu);
        };

    }, [contextMenu.visible]);


    const handleBreachClick = (event) => {
        if (preppedSpells.length > 0) {
            return;
        }


        //If the click is in the CardDropZone but outside the breach
        const breachRect = event.currentTarget.getBoundingClientRect();
        if (event.clientY > breachRect.bottom)
            return;


        focusBreach();
    }


    const focusBreach = () => {
        if (breachState.isOpen) {
            return;
        }

        //increment the orientation by 90 degrees, and mark the breach as opened if needed.
        setBreachState(({ orientation }) => {
            const newOrientation = orientation + 90;
            return {
                orientation: newOrientation,
                isOpen: newOrientation === 360,
            }
        });
    }


    const unfocusBreach = () => {
        if (breachState.orientation === 0) {
            return;
        }

        //decrement the orientation by 90 degrees, and mark the breach as closed if needed.
        setBreachState(({ orientation }) => {
            const newOrientation = orientation - 90;
            return {
                orientation: newOrientation,
                isOpen: newOrientation === 360,
            }
        });
    }



    const openBreach = () => {
        if (breachState.isOpen) {
            return; //no need to re-render the component
        }

        setBreachState(() => {
            return {
                orientation: 360,
                isOpen: true,
            }
        });
    }


    //URL must be dynamic, based on state
    const url = BASE_URL + `breaches/breach${breachNumber}-${breachState.isOpen ? "open" : "closed"}.webp`;


    return (
        <>
            <img
                ref={breachRef}
                id={`tier-${breachNumber}-breach`}
                src={url}
                alt={`tier ${breachNumber} breach`}
                width="16%"
                onClick={handleBreachClick}
                onContextMenu={showContextMenu}
                style={{
                    transform: `rotate(${breachState.orientation || 0}deg)`,
                    transition: 'transform 0.2s ease-in-out',
                    cursor: 'pointer'
                }}
            />

            {
                contextMenu.visible &&
                <ul
                    style={{
                        ...styles.breachContextMenu,
                        top: contextMenu.y,
                        left: contextMenu.x,
                    }}
                >

                    <li className={`menu-item ${breachState.isOpen ? 'disabled' : ''}`} onClick={focusBreach}>Focus</li>
                    <li className={`menu-item ${breachState.orientation === 0 ? 'disabled' : ''}`} onClick={unfocusBreach}>Un-Focus</li>
                    <li className={`menu-item ${breachState.isOpen ? 'disabled' : ''}`} onClick={openBreach}>Open</li>
                </ul>
            }
        </>
    )
}


const styles = {
    breachContextMenu: {
        position: 'absolute',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        width: "95px",
        listStyle: 'none',
        padding: '5px',
        zIndex: 10000,
    },
}
