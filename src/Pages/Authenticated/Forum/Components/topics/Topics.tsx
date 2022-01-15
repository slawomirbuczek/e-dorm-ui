import '../../Styles/topics/Topics.scss'
import React, {useEffect, useState} from "react"
import sendRequest from "../../../../../Authentication/sendRequest"
import EApiMethods from "../../../../../Utils/Types/EApiMethods"
import ITopic from "../../Types/topics/ITopic"
import Topic from "./Topic"
import NewTopic from "./NewTopic";

const Topics = () => {
    const [topics, setTopics] = useState<ITopic[]>([])

    useEffect(() => {
        getTopics()
    }, [])

    const getTopics = async () => {
        const result = await sendRequest(EApiMethods.GET, '/topics')

        return setTopics(result)
    }

    return (
        <div className="topics-wrapper">
            <div className="topics-content">
                {
                    topics.map(
                        (topic) => (
                            <Topic topic={topic}/>
                        )
                    )
                }
            </div>
            <NewTopic onNewTopicAdded={() => getTopics()}/>
        </div>
    )
}

export default Topics