import "../../Styles/TicketMessages/TicketMessages.scss";
import ITicketMessagesProps from "../../Types/TicketMessages/ITicketMessagesProps";
import TicketMessage from "./TicketMessage";
import NewTicketMessage from "./NewTicketMessage";
import sendRequest from "../../../../../Authentication/sendRequest";
import EApiMethods from "../../../../../Utils/Types/EApiMethods";
import {useEffect, useState} from "react";
import ITicketMessage from "../../Types/TicketMessages/ITicketMessage";

const TicketMessages = ({ticketId}: ITicketMessagesProps) => {
    const [ticketMessages, setTicketMessages] = useState<ITicketMessage[]>([]);

    useEffect(() => {
        getTicketMessages(ticketId);
    }, [ticketId]);

    const getTicketMessages = async (ticketId: number) => {
        const result = await sendRequest(EApiMethods.GET, "/ticket-messages/" + ticketId);
        setTicketMessages(result);
    };

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
                ticketId={ticketId}
                onNewTicketMessageAdded={() => getTicketMessages(ticketId)}
            />
        </div>
    );
};

export default TicketMessages;