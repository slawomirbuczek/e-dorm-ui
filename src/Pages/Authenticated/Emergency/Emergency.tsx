import Tickets from "./Components/Tickets/Tickets";
import {useState} from "react";
import sendRequest from "../../../Authentication/sendRequest";
import EApiMethods from "../../../Utils/Types/EApiMethods";
import ITicket from "./Types/Tickets/ITicket";
import "./Styles/Emergency.scss";
import NewTicket from "./Components/Tickets/NewTicket";
import TicketMessages from "./Components/TicketMessages/TicketMessages";


const Emergency = () => {
    const [tickets, setTickets] = useState<ITicket[] | null>(null);
    const [ticketId, setTicketId] = useState<number>(0);

    const getData = async () => {
        const result = await sendRequest(EApiMethods.GET, '/tickets');
        return setTickets(result);
    };

    return (
        <div className="emergency-wrapper">
            <div className="emergency-tickets">
                <NewTicket onNewTicketAdded={() => getData()}/>
                <div className="emergency-tickets-border"/>
                <Tickets onClick={(ticketId) => setTicketId(ticketId)}/>
            </div>
            <div className="emergency-ticket-messages">
                {
                    ticketId != 0 && <TicketMessages ticketId={ticketId}/>
                }
            </div>
        </div>
    );

};

export default Emergency;