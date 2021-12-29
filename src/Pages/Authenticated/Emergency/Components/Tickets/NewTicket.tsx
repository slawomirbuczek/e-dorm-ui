import "../../Styles/Tickets/NewTicket.scss";
import {useState} from "react";
import Select from "../../../../../Components/Form/Select/Select";
import selectOptions from "../../Utils/selectOptions";
import FormInput from "../../../../../Components/Form/Input";
import EInputTypes from "../../../../../Components/Form/Input/Types/EInputTypes";
import Button from "../../../../../Components/Button";
import EButtonTypeList from "../../../../../Components/Button/Types/EButtonTypeList";
import EApiMethods from "../../../../../Utils/Types/EApiMethods";
import sendRequest from "../../../../../Authentication/sendRequest";
import INewTicketProps from "../../Types/Tickets/INewTicketProps";
import ETicketType from "../../Types/Tickets/ETicketType";

const NewTicket = ({onNewTicketAdded}: INewTicketProps): JSX.Element => {
    const [ticketType, setTicketType] = useState<string>(ETicketType.ADMINISTRATION);
    const [ticketSubject, setTicketSubject] = useState<string>("");

    const createNewTicket = async () => {
        const data = {
            type: ticketType,
            subject: ticketSubject
        }

        const result = await sendRequest(EApiMethods.POST, "/tickets", data);

        result && onNewTicketAdded();
        setTicketSubject("");
    };


    return (
        <div className="new-ticket-wrapper">
            <Select
                onChange={(type) => setTicketType(type)}
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
                value="Wyślij"
                onClick={() => createNewTicket()}
                type={EButtonTypeList.PRIMARY}
            />
        </div>
    );

};

export default NewTicket;