import "./Styles/TicketsBoard.scss"
import {useEffect, useState} from "react"
import NewTicket from "./Components/Tickets/NewTicket"
import TicketMessages from "./Components/TicketMessages/TicketMessages"
import Tickets from "./Components/Tickets/Tickets";


const TicketsBoard = () => {
    const [selectedTicketId, setSelectedTicketId] = useState<number | null>(null)
    const [ticketClosed, setTicketClosed] = useState<boolean>(false)

    return (
        <div className="emergency-wrapper">
            <div className="emergency-tickets">
                <NewTicket
                    onNewTicketAdded={
                    (newTicketId) => {
                        setSelectedTicketId(newTicketId)
                        setTicketClosed(false)
                    }
                }
                />
                <div className="emergency-tickets-border"/>
                <Tickets
                    ticketId={selectedTicketId}
                    onTicketSelected={
                        (ticketId, ticketClosed) => {
                            setSelectedTicketId(ticketId)
                            setTicketClosed(ticketClosed)
                        }
                    }
                />
            </div>
            <div className="emergency-ticket-messages">
                {
                    selectedTicketId &&
                    <TicketMessages
                        selectedTicketId={selectedTicketId}
                        ticketClosed={ticketClosed}
                    />
                }
            </div>
        </div>
    )

}

export default TicketsBoard