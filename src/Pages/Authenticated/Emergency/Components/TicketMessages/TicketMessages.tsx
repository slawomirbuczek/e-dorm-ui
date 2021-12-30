import "../../Styles/TicketMessages/TicketMessages.scss"
import ITicketMessagesProps from "../../Types/TicketMessages/ITicketMessagesProps"
import TicketMessage from "./TicketMessage"
import sendRequest from "../../../../../Authentication/sendRequest"
import EApiMethods from "../../../../../Utils/Types/EApiMethods"
import {useEffect, useState} from "react"
import ITicketMessage from "../../Types/TicketMessages/ITicketMessage"
import NewTicketMessage from "./NewTicketMessage";

const TicketMessages = ({selectedTicketId, ticketClosed}: ITicketMessagesProps) => {
    const [ticketMessages, setTicketMessages] = useState<ITicketMessage[]>([])

    useEffect(() => {
        getTicketMessages()
    }, [selectedTicketId])

    const getTicketMessages = async () => {
        const result = await sendRequest(EApiMethods.GET, "/ticket-messages/" + selectedTicketId)
        setTicketMessages(result)
    }

    return (
        <div className="ticket-messages-wrapper">
            <div className="ticket-messages-content">
                {
                    ticketMessages.map(
                        (ticketMessage) => (
                            <TicketMessage ticketMessage={ticketMessage}/>
                        )
                    )
                }
            </div>
            <NewTicketMessage
                ticketId={selectedTicketId}
                ticketClosed={ticketClosed}
                onNewTicketMessageAdded={() => getTicketMessages()}
            />
        </div>
    )
}

export default TicketMessages