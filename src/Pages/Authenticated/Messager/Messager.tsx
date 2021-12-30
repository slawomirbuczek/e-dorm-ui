import "./Styles/Messager.scss"
import {useState} from "react"
import Messages from "./Components/Messages/Messages"
import NewConversation from "./Components/Conversations/NewConversation"
import Conversations from "./Components/Conversations/Conversations"

const Messager = () => {
    const [conversationId, setConversationId] = useState<number>(0)

    return (
        <div className="messager-wrapper">
            <div className="messager-conversations">
                <NewConversation onNewConversationAdded={(newConversationId) => setConversationId(newConversationId)}/>
                <div className="messager-conversations-border"/>
                <Conversations onClick={(selectedTicketId) => setConversationId(selectedTicketId)}/>
            </div>
            <div className="messager-messages">
                {
                    conversationId !== 0 && <Messages conversationId={conversationId}/>
                }
            </div>
        </div>
    )
}

export default Messager