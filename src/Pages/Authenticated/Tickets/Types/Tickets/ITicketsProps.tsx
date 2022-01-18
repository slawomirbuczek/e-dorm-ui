export default interface ITicketsProps {
    ticketId: number | null
    onTicketSelected: (ticketId: number, ticketClosed: boolean) => void
}