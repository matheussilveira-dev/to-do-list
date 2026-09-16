import "./FeedbackMessage.css"
import { CircleAlert, LoaderCircle, Inbox } from "lucide-react";

function FeedbackMessage({message, type}) {

    let Icon;

    if (type === "error") {
        Icon = CircleAlert;
    } else if (type === "loading") {
        Icon = LoaderCircle;
    } else if (type === "empty") {
        Icon = Inbox;
    }

    return(
        <div className={`feedback-message ${type}`}>
            <Icon />
            {message}
        </div>
    )
}

export default FeedbackMessage