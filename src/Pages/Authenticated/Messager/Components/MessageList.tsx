import Message from "./Message";
import "../Styles/Messages.scss";
import IMessageListProps from "../Types/IMessageListProps";

const MessageList = ({messages}: IMessageListProps) => {
    return (
        <div className="messages-content">
            {
                messages.map(
                    (message) => (
                        <Message message={message}/>
                    )
                )
            }
        </div>
    );
};

export default MessageList;