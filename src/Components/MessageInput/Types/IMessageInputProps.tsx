export default interface IMessageInputProps {
    onMessageAdded: (content: string, file: File | null) => void
}