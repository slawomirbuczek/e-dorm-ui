import '../../Styles/comments/Comment.scss'
import React, {useEffect} from "react"
import ICommentProps from "../../Types/comments/ICommentProps";
import getImageFromResponse from "../../../../../Utils/Functions/getImageFromResponse";
import parseDateToSelectedFormat from "../../../../../Utils/Functions/parseDateToSelectedFormat";
import {EParseDateMethods} from "../../../../../Utils/Types/EParseDateMethods";

const Comment = ({comment}: ICommentProps) => {

    const {photo, fullName, content, image, createDate, edited} = comment

    return (
        <div className="comment-wrapper">
            <img className="photo" src={getImageFromResponse(photo)} alt="user"/>
            <div className="comment-main">
                <p className="username">{fullName}</p>
                <p className="content">{content}</p>
                {image && <img className="image" src={getImageFromResponse(image)} alt="content"/>}
                <div className="comment-info">
                    <p className="edited">{edited ? "edited" : ""}</p>
                    <p className="date">
                        {parseDateToSelectedFormat(new Date(createDate), EParseDateMethods.HHMMSS_DD_MM_YYYY)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Comment