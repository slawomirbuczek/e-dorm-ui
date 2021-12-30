export default interface ITicketMessage {
    id: number
    content: string | null
    image: string | null
    createDate: string
    sendByUser: boolean
}