import IConversation from "./IConversation";

export default interface IConversationProps {
    onClick: () => void;
    conversation: IConversation;
}