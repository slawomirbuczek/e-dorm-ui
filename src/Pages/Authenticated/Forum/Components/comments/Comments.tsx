import '../../Styles/comments/Comments.scss'
import React, {useEffect, useState} from "react"
import ICommentsProps from "../../Types/comments/ICommentsProps"
import sendRequest from "../../../../../Authentication/sendRequest";
import EApiMethods from "../../../../../Utils/Types/EApiMethods";
import IComment from "../../Types/comments/IComment";
import Comment from "./Comment";
import NewComment from "./NewComment";

const Comments = ({topicId}: ICommentsProps) => {
    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const result = await sendRequest(EApiMethods.GET, '/posts/' + topicId)

        return setComments(result)
    }

    return (
        <div className="comments-wrapper">
            {
                comments.map(
                    (comment) => (
                        <Comment comment={comment}/>
                    )
                )
            }
            <NewComment topicId={topicId} onNewCommentAdded={() => getData()}/>
        </div>
    )
}

export default Comments