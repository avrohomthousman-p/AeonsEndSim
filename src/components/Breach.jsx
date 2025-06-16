import { useEffect, useState } from 'react';
import './Breach.css';
import { BASE_URL } from '../data/constants'



/**
* The breach orientation indicates the direction it faces. 0 is the state that
* is farthest away from open. 90 is one rotation closer to biend open, 180 is
* 2 rotations closer, ect. 360 means its already open.
*/
export default function SingleBreach({ breachNumber, startingOrientation }) {
    if (breachNumber === 1) {
        return <Tier1Breach />
    }
    else {
        return <RegularBreach breachNumber={breachNumber} startingOrientation={startingOrientation} />
    }
}



function Tier1Breach() {
    const url = BASE_URL + "breaches/breach1-open.webp";

    return (
        <img
            src={url}
            alt="breach"
            width="16%"
            style={{ cursor: 'pointer' }}
        />
    );
}



function RegularBreach({ breachNumber, startingOrientation }) {
    const [breachState, setBreachState] = useState({
        orientation: Math.min(startingOrientation, 360),
        isOpen: startingOrientation >= 360
    });

    const [contextMenu, setContextMenu] = useState({
        visible: false,
        x: 0,
        y: 0,
    });



    const showContextMenu = (event) => {
        event.preventDefault();
        setContextMenu({
            visible: true,
            x: event.pageX,
            y: event.pageY,
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
        if (event.button === 0) {           //left click
            focusBreach();
        }
        else if (event.button === 2) {      //right click
            showContextMenu(event);
        }
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
                src={url}
                alt="breach"
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
        listStyle: 'none',
        padding: '5px',
        zIndex: 10000,
    },
}