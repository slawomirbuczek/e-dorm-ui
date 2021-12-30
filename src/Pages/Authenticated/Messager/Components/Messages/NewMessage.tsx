import "../../Styles/Messages/NewMessage.scss"
import insertPicture from "../../../../../Assets/Images/insert-picture.png"
import sendRequest from "../../../../../Authentication/sendRequest"
import EApiMethods from "../../../../../Utils/Types/EApiMethods"
import sendFile from "../../../../../Authentication/sendFile"
import INewMessageProps from "../../Types/Messages/INewMessageProps"

const NewMessage = ({conversationId, onNewMessageAdded}: INewMessageProps) => {

    const sendContentMessage = async (content: string) => {
        const data = {content}
        const response = await sendRequest(EApiMethods.POST, '/messages/' + conversationId + '/content', data)
        response === "" && onNewMessageAdded()
    }

    const sendImageMessage = async (event: HTMLInputElement) => {
        if (event.files) {
            const file = event.files[0]
            const imageData = new FormData()
            imageData.append("image", file)

            const response = await sendFile(EApiMethods.POST, '/messages/' + conversationId + '/image', imageData)
            response === "" && onNewMessageAdded()
        }
    }

    return (
        <div className="new-message-wrapper">
            <div className="input-file-wrapper">
                <label htmlFor="input-file">
                    <img src={insertPicture} alt={"insert"}/>
                </label>
                <input
                    id="input-file"
                    type="file"
                    accept="image/*"
                    onChange={
                        (event) => {
                            sendImageMessage(event.target as HTMLInputElement)
                        }
                    }
                />
            </div>
            <div className="input-content-wrapper">
                <input
                    type="text"
                    onKeyPress={
                        (event) => {
                            if (event.key === 'Enter') {
                                sendContentMessage((event.target as HTMLInputElement).value);
                                (event.target as HTMLInputElement).value = ""
                            }
                        }
                    }
                    placeholder="Aa"
                />
            </div>
        </div>
    )
}

export default NewMessage