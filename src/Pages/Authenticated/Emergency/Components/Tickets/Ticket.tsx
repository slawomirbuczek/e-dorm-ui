import "../../Styles/Tickets/Ticket.scss";
import ITicketProps from "../../Types/Tickets/ITicketProps";
import parseDateToSelectedFormat from "../../../../../Utils/Functions/parseDateToSelectedFormat";
import {EParseDateMethods} from "../../../../../Utils/Types/EParseDateMethods";
import getValueFromTicketType from "../../Utils/ticketTypesValue";


const Ticket = ({ticket, onClick, ticketSelected}: ITicketProps): JSX.Element => {
    const {type, subject, createDate, open} = ticket;

    const formattedDate = parseDateToSelectedFormat(new Date(createDate), EParseDateMethods.HHMMSS_DD_MM_YYYY);

    return (
        <div className={`ticket-wrapper ${ticketSelected == ticket.id ? "selected" : ""}`} onClick={() => onClick()}>
            <p className="ticket-subject"><b>Temat:</b> {subject}</p>
            <p className="ticket-type"><b>Typ:</b> {getValueFromTicketType(type)}</p>
            <p className="ticket-open"><b>Stan ogłoszenia:</b> {open ? 'otwarte' : 'zamknięte'}</p>
            <p className="ticket-create-date"><b>Data:</b> {formattedDate}</p>
        </div>
    );

};

export default Ticket;