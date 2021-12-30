import "../../Styles/Tickets/NewTicket.scss"
import {useState} from "react"
import Select from "../../../../../Components/Form/Select/Select"
import selectOptions from "../../Utils/selectOptions"
import FormInput from "../../../../../Components/Form/Input"
import EInputTypes from "../../../../../Components/Form/Input/Types/EInputTypes"
import Button from "../../../../../Components/Button"
import EButtonTypeList from "../../../../../Components/Button/Types/EButtonTypeList"
import EApiMethods from "../../../../../Utils/Types/EApiMethods"
import sendRequest from "../../../../../Authentication/sendRequest"
import INewTicketProps from "../../Types/Tickets/INewTicketProps"
import ETicketType from "../../Types/Tickets/ETicketType"

const NewTicket = ({onNewTicketAdded}: INewTicketProps) => {
    const [ticketType, setTicketType] = useState<string>(ETicketType.ADMINISTRATION)
    const [ticketSubject, setTicketSubject] = useState<string>("")

    const createNewTicket = async () => {
        const data = {
            type: ticketType,
            subject: ticketSubject
        }

        const {newTicketId} = await sendRequest(EApiMethods.POST, "/tickets", data)
        newTicketId && await sendTicketMessageWithSubject(newTicketId, ticketSubject)
        newTicketId && onNewTicketAdded(newTicketId)
        setTicketSubject("")
    }

    const sendTicketMessageWithSubject = async (ticketId: number, content: string) => {
        const data = {content}
        await sendRequest(EApiMethods.POST, '/ticket-messages/' + ticketId + '/content', data)
    }


    return (
        <div className="new-ticket-wrapper">
            <p className="new-ticket-header">Dodaj nowe zgłoszenie:</p>
            <Select
                onChange={(type) => setTicketType(type as string)}
                options={selectOptions}
                header="Typ zgłoszenia:"
            />
            <FormInput
                header="Temat:"
                onChange={(subject) => setTicketSubject(subject)}
                type={EInputTypes.TEXT}
                value={ticketSubject}
            />
            <Button
                value="Dodaj"
                onClick={() => createNewTicket()}
                type={EButtonTypeList.SECONDARY}
            />
        </div>
    )

}

export default NewTicket