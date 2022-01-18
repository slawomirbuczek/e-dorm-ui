import "./Styles/MessageInput.scss"
import insertPicture from "../../Assets/Images/insert-picture.png";
import Button from "../Button";
import EButtonTypeList from "../Button/Types/EButtonTypeList";
import React, {useState} from "react";
import IMessageInputProps from "./Types/IMessageInputProps";

const MessageInput = ({onMessageAdded}: IMessageInputProps) => {
    const [content, setContent] = useState<string>("")
    const [file, setFile] = useState<File | null>(null)

    const handleOnMessageAdded = () => {
        onMessageAdded(content, file)
        setFile(null)
        setContent("")
    }

    return(
        <div className="message-input-wrapper">
            <div className="input-file-wrapper">
                <label htmlFor="input-file">
                    <img className="input-file-insert" src={insertPicture} alt={"insert"}/>
                </label>
                <input
                    id="input-file"
                    type="file"
                    accept="image/*"
                    onChange={
                        (event) => {
                            event.target.files && setFile(event.target.files[0])
                        }
                    }
                />
                {
                    file &&
                    <img className="input-file-preview" src={URL.createObjectURL(file)} alt="preview"/>
                }
            </div>
            <div className="input-content-wrapper">
                <input
                    type="text"
                    onChange={
                        (event) => {
                            setContent(event.target.value)
                        }
                    }
                    value={content}
                    placeholder="Aa"
                />
            </div>
            <Button
                type={EButtonTypeList.PRIMARY}
                value="Wyślij"
                onClick={handleOnMessageAdded}
            />
        </div>
    )
}

export default MessageInput