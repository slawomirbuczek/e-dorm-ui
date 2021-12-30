import "../../Styles/TicketMessages/NewTicketMessage.scss"
import insertPicture from "../../../../../Assets/Images/insert-picture.png"
import INewTicketMessageProps from "../../Types/TicketMessages/INewTicketMessageProps"
import sendRequest from "../../../../../Authentication/sendRequest"
import EApiMethods from "../../../../../Utils/Types/EApiMethods"
import sendFile from "../../../../../Authentication/sendFile"

const NewTicketMessage = ({
                              ticketId,
                              onNewTicketMessageAdded,
                              ticketClosed
                          }: INewTicketMessageProps) => {

    const sendContentTicketMessage = async (content: string) => {
        const data = {content}
        const response = await sendRequest(EApiMethods.POST, '/ticket-messages/' + ticketId + '/content', data)
        response === "" && onNewTicketMessageAdded()
    }

    const sendImageTicketMessage = async (event: HTMLInputElement) => {
        if (event.files) {
            const file = event.files[0]
            const imageData = new FormData()
            imageData.append("image", file)

            const response = await sendFile(EApiMethods.POST, '/ticket-messages/' + ticketId + `/image`, imageData)
            response === "" && onNewTicketMessageAdded()
        }
    }

    return (
        <div className="new-ticket-message-wrapper">
            {
                !ticketClosed &&
                <div className="new-ticket-message-content">
                    <div className="input-file">
                        <label htmlFor="input-file">
                            <img src={insertPicture} alt={"insert"}/>
                        </label>
                        <input
                            id="input-file"
                            type="file"
                            accept="image/*"
                            onChange={
                                (event) => {
                                    sendImageTicketMessage(event.target as HTMLInputElement)
                                }
                            }
                        />
                    </div>
                    <div className="input-content">
                        <input
                            type="text"
                            onKeyPress={
                                (event) => {
                                    if (event.key === 'Enter') {
                                        sendContentTicketMessage((event.target as HTMLInputElement).value);
                                        (event.target as HTMLInputElement).value = ""
                                    }
                                }
                            }
                            placeholder="Aa"
                        />
                    </div>
                </div>
            }
        </div>
    )

}

export default NewTicketMessage