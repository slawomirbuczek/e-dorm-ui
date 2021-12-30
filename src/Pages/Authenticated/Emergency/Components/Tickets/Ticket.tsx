import "../../Styles/Tickets/Ticket.scss"
import ITicketProps from "../../Types/Tickets/ITicketProps"
import parseDateToSelectedFormat from "../../../../../Utils/Functions/parseDateToSelectedFormat"
import {EParseDateMethods} from "../../../../../Utils/Types/EParseDateMethods"
import getValueFromTicketType from "../../Utils/ticketTypesValue"
import Button from "../../../../../Components/Button"
import EButtonTypeList from "../../../../../Components/Button/Types/EButtonTypeList"
import sendRequest from "../../../../../Authentication/sendRequest"
import EApiMethods from "../../../../../Utils/Types/EApiMethods"


const Ticket = ({ticket, onTicketSelected, selectedTicketId, onTicketClosed}: ITicketProps): JSX.Element => {
    const {type, subject, createDate, open} = ticket

    const formattedDate = parseDateToSelectedFormat(new Date(createDate), EParseDateMethods.HHMMSS_DD_MM_YYYY)

    const closeTicket = async () => {
        const response = await sendRequest(EApiMethods.PUT, '/tickets/' + ticket.id)
        response === "" && onTicketClosed()
    }

    return (
        <div
            className={`ticket-wrapper ${selectedTicketId === ticket.id ? "selected" : ""}`}
            onClick={() => onTicketSelected()}
        >
            <p className="ticket-header">Zgłoszenie:</p>
            <p><b>Temat:</b> {subject}</p>
            <p><b>Typ:</b> {getValueFromTicketType(type)}</p>
            <p><b>Data:</b> {formattedDate}</p>
            <p><b>Stan zgłoszenia:</b> {open ? 'otwarte' : 'zamknięte'}</p>
            {
                open &&
                <Button
                    value="Zamknij zgłoszenie"
                    onClick={() => closeTicket()}
                    type={EButtonTypeList.PRIMARY}
                />
            }
        </div>
    )

}

export default Ticket