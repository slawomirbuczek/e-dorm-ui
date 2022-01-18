import React from "react"
import EApiMethods from "../../../../../Utils/Types/EApiMethods";
import INewCommentProps from "../../Types/comments/INewCommentProps";
import sendRequestWithFile from "../../../../../Requests/sendRequestWithFile";
import MessageInput from "../../../../../Components/MessageInput/MessageInput";

const NewComment = ({topicId, onNewCommentAdded}: INewCommentProps) => {

    const addNewMessage = async (content: string, file: File | null) => {
        const formData = new FormData()
        formData.append("content", content)

        if (file) {
            formData.append("file", file)
        }

        const response = await sendRequestWithFile(EApiMethods.POST, '/posts/' + topicId, formData)
        response === "" && onNewCommentAdded()
    }

    return (
            <MessageInput onMessageAdded={(content, file) => addNewMessage(content, file)}/>
    )
}

export default NewComment