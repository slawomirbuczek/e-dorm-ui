import "../../Styles/Conversations/Conversations.scss"
import {useEffect, useState} from "react"
import IConversation from "../../Types/Conversations/IConversation"
import sendRequest from "../../../../../Authentication/sendRequest"
import EApiMethods from "../../../../../Utils/Types/EApiMethods"
import IConversationsProps from "../../Types/Conversations/IConversationsProps"
import Conversation from "./Conversation"

const Conversations = ({onClick}: IConversationsProps) => {
    const [selectedConversation, setSelectedConversation] = useState<number>(-1)
    const [conversations, setConversations] = useState<IConversation[]>([])

    useEffect(() => {
        getConversations()
    }, [])

    const getConversations = async () => {
        const result = await sendRequest(EApiMethods.GET, '/conversations')
        setConversations(result)
    }

    const handleOnClick = (conversationId: number) => {
        onClick(conversationId)
        setSelectedConversation(conversationId)
    }

    return (
        <div className="conversations-wrapper">
            {
                conversations.map(
                    (conversation) => (
                        <Conversation
                            conversation={conversation}
                            onClick={() => handleOnClick(conversation.conversationId)}
                            conversationSelected={selectedConversation}
                        />
                    )
                )
            }
        </div>
    )
}

export default Conversations