import React from "react"
import IPost from "../Types/IPost"
import '../Styles/Post.scss'
import getImageFromResponse from "../../../../Utils/Functions/getImageFromResponse"

const Post = ({post}: IPost) => {
    const {id, photo, fullName, date, content, image, edited} = post

    return (
        <div className="post-wrapper">
            {photo && <img className="photo" src={getImageFromResponse(photo)} alt="user"/>}
            <div className="post-content">
                <p className="username">{fullName}</p>
                <p className="content">{content}</p>
                {image && <img className="image" src={getImageFromResponse(image)} alt="content"/>}
            </div>
            <div className="post-info">
                <p className="edited">{edited ? "edited" : ""}</p>
                <p className="date">{date}</p>
            </div>
        </div>
    )
}

export default Post