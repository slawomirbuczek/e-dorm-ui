import INewTicketMessageProps from "../../Types/TicketMessages/INewTicketMessageProps"
import EApiMethods from "../../../../../Utils/Types/EApiMethods"
import React from "react";
import sendRequestWithFile from "../../../../../Requests/sendRequestWithFile";
import MessageInput from "../../../../../Components/MessageInput/MessageInput";

const NewTicketMessage = ({
                              ticketId,
                              onNewTicketMessageAdded,
                              ticketClosed
                          }: INewTicketMessageProps) => {

    const addNewTicketMessage = async (content: string, file: File | null) => {
        const formData = new FormData()
        formData.append("content", content)

        if (file) {
            formData.append("file", file)
        }

        const response = await sendRequestWithFile(EApiMethods.POST, '/ticket-messages/' + ticketId, formData)
        response === "" && onNewTicketMessageAdded()
    }

    return (
        <div className="new-ticket-message-wrapper">
            {
                !ticketClosed &&
                <MessageInput onMessageAdded={(content, file) => addNewTicketMessage(content, file)}/>
            }
        </div>
    )

}

export default NewTicketMessage