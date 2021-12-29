import ETicketType from "./ETicketType";

export default interface ITicket {
    id: number;
    createDate: string;
    type: ETicketType;
    subject: string;
    open: boolean;
}

