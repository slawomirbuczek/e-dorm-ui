import IMessagesProps from "../Types/IMessagesProps";
import insertPicture from "Assets/Images/insert-picture.png";
import "../Styles/Messages.scss";
import IMessage from "../Types/IMessage";
import parseDateToSelectedFormat from "../../../../Utils/Functions/parseDateToSelectedFormat";
import {EParseDateMethods} from "../../../../Utils/Types/EParseDateMethods";
import sendRequest from "../../../../Authentication/sendRequest";
import EApiMethods from "../../../../Utils/Types/EApiMethods";
import {useState} from "react";
import MessageList from "./MessageList";
import sendFile from "../../../../Authentication/sendFile";
import * as fs from "fs";

const Messages = ({messages, conversationId}: IMessagesProps) => {

    const [appMessages, setAppMessages] = useState<IMessage[]>(messages);

    const sendContentMessage = async (content: string) => {
        const data = {content};
        const {isSuccess} = await sendRequest(EApiMethods.POST, '/messages/content/' + conversationId, data);
        isSuccess && addMessageToList(content, null);
    };

    const sendImageMessage = async (event: HTMLInputElement) => {
        if (event.files) {
            const file = event.files[0];
            const imageData = new FormData();
            imageData.append("image", file);

            const {isSuccess} = await sendFile(EApiMethods.POST, '/messages/image/' + conversationId, imageData);

            console.log(file);

            // console.log(imageFileToBase64(file.name));

        }
    };

    const imageFileToBase64 = (file: string) => {
        // read binary data
        const bitmap = fs.readFileSync(file);
        // convert binary data to base64 encoded string
        return new Buffer(bitmap).toString('base64');
    }


    const addMessageToList = (content: string | null, image: string | null) => {
        const date = parseDateToSelectedFormat(new Date(), EParseDateMethods.HHMMSS_DD_MM_YYYY);
        const message: IMessage = {
            content: content ? content : undefined,
            image: image ? image : undefined,
            sentByUser: true,
            createDate: date
        };
        const newAppMessages = appMessages.concat(message);
        setAppMessages(newAppMessages);
    };

    return (
        <div className="messages-wrapper">
            <MessageList messages={appMessages}/>
            <div className="messages-new-message">
                <div className="input-file">
                    <label htmlFor="input-file">
                        <img src={insertPicture} alt={"insert"}/>
                    </label>
                    <input
                        id="input-file"
                        type="file"
                        accept="image/*"
                        onChange={
                            event => {
                                sendImageMessage(event.target as HTMLInputElement);
                            }
                        }
                    />
                </div>
                <div className="input-content">
                    <input
                        type="text"
                        onKeyPress={
                            event => {
                                if (event.key === 'Enter') {
                                    sendContentMessage((event.target as HTMLInputElement).value);
                                    (event.target as HTMLInputElement).value = "";
                                }
                            }
                        }
                        placeholder="Aa"
                    />
                </div>
            </div>
        </div>
    );
};

export default Messages;

