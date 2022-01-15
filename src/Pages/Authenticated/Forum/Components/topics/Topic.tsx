import '../../Styles/topics/Topic.scss'
import ITopicProps from "../../Types/topics/ITopicProps"
import getImageFromResponse from "../../../../../Utils/Functions/getImageFromResponse"
import React, {useState} from "react"
import parseDateToSelectedFormat from "../../../../../Utils/Functions/parseDateToSelectedFormat";
import {EParseDateMethods} from "../../../../../Utils/Types/EParseDateMethods";
import Comments from "../comments/Comments";


const Topic = ({topic}: ITopicProps) => {
    const [moreComments, setMoreComments] = useState<boolean>(false)

    const {topicId, photo, fullName, image, content, edited, createDate} = topic

    return (
        <div className="topic-wrapper">
            <div className="topic-content">
                <img className="photo" src={getImageFromResponse(photo)} alt="user"/>
                <div className="topic-main">
                    <p className="username">{fullName}</p>
                    <p className="content">{content}</p>
                    {image && <img className="image" src={getImageFromResponse(image)} alt="content"/>}
                    <div className="topic-info">
                        <p className="edited">{edited ? "edited" : ""}</p>
                        <p className="date">
                            {parseDateToSelectedFormat(new Date(createDate), EParseDateMethods.HHMMSS_DD_MM_YYYY)}
                        </p>
                    </div>
                </div>
            </div>
            {moreComments && <Comments topicId={topicId}/>}
            <div className="topic-comments-button">
                <p onClick={() => setMoreComments(!moreComments)}>
                    {moreComments ? 'Ukryj  komentarze' : 'Więcej komentarzy'}
                </p>
            </div>
        </div>
    )
}

export default Topic