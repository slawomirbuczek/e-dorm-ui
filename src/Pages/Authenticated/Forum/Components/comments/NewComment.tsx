import '../../Styles/comments/NewComment.scss'
import React, {useState} from "react"
import insertPicture from "../../../../../Assets/Images/insert-picture.png";
import EApiMethods from "../../../../../Utils/Types/EApiMethods";
import INewCommentProps from "../../Types/comments/INewCommentProps";
import Button from "../../../../../Components/Button";
import EButtonTypeList from "../../../../../Components/Button/Types/EButtonTypeList";
import sendRequestWithFile from "../../../../../Authentication/sendRequestWithFile";
import getImageFromResponse from "../../../../../Utils/Functions/getImageFromResponse";

const NewComment = ({topicId, onNewCommentAdded}: INewCommentProps) => {
    const [file, setFile] = useState<File | null>(null)
    const [content, setContent] = useState<string>("")

    const addNewComment = async () => {
        const formData = new FormData()
            formData.append("content", content)

        if (file) {
            console.log("appendingFIle");
            console.log(file);
            formData.append("image", file)
        }


        console.log(formData);

/*        const response = await sendRequestWithFile(EApiMethods.POST, '/posts/' + topicId, formData)
        response === "" && onNewCommentAdded()*/

        setFile(null)
        setContent("")
    }

    const handler = (ef: File) => {
        setFile(ef)
    }

    return (
        <div className="new-comment-wrapper">
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
                            event.target.files && handler(event.target.files[0])
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
                    placeholder="Aa"
                />
            </div>
            <Button
                type={EButtonTypeList.PRIMARY}
                value="Wyślij"
                onClick={() => addNewComment()}
            />
        </div>
    )
}

export default NewComment