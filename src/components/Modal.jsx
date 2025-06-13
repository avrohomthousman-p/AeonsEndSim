import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./Modal.css"


export default function Modal({ modalIsOpen, setModalIsOpen, modalType }) {
    if (!modalIsOpen) {
        return null;
    }


    const closeModal = () => setModalIsOpen(false);


    let mainContent = <></>;
    switch (modalType) {
        case "TODO A":
            mainContent = (<div>TODO: type A</div>);
            break;
        case "TODO B":
            mainContent = (<div>TODO: type B</div>);
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

