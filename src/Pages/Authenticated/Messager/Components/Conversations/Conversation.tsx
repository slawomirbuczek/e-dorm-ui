import getImageFromResponse from "../../../../../Utils/Functions/getImageFromResponse"
import IConversationProps from "../../Types/Conversations/IConversationProps"
import "../../Styles/Conversations/Conversation.scss"

const Conversation = ({conversation, onClick, conversationSelected}: IConversationProps) => {
    const {fullName, photo} = conversation

    return (
        <div
            className={`conversation-wrapper ${conversationSelected === conversation.conversationId ? "selected" : ""}`}
            onClick={() => onClick()}
        >
            <img src={getImageFromResponse(photo)} alt="conversation"/>
            <p>{fullName}</p>
        </div>
    )
}

export default Conversation