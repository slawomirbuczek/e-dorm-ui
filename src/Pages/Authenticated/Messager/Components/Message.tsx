import IMessageProps from "../Types/IMessageProps";
import getImageFromResponse from "../../../../Utils/Functions/getImageFromResponse";
import parseDateToSelectedFormat from "../../../../Utils/Functions/parseDateToSelectedFormat";
import {EParseDateMethods} from "../../../../Utils/Types/EParseDateMethods";

const Message = ({message}: IMessageProps) => {

    const {createDate, content, image, sentByUser} = message;

    return (
        <div className={`message ${sentByUser ? "self" : "user"}`}>
            {
                image ? <img src={getImageFromResponse(image)} alt="message"/> : <p>{content}</p>
            }
            <p className="date">{parseDateToSelectedFormat(new Date(createDate), EParseDateMethods.HHMMSS_DD_MM_YYYY)}</p>
        </div>
    );

};

export default Message;