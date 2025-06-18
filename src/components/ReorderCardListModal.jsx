import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./Modal.css"
import { ModalShowing } from '../data/constants';
import CardListDisplay from './CardListDisplay';


export default function ReorderCardListModal({ modalShowing, setModalShowing, locationName, cardList, setCardList}) {
    if (modalShowing === ModalShowing.NONE) {
        return null;
    }


    const closeModal = () => {
        setModalShowing(ModalShowing.NONE);
    }


    return (
        <div id="overlay">
            <div className="modal-base-style large-modal">
                <h3 style={{ textDecoration: "underline", fontWeight: "bold" }}>Reorder { locationName }</h3>
                <CardListDisplay locationName={locationName} cardList={cardList} setCardList={setCardList} />

                <button onClick={closeModal} className="close-btn">Close</button>
            </div>
        </div>
    );
}

