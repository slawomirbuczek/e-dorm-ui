import "../../Styles/Messages/Message.scss"
import IMessageProps from "../../Types/Messages/IMessageProps"
import getImageFromResponse from "../../../../../Utils/Functions/getImageFromResponse"
import parseDateToSelectedFormat from "../../../../../Utils/Functions/parseDateToSelectedFormat"
import {EParseDateMethods} from "../../../../../Utils/Types/EParseDateMethods"
import React from "react";

const Message = ({message}: IMessageProps) => {

    const {createDate, content, image, sentByUser} = message

    return (
        <div className={`message-wrapper ${sentByUser ? "self" : "user"}`}>
            <p className="content">{content}</p>
            {image && <img className="image" src={getImageFromResponse(image)} alt="content"/>}
            <p className="date">{parseDateToSelectedFormat(new Date(createDate), EParseDateMethods.HHMMSS_DD_MM_YYYY)}</p>
        </div>
    )

}

export default Message