import {useEffect, useState} from "react";
import sendRequest from "../../../Authentication/sendRequest";
import EApiMethods from "../../../Utils/Types/EApiMethods";
import IConversation from "./Types/IConversation";
import IMessage from "./Types/IMessage";
import Conversation from "./Components/Conversation";
import "./Styles/Messager.scss";
import Messages from "./Components/Messages";

const Messager = (): JSX.Element => {
    const [conversations, setConversations] = useState<IConversation[] | null>(null);
    const [messages, setMessages] = useState<IMessage[] | null>(null);
    const [conversationId, setConversationId] = useState<number | null>(null);

    useEffect(() => {
        const getData = async () => {
            const result = await sendRequest(EApiMethods.GET, '/conversations');

            return setConversations(result);
        };

        getData();
    }, []);

    const getMessages = async (conversationId: number) => {
        const result = await sendRequest(EApiMethods.GET, "/messages/" + conversationId);
        setMessages(result);
        setConversationId(conversationId);
    };


    return (
        <div className="messager-wrapper">
            <div className="messager-conversations">
                <div className="messager-new-conversation">

                </div>
                {
                    conversations && conversations.map(
                        (conversation) => (
                            <Conversation
                                conversation={conversation}
                                onClick={() => getMessages(conversation.conversationId)}
                            />
                        )
                    )
                }
            </div>
            {
                messages && conversationId && <Messages messages={messages} conversationId={conversationId}/>
            }
        </div>
    );
};

export default Messager;