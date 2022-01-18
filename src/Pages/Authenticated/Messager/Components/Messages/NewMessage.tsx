import EApiMethods from "../../../../../Utils/Types/EApiMethods"
import INewMessageProps from "../../Types/Messages/INewMessageProps"
import sendRequestWithFile from "../../../../../Requests/sendRequestWithFile";
import React from "react";
import MessageInput from "../../../../../Components/MessageInput/MessageInput";

const NewMessage = ({conversationId, onNewMessageAdded}: INewMessageProps) => {

    const addNewMessage = async (content: string, file: File | null) => {
        const formData = new FormData()
        formData.append("content", content)

        if (file) {
            formData.append("file", file)
        }

        const response = await sendRequestWithFile(EApiMethods.POST, '/messages/' + conversationId, formData)
        response === "" && onNewMessageAdded()
    }

    return (
        <MessageInput onMessageAdded={(content, file) => addNewMessage(content, file)}/>
    )
}

export default NewMessage