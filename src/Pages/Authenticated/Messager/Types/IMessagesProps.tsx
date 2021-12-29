import IMessage from "./IMessage";

export default interface IMessagesProps {
    messages: IMessage[];
    conversationId: number;
}