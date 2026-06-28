import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useNavigate } from "react-router-dom";



/**
 * Display a back link button that navigates to the character picker.
 * @param {string} className - Any additional class names to apply to the button.
 * @param {string} linkText - The text to display for the link. Defaults to "Select a different character".
 */
export default function BackLink({ className = "", linkText = "Select a different character" }) {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate("/", { replace: true })}
            className={className}
            style={{
                display: "inline-flex",
                alignItems: "center",
                background: "none",
                border: "none",
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer"
            }}
        >
            <NavigateBeforeIcon />
            {linkText}
        </button>
    );
}
