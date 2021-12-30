import "../../Styles/Messages/Message.scss"
import IMessageProps from "../../Types/Messages/IMessageProps"
import getImageFromResponse from "../../../../../Utils/Functions/getImageFromResponse"
import parseDateToSelectedFormat from "../../../../../Utils/Functions/parseDateToSelectedFormat"
import {EParseDateMethods} from "../../../../../Utils/Types/EParseDateMethods"

const Message = ({message}: IMessageProps) => {

    const {createDate, content, image, sentByUser} = message

    return (
        <div className={`message-wrapper ${sentByUser ? "self" : "user"}`}>
            {
                image ? <img src={getImageFromResponse(image)} alt="message"/> : <p>{content}</p>
            }
            <p>{parseDateToSelectedFormat(new Date(createDate), EParseDateMethods.HHMMSS_DD_MM_YYYY)}</p>
        </div>
    )

}

export default Message