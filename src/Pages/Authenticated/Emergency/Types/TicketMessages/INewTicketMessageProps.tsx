export default interface INewTicketMessageProps {
    ticketId: number
    ticketClosed: boolean
    onNewTicketMessageAdded: () => void
}