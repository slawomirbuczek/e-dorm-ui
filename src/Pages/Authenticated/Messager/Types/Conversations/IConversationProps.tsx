import IConversation from "./IConversation"

export default interface IConversationProps {
    conversation: IConversation
    onClick: () => void
    conversationSelected: number
}