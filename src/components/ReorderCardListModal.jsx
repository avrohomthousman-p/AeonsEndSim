import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./Modal.css"
import { ModalShowing } from '../data/constants';


export default function ReorderCardListModal({ modalShowing, setModalShowing, cardList, setCardList}) {
    if (modalShowing === ModalShowing.NONE) {
        return null;
    }


    const closeModal = () => {
        setModalShowing(ModalShowing.NONE);
    }


    let mainContent = <></>;
    switch (modalShowing) {
        case ModalShowing.REORDER_DECK:
            mainContent = (<div>TODO: reorder deck</div>);
            break;
        case ModalShowing.REORDER_DISCARD:
            mainContent = (<div>TODO: reorder discard</div>);
            break;
    }


    return (
        <div id="overlay-style">
            <div id="modal-style">
                {mainContent}

                <button onClick={closeModal} className="close-btn">Close</button>
            </div>
        </div>
    );
}

