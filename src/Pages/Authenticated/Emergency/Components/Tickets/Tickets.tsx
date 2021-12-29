import ITicketsProps from "../../Types/Tickets/ITicketsProps";
import Ticket from "./Ticket";
import "../../Styles/Tickets/Tickets.scss";
import {useEffect, useState} from "react";
import sendRequest from "../../../../../Authentication/sendRequest";
import EApiMethods from "../../../../../Utils/Types/EApiMethods";
import ITicket from "../../Types/Tickets/ITicket";

const Tickets = ({onClick}: ITicketsProps) => {
    const [selectedTicket, setSelectedTicket] = useState<number>(-1);
    const [tickets, setTickets] = useState<ITicket[] | null>(null);

    const handleOnClick = (ticketId: number) => {
        onClick(ticketId);
        setSelectedTicket(ticketId);
    }

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const result = await sendRequest(EApiMethods.GET, '/tickets');
        return setTickets(result);
    };

    return (
        <div className="tickets-wrapper">
            {
                tickets && tickets.map(
                    (ticket) => (
                        <Ticket
                            ticket={ticket}
                            onClick={() => handleOnClick(ticket.id)}
                            ticketSelected={selectedTicket}
                        />
                    )
                )
            }
        </div>
    );
};

export default Tickets;