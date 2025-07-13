
/**
 * Allows the user to keep track of the turn count.
 * 
 * @param {number} turnNumber - The state variable used to track the current turn.
 * @param {function} setTurnNumber - A function for changing the Current turn.
 */
export default function TurnTracker({ turnNumber, setTurnNumber }) {
    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "0px",
            marginBottom: "10px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            fontFamily: "sans-serif"
        }}>
            <h3 style={{ marginTop: "2px", marginBottom: "5px", fontSize: "1.1rem" }}>Turn Tracker</h3>
            <label style={{ fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                Turn
                <input
                    type="number"
                    min={1}
                    value={turnNumber}
                    onChange={(e) => setTurnNumber(parseInt(e.target.value) || 1)}
                    style={{
                        width: "40px",
                        fontSize: "1rem",
                        padding: "4px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        textAlign: "center"
                    }}
                />
            </label>
        </div>
    );
}