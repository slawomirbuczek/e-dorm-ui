import "../../Styles/TicketMessages/TicketMessage.scss"
import ITicketMessageProps from "../../Types/TicketMessages/ITicketMessageProps"
import getImageFromResponse from "../../../../../Utils/Functions/getImageFromResponse"
import parseDateToSelectedFormat from "../../../../../Utils/Functions/parseDateToSelectedFormat"
import {EParseDateMethods} from "../../../../../Utils/Types/EParseDateMethods"
import React from "react";

const TicketMessage = ({ticketMessage}: ITicketMessageProps) => {

    const {content, image, sentByUser, createDate} = ticketMessage

    return (
        <div className={`ticket-message ${sentByUser ? "self" : "user"}`}>
            <p className="content">{content}</p>
            {image && <img className="image" src={getImageFromResponse(image)} alt="content"/>}
            <p className="date">{parseDateToSelectedFormat(new Date(createDate), EParseDateMethods.HHMMSS_DD_MM_YYYY)}</p>
        </div>
    )
}

export default TicketMessage