import '../../Styles/topics/NewTopic.scss'
import React, {useState} from "react"
import INewTopicProps from "../../Types/topics/INewTopicProps";
import insertPicture from "../../../../../Assets/Images/insert-picture.png";
import Button from "../../../../../Components/Button";
import EButtonTypeList from "../../../../../Components/Button/Types/EButtonTypeList";
import sendRequestWithFile from "../../../../../Requests/sendRequestWithFile";
import EApiMethods from "../../../../../Utils/Types/EApiMethods";
import TextareaAutosize from 'react-textarea-autosize';

const NewTopic = ({onNewTopicAdded}: INewTopicProps) => {
    const [file, setFile] = useState<File | null>(null)
    const [content, setContent] = useState<string>("")

    const addNewTopic = async () => {
        const formData = new FormData()
        formData.append("content", content)

        if (file) {
            formData.append("file", file)
        }

        const response = await sendRequestWithFile(EApiMethods.POST, '/topics', formData)
        response === "" && onNewTopicAdded()

        setFile(null)
        setContent("")
    }

    return (
        <div className="new-topic-wrapper">
            <p className="new-topic-header">
                Dodaj nowy post
            </p>
            <TextareaAutosize
                onChange={
                    (event) => {
                        setContent(event.target.value)
                    }
                }
                value={content}
                placeholder="Aa"
                minRows={5}
            />
            {
                file &&
                <img className="new-topic-input-file-preview" src={URL.createObjectURL(file)} alt="preview"/>
            }
            <label htmlFor="new-topic-input-file">
                <img className="new-topic-input-file-image" src={insertPicture} alt={"insert"}/>
            </label>
            <input
                id="new-topic-input-file"
                type="file"
                accept="image/*"
                onChange={
                    (event) => {
                        event.target.files && setFile(event.target.files[0])
                    }
                }
            />
            <Button
                type={EButtonTypeList.PRIMARY}
                value="Wy??lij"
                onClick={() => addNewTopic()}
            />
        </div>
    )
}

export default NewTopic