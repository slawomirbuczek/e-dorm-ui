import "../../Styles/Messages/Messages.scss"
import IMessagesProps from "../../Types/Messages/IMessagesProps"
import IMessage from "../../Types/Messages/IMessage"
import sendRequest from "../../../../../Requests/sendRequest"
import EApiMethods from "../../../../../Utils/Types/EApiMethods"
import {useEffect, useState} from "react"
import Message from "./Message"
import NewMessage from "./NewMessage"

const Messages = ({conversationId}: IMessagesProps) => {
    const [messages, setMessages] = useState<IMessage[]>([])

    useEffect(() => {
        getMessages()
    }, [conversationId])

    const getMessages = async () => {
        const result = await sendRequest(EApiMethods.GET, "/messages/" + conversationId)
        setMessages(result)
    }

    return (
        <div className="messages-wrapper">
            <div className="messages-content">
                {
                    messages.map(
                        (message) => (
                            <Message message={message}/>
                        )
                    )
                }
            </div>
            <NewMessage conversationId={conversationId} onNewMessageAdded={() => getMessages()}/>
        </div>
    )
}

export default Messages

