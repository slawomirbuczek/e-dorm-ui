import "../../Styles/TicketMessages/TicketMessage.scss"
import ITicketMessageProps from "../../Types/TicketMessages/ITicketMessageProps"
import getImageFromResponse from "../../../../../Utils/Functions/getImageFromResponse"
import parseDateToSelectedFormat from "../../../../../Utils/Functions/parseDateToSelectedFormat"
import {EParseDateMethods} from "../../../../../Utils/Types/EParseDateMethods"

const TicketMessage = ({ticketMessage}: ITicketMessageProps) => {

    const {content, image, sentByUser, createDate} = ticketMessage

    return (
        <div className={`ticket-message ${sentByUser ? "self" : "user"}`}>
            {
                image ? <img src={getImageFromResponse(image)} alt="message"/> : <p>{content}</p>
            }
            <p className="date">{parseDateToSelectedFormat(new Date(createDate), EParseDateMethods.HHMMSS_DD_MM_YYYY)}</p>
        </div>
    )
}

export default TicketMessage