import { ModalShowing } from "../data/constants";
import TurnTracker from "./TurnTracker";


export default function Toolbar({ setModalShowing }){
    return (
        <div id="toolbar" style={toolbarStyle}>
            <h3 style={{ margin: "5px", textDecoration: "underline" }}>ToolBar</h3>
            <TurnTracker />
            <button onClick={() => setModalShowing(ModalShowing.ADD_NEW_CARDS)}>Add New Cards</button>
            <button onClick={() => setModalShowing(ModalShowing.REORDER_DECK)}>Reorder Deck</button>
            <button onClick={() => setModalShowing(ModalShowing.REORDER_DISCARD)}>Reorder Discard Pile</button>
            {/* TODO: add more tools here */}
        </div>
    );
}


const toolbarStyle = {
    border: "1px solid #ccc",
    padding: "0px 10px",
    backgroundColor: "#f9f9f9",
    display: "flex",
    flex: "15",
    flexDirection: "column",
    alignItems: "flex-center",
}
