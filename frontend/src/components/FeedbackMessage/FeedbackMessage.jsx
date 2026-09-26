import "./FeedbackMessage.css"
import { CircleAlert, LoaderCircle, Inbox, CircleCheck } from "lucide-react";

function FeedbackMessage({message, type}) {

    let Icon;

    if (type === "error") {
        Icon = CircleAlert;
    } else if (type === "loading") {
        Icon = LoaderCircle;
    } else if (type === "empty") {
        Icon = Inbox;
    } else if (type === "success") {
        Icon = CircleCheck
    }

    return(
        <div className={`feedback-message ${type}`}>
            <Icon />
            {message}
        </div>
    )
}

export default FeedbackMessage