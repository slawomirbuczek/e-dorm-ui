import ITicket from "./ITicket"

export default interface ITicketProps {
    ticket: ITicket
    onTicketSelected: () => void
    onTicketClosed: () => void
    selectedTicketId: number | null
}