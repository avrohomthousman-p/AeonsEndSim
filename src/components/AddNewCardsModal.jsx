import "./Modal.css";

import { TabPanel } from "@mui/lab";
import TabContext from "@mui/lab/TabContext";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TextField from "@mui/material/TextField";
import { useState } from "react";

import { SORTED_CARD_NAMES } from "../data/cards";
import { BASE_URL, ModalShowing } from "../data/constants";



/**
 * Modal popup that allows users to add new cards to their deck/hand/discard pile.
 * @param {function} setCardsInHand - A setter function for modifying the user's cards in hand.
 * @param {function} setCardsInDeck - A setter function for modifying the cards in theuser's deck.
 * @param {function} setCardsInDiscard - A setter function for modifying the cards in the user's discard pile.
 */
export default function AddNewCardsModal({ modalShowing, setModalShowing, setCardsInHand, setCardsInDeck, setCardsInDiscard }) {
    const [tabNumber, setTabNumber] = useState("1");

    const closeModal = () => {
        setModalShowing(ModalShowing.NONE);
    }

    return (
        <Dialog open={modalShowing === ModalShowing.ADD_NEW_CARDS}
            slotProps={{
                paper: {
                    sx: {
                        width: "60vw",
                        height: "75vh",
                        maxWidth: "none",
                        maxHeight: "none",
                    }
                }
            }} >

            <DialogTitle>Add New Cards To The Game</DialogTitle>

            <DialogContent sx={{ overflow: "hidden", textAlign: "center" }}>
                <Box sx={{ width: "100%", typography: "body1" }}>
                    <TabContext value={tabNumber}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <Tabs value={tabNumber} onChange={(e, newValue) => setTabNumber(newValue)}>
                                <Tab label="Card Search" value="1" />
                                <Tab label="From Market" value="2" />
                            </Tabs>
                        </Box>

                        <TabPanel value="1">
                            <CardSearch setCardsInHand={setCardsInHand} setCardsInDeck={setCardsInDeck} setCardsInDiscard={setCardsInDiscard} />
                        </TabPanel >
                        <TabPanel value="2">
                            <CardMarket setCardsInHand={setCardsInHand} setCardsInDeck={setCardsInDeck} setCardsInDiscard={setCardsInDiscard} />
                        </TabPanel>

                    </TabContext>
                </Box>
            </DialogContent>

            <DialogActions>
                <button onClick={closeModal} className="btn close-btn">Close</button>
            </DialogActions>

        </Dialog>
    );
}


/**
 * A widget that lets the user search for any Aeons End card they want to add.
 * @param {function} setCardsInHand - A setter for the user's cards in hand.
 * @param {function} setCardsInDeck - A setter for the cards in the user's deck.
 * @param {function} setCardsInDiscard - A setter for the cards in the user's discard pile.
 */
function CardSearch({ setCardsInHand, setCardsInDeck, setCardsInDiscard }) {
    const { selectedCard, setSelectedCard, addCardToList } = useCardTransfer();


    return (
        <div className="vertical-stack">
            <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}>
                <Autocomplete
                    disablePortal={false}
                    value={selectedCard}
                    onChange={(event, newValue) => setSelectedCard(newValue)}
                    options={SORTED_CARD_NAMES}
                    sx={{ width: "330px", marginTop: "10px" }}
                    renderInput={(params) => <TextField {...params} label="Card name..." />}
                />
            </div>

            <div>
                <div style={{ marginBottom: "10px", marginTop: "20px", color: "#888" }}>
                    Put that card in...
                </div>
                <button className="btn" onClick={() => addCardToList(false, setCardsInHand)}>Hand</button>
                <button className="btn" onClick={() => addCardToList(true, setCardsInDeck)}>Deck (Top)</button>
                <button className="btn" onClick={() => addCardToList(true, setCardsInDiscard)}>Discard Pile (Top)</button>
                <button className="btn" onClick={() => addCardToList(false, setCardsInDiscard)}>Discard Pile (Bottom)</button>
            </div>
        </div>
    );
}



/**
 * A widget for displaying an handful of card options (like the in game market) and allowing the
 * user to put cards from that market into the deck, discard pile, or hand.
 */
function CardMarket({ setCardsInHand, setCardsInDeck, setCardsInDiscard }) {
    const { selectedCard, setSelectedCard, addCardToList } = useCardTransfer();

    //TODO: find a better approach for getting such data
    const sampleMarket = [
        { label: "Clouded Sapphire", value: "Clouded_Sapphire" },
        { label: "Scoria Slag", value: "Scoria_Slag" },
        { label: "V'riswood Amber", value: "V'riswood_Amber" },
        { label: "Bottled Vortex", value: "Bottled_Vortex" },
        { label: "Unstable Prism", value: "Unstable_Prism" },
        { label: "Spectral Echo", value: "Spectral_Echo" },
        { label: "Conjure the Lost", value: "Conjure_the_Lost" },
    ];

    let imageDisplay = null;
    if (selectedCard !== null) {
        const url = (selectedCard === null ? null : `${BASE_URL}cards/${selectedCard.value}.webp`);
        imageDisplay = (
            <img src={url} alt={selectedCard.label} style={{ maxHeight: "100%" }} />
        )
    }


    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flexBasis: "40%", flexGrow: 0, flexShrink: 0 }}>
                <Box>
                    <Grid container spacing={1}>
                        {
                            sampleMarket.map((data, index) => (
                                <Grid
                                    key={index}
                                    sx={{
                                        border: "1px solid #ccc",
                                        borderRadius: 1,
                                        padding: 2,
                                        textAlign: "center",
                                        cursor: "pointer",
                                        transition: "background-color 0.3s",
                                        "&:hover": {
                                            backgroundColor: "#f0f0f0",
                                        },
                                    }}
                                    onClick={() => setSelectedCard(data)}
                                >
                                    {data.label}
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </div>

            <div style={{ flexBasis: "30%", flexGrow: 0, flexShrink: 0 }}>
                {imageDisplay}
            </div>

            <div style={{ flexBasis: "30%", flexGrow: 0, flexShrink: 0 }}>
                <div className="vertical-stack">
                    <div>
                        Put that card in...
                    </div>
                    <button className="btn" onClick={() => addCardToList(false, setCardsInHand)}>Hand</button>
                    <button className="btn" onClick={() => addCardToList(true, setCardsInDeck)}>Deck (Top)</button>
                    <button className="btn" onClick={() => addCardToList(true, setCardsInDiscard)}>Discard Pile (Top)</button>
                    <button className="btn" onClick={() => addCardToList(false, setCardsInDiscard)}>Discard Pile (Bottom)</button>
                </div>
            </div>
        </div>
    );
}



/**
 * Custom hook that provides a state variable to track what card is selected, and a
 * function for moving the selected card to the appropriate place.
 * @returns A getter and setter for the selectedItem state and a function for moving
 *      the actual item.
 */
function useCardTransfer() {
    const [selectedCard, setSelectedCard] = useState(null);

    const addCardToList = (putAtEnd, listSetter) => {
        if (selectedCard === null) {
            return;
        }

        if (putAtEnd) {
            listSetter(prev => [...prev, selectedCard.value]);
        }
        else {
            listSetter(prev => [selectedCard.value, ...prev]);
        }

        setSelectedCard(null);
    }


    return { selectedCard, setSelectedCard, addCardToList };
}
