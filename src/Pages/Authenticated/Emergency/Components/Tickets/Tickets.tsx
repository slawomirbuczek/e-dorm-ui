import "../../Styles/Tickets/Tickets.scss"
import ITicketsProps from "../../Types/Tickets/ITicketsProps"
import Ticket from "./Ticket"
import {useEffect, useState} from "react"
import sendRequest from "../../../../../Authentication/sendRequest"
import EApiMethods from "../../../../../Utils/Types/EApiMethods"
import ITicket from "../../Types/Tickets/ITicket"

const Tickets = ({ticketId, onTicketSelected}: ITicketsProps) => {
    const [tickets, setTickets] = useState<ITicket[]>([])

    useEffect(() => {
        getTickets()
    }, [ticketId])

    const getTickets = async () => {
        const result = await sendRequest(EApiMethods.GET, '/tickets')
        setTickets(result)
    }

    const handleOnTicketClosed = (closedTicketId: number) => {
        getTickets()
        onTicketSelected(closedTicketId, true)
    }

    return (
        <div className="tickets-wrapper">
            {
                tickets.map(
                    (ticket) => (
                        <Ticket
                            ticket={ticket}
                            selectedTicketId={ticketId}
                            onTicketSelected={() => onTicketSelected(ticket.id, !ticket.open)}
                            onTicketClosed={() => handleOnTicketClosed(ticket.id)}
                        />
                    )
                )
            }
        </div>
    )
}

export default Tickets