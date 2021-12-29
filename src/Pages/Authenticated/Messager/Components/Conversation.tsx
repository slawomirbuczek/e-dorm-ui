import getImageFromResponse from "../../../../Utils/Functions/getImageFromResponse";
import IConversationProps from "../Types/IConversationProps";
import "../Styles/Conversation.scss";

const Conversation = ({conversation, onClick}: IConversationProps) => {
    const {fullName, photo} = conversation;

    return (
        <div className="conversation-wrapper" onClick={() => onClick()}>
            <img src={getImageFromResponse(photo)} alt="conversation"/>
            <p>{fullName}</p>
        </div>
    );
};

export default Conversation;