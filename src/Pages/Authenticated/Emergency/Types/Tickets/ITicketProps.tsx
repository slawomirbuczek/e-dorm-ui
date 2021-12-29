import ITicket from "./ITicket";

export default interface ITicketProps {
    ticket: ITicket;
    onClick: () => void;
    ticketSelected: number;
}